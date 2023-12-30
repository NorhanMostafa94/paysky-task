import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';

// Modules
import { TableModule } from '@app/shared/modules';
import { SharedModule } from '@app/shared/shared.module';

// Pages
import { CategoriesListComponent } from './pages';

// Components
import { AddEditCategoryComponent } from './components';

const PAGES = [CategoriesListComponent];

const COMPONENTS = [AddEditCategoryComponent];

@NgModule({
  declarations: [...PAGES, ...COMPONENTS],
  imports: [CommonModule, CategoriesRoutingModule, TableModule, SharedModule],
})
export class CategoriesModule {}
