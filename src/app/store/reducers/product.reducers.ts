import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import { IProduct } from '../../modules/core/interfaces/product.interface';

export interface ProductState {
  products: IProduct[];
  selectedProduct: IProduct | null;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  error: null,
  selectedProduct: null
};

export const productReducer = createReducer(
  initialState,
  
  // Load Products
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error
  })),

  // Create Product
  on(ProductActions.createProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    error: null
  })),
  on(ProductActions.createProductFailure, (state, { error }) => ({
    ...state,
    error
  })),

  // Update Product
  on(ProductActions.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map(p => p.id === product.id ? product : p),
    error: null
  })),
  on(ProductActions.updateProductFailure, (state, { error }) => ({
    ...state,
    error
  })),

  // Delete Product
  on(ProductActions.deleteProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter(product => product.id !== productId),
    error: null
  })),
  on(ProductActions.deleteProductFailure, (state, { error }) => ({
    ...state,
    error
  })),

    // Get Product By ID
  on(ProductActions.getProductByIdSuccess, (state, { product }) => ({
    ...state,
    selectedProduct: product,
    error: null
  })),
  on(ProductActions.getProductByIdFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
