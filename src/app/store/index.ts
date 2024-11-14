import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromProducts from './reducers/product.reducers';
import { environment } from '../../environments/environment.development';

export interface AppState {
    products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
    products: fromProducts.productReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
