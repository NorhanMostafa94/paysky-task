import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

// Modules
import { SharedModule } from '@app/shared/shared.module';
import { TableModule } from '@app/shared/modules';

// Pages
import { ProductsListComponent } from './pages';

// Components
import { AddEditProductComponent } from './components';

const PAGES = [ProductsListComponent];
const COMPONENTS = [AddEditProductComponent];

@NgModule({
  declarations: [...PAGES, ...COMPONENTS],
  imports: [CommonModule, ProductsRoutingModule, TableModule, SharedModule],
})
export class ProductsModule {}
