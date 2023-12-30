import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

// Components
import { TableComponent } from './components/table/table.component';
import { PhotoCellComponent } from './components/photo-cell/photo-cell.component';
import { LongTextCellComponent } from './components/long-text-cell/long-text-cell.component';
import { ActionCellComponent } from './components/action-cell/action-cell.component';

@NgModule({
  declarations: [
    TableComponent,
    PhotoCellComponent,
    LongTextCellComponent,
    ActionCellComponent,
  ],
  imports: [CommonModule, MatTableModule, MatTooltipModule, MatIconModule],
  exports: [TableComponent],
})
export class TableModule {}
