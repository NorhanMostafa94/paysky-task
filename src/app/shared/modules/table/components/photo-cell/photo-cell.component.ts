import { Component, Input } from '@angular/core';

@Component({
  selector: 'b5-photo-cell',
  templateUrl: './photo-cell.component.html',
  styleUrls: ['./photo-cell.component.scss'],
})
export class PhotoCellComponent {
  @Input() value: any;
}
