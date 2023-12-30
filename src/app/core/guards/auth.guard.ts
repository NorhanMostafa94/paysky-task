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

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(AuthSelectors.isLoggedIn).pipe(
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }
}
