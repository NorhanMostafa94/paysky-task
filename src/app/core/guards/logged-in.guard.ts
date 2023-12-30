// Angular
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

// RXJS
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// NGRX
import { AuthSelectors } from '@app/core/store/auth/auth.selectors';
import { AppState } from '@app/core/store';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(AuthSelectors.isLoggedOut).pipe(
      tap((loggedOut) => {
        if (!loggedOut) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
