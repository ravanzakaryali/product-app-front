import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./modules/product/product.module").then(e => e.ProductModule)
    },
];
