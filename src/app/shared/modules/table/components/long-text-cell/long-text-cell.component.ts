import { Component, Input } from '@angular/core';

@Component({
  selector: 'b5-long-text-cell',
  templateUrl: './long-text-cell.component.html',
  styleUrls: ['./long-text-cell.component.scss'],
})
export class LongTextCellComponent {
  @Input() value: any;
}
