import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'prefix',
      },
    ],
  },
  {
    path: '***',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
