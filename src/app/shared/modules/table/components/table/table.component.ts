import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Models
import { TableColumns } from '../../models';
import { TableAction } from '../../models/table-action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  dataColumns: TableColumns[] = [];
  tableColumnsHeaders: string[] = [];
  tableRows!: MatTableDataSource<any>;
  tableActions: TableAction[] = [];

  @Input() set columns(value: TableColumns[]) {
    this.dataColumns = value;
    this.tableColumnsHeaders = value.map((item) => item.model);
  }

  @Input() set rows(value: any[]) {
    this.tableRows = new MatTableDataSource(value);
  }
  @Input() set actions(value: TableAction[]) {
    this.tableActions = value.length ? value : [];
  }

  @Output() actionClick = new EventEmitter<any>();


  constructor() {}
}
