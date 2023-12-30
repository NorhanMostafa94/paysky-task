import { AfterViewInit, Component } from '@angular/core';

// Constants
import { MAIN_ROUTES } from '../../routes';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { delay } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  isSideBarClosed: boolean = false;
  ROUTES = MAIN_ROUTES;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngAfterViewInit(): void {
    this.handleSideNavBreakPoints();
  }

  handleSideNavBreakPoints() {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(delay(1))
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.isSideBarClosed = true;
          // this.expansion?.close();
        } else {
          this.isSideBarClosed = false;
          // this.expansion?.open();
        }
      });
  }
}
