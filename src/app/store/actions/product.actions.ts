import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../modules/core/interfaces/product.interface';

// Load Products
export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: IProduct[] }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: any }>());

// Create Product
export const createProduct = createAction('[Product] Create Product', props<{ product: IProduct }>());
export const createProductSuccess = createAction('[Product] Create Product Success', props<{ product: IProduct }>());
export const createProductFailure = createAction('[Product] Create Product Failure', props<{ error: any }>());

// Update Product
export const updateProduct = createAction('[Product] Update Product', props<{ product: IProduct }>());
export const updateProductSuccess = createAction('[Product] Update Product Success', props<{ product: IProduct }>());
export const updateProductFailure = createAction('[Product] Update Product Failure', props<{ error: any }>());

// Delete Product
export const deleteProduct = createAction('[Product] Delete Product', props<{ productId: string }>());
export const deleteProductSuccess = createAction('[Product] Delete Product Success', props<{ productId: string }>());
export const deleteProductFailure = createAction('[Product] Delete Product Failure', props<{ error: any }>());

// Get Product By ID
export const getProductById = createAction('[Product] Get Product By ID', props<{ id: string }>());
export const getProductByIdSuccess = createAction('[Product] Get Product By ID Success', props<{ product: IProduct }>());
export const getProductByIdFailure = createAction('[Product] Get Product By ID Failure', props<{ error: any }>());
