import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

// Pages
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { TableModule } from '@app/shared/modules';

const PAGES = [ProductsListComponent];

@NgModule({
  declarations: [...PAGES],
  imports: [CommonModule, ProductsRoutingModule, TableModule],
})
export class ProductsModule {}
