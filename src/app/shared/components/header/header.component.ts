import { Component, EventEmitter, Output } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store';
import { AuthSelectors } from '@app/core/store/auth/auth.selectors';
import { AuthActions } from '@app/core/store/auth/auth.actions';

// Models
import { User } from '@app/shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSideBar: EventEmitter<boolean> = new EventEmitter(false);
  isSideBarClosed: boolean = false;

  user!: User;

  constructor(private store: Store<AppState>) {
    this.store.select(AuthSelectors.currentUser).subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  /**
   * Toggle navigation sidebar
   */
  onToggleSideBar() {
    this.isSideBarClosed = !this.isSideBarClosed;
    this.toggleSideBar.emit(this.isSideBarClosed);
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
