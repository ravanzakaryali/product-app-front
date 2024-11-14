import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductActions from '../../../../store/actions/product.actions';
import { selectProducts, selectProductError } from '../../../../store/selectors/product.selectors';
import { IProduct } from '../../../core/interfaces/product.interface';
import { AsyncPipe } from '@angular/common';
import { ProductState } from '../../../../store/reducers/product.reducers';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports:[AsyncPipe, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]>; 
  error$: Observable<any>;           

  constructor(private store: Store<ProductState>) {
    this.products$ = this.store.pipe(select(selectProducts));
    this.error$ = this.store.pipe(select(selectProductError));
  }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  deleteProduct(id:string):void{
    this.store.dispatch(ProductActions.deleteProduct({productId:id}))
  }
}
