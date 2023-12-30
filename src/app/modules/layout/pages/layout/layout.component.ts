import { Component } from '@angular/core';

// Constants
import { MAIN_ROUTES } from '../../routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  ROUTES = MAIN_ROUTES;
}
