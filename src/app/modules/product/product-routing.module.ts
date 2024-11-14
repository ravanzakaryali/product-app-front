import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductManageComponent } from './components/product-manage/product-manage.component';

const routes: Routes = [
  {path: '', component:ProductListComponent},
  {
    path:'edit/:id', component:ProductManageComponent
  },
  {
    path:'new', component:ProductManageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
