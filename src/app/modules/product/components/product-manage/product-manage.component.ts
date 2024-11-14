import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ProductActions from '../../../../store/actions/product.actions';
import { selectSelectedProduct } from '../../../../store/selectors/product.selectors';
import { IProduct } from '../../../core/interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { UnsubscriableBaseDirective } from '../../../core/directives/unsubscriable-base.directive';

@Component({
  selector: 'app-product-manage',
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent extends UnsubscriableBaseDirective implements OnInit  {
  productForm!: FormGroup;
  isEditMode: boolean = false;
  productId: string | null = null;
  product$: Observable<IProduct | null>= new Observable();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    super()
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });

    this.route.paramMap.pipe(takeUntil(this.unsubscribe)).subscribe(params => {
      this.productId = params.get('id');
      if (this.productId) {
        this.isEditMode = true;
        this.loadProduct();
      }
    });
  }

  loadProduct(): void {
    if (this.productId) {
      this.store.dispatch(ProductActions.getProductById({ id: this.productId! }));
    
      this.product$ = this.store.select(selectSelectedProduct, { id: this.productId });
      this.product$.pipe(takeUntil(this.unsubscribe)).subscribe(product => {
        if (product) {
          this.productForm.patchValue({
            title: product.title,
            description: product.description,
            price: product.price
          });
        }
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      
      return};

    const productData: IProduct = this.productForm.value;

    if (this.isEditMode && this.productId) {
      this.store.dispatch(ProductActions.updateProduct({ product: { ...productData, id: this.productId } }));
    } else {
      this.store.dispatch(ProductActions.createProduct({ product: productData }));
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
