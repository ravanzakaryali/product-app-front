import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from '../actions/product.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../../modules/core/services/product.service';
import { IProduct } from '../../modules/core/interfaces/product.interface';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {
  private actions$: Actions = inject(Actions)
  private router: Router = inject(Router);
  constructor(private productService: ProductService) {}

  // Load Products
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getAll().pipe(
          map((products: IProduct[]) => ProductActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error })))
        )
      )
    )
  );

   // Get Product By ID
   getProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductById),
      mergeMap(action =>
        this.productService.getById(action.id).pipe(
          map((product: IProduct) => ProductActions.getProductByIdSuccess({ product })),
          catchError(error => of(ProductActions.getProductByIdFailure({ error })))
        )
      )
    )
  );

  // Create Product
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      mergeMap(action =>
        this.productService.create(action.product).pipe(
          map((product: IProduct) => {
            this.router.navigate(['/']); 
            return ProductActions.createProductSuccess({ product });
          }),
          catchError(error => {
            return of(ProductActions.createProductFailure({ error }))
          })
        )
      )
    )
  );

  // Update Product
  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      mergeMap(action =>
        this.productService.update(action.product).pipe(
          map((product: IProduct) => {
            this.router.navigate(['/']); 
            return ProductActions.updateProductSuccess({ product })}),
          catchError(error => of(ProductActions.updateProductFailure({ error })))
        )
      )
    )
  );

  // Delete Product
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap(action =>
        this.productService.delete(action.productId).pipe(
          map(() => {
            this.router.navigate(['/']); 
            return ProductActions.deleteProductSuccess({ productId: action.productId })}),
          catchError(error => of(ProductActions.deleteProductFailure({ error })))
        )
      )
    )
  );
}
