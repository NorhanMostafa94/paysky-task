import { AuthState, authReducer } from './auth/auth.reducer';

// NGRX
import { ActionReducerMap } from '@ngrx/store';

import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = { router: routerReducer, auth: authReducer };
