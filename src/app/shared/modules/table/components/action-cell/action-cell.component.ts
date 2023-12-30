import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableAction, TableColumns } from '../../models';

@Component({
  selector: 'b5-action-cell',
  templateUrl: './action-cell.component.html',
  styleUrls: ['./action-cell.component.scss'],
})
export class ActionCellComponent {
  @Input() row: any;
  @Input() column!: TableColumns;
  @Input() actions: TableAction[] = [];

  @Output() actionClick = new EventEmitter<any>();
}
