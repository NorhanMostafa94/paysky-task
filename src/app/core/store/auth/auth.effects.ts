// Angular
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

// RxJS
import { tap, catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

// NGRX
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { AuthSelectors } from './auth.selectors';
import { AuthActionsTypes } from './auth.constants';
import { AuthActions } from './auth.actions';

// Services
import { AuthService } from '@app/core/services/auth.service';

// Models
import { AppState } from '..';

@Injectable()
export class AuthEffects implements OnInitEffects {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private actions$: Actions,
    private router: Router
  ) {}

  ngrxOnInitEffects() {
    const user = localStorage.getItem('profile');
    return user
      ? { type: AuthActionsTypes.APP_LOAD, payload: { user: JSON.parse(user) } }
      : { type: 'NO_ACTION' };
  }

  appLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.appLoad),
      map((action) => AuthActions.loadUserProfile({}))
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ payload: { username, password } }) =>
        this.authService.login(username, password).pipe(
          map((res) => AuthActions.loginSuccess({ payload: res })),
          catchError((error) => of(AuthActions.loginFail({ payload: error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ payload }) => {
        if (payload?.access_token) {
          localStorage.setItem('token', payload.access_token);
        }

        this.router.navigate(['/']);
      }),
      map(() => AuthActions.loadUserProfile({}))
    )
  );

  loadUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUserProfile),
      switchMap(({ payload }) =>
        this.authService.getProfile().pipe(
          tap((_) => {
            if (payload?.source === 'login') {
              this.router.navigate(['/']);
            }
          })
        )
      ),
      map((user) => AuthActions.loadUserProfileSuccess({ payload: { user } }))
    )
  );

  loadUserProfileSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loadUserProfileSuccess),
        tap((action) => {
          localStorage.setItem('profile', JSON.stringify(action.payload.user));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        })
      ),
    { dispatch: false }
  );
}
