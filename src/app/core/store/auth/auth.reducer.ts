import { createReducer, on } from '@ngrx/store';

// Actions
import { AuthActions } from './auth.actions';

// Models
import { User } from '../../../shared/models';

export interface AuthState {
  loggedIn: boolean;
  user?: User;
  isUserLoaded: boolean;
  error?: string;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined,
  isUserLoaded: false,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.appLoad, (state, { payload: { user } }) => ({
    ...state,
    user,
    loggedIn: true,
  })),
  on(AuthActions.login, (state) => ({ ...state, error: undefined })),
  on(AuthActions.loginSuccess, (state) => ({ ...state, loggedIn: true })),
  on(AuthActions.loginFail, (state, { payload: { error } }) => ({
    ...state,
    error,
  })),
  on(AuthActions.logout, (state) => ({ ...initialAuthState })),
  on(AuthActions.loadUserProfileSuccess, (state, { payload: { user } }) => ({
    ...state,
    user,
    isUserLoaded: true,
    loggedIn: true,
  }))
);
