import { createAction, props } from '@ngrx/store';
import { AuthActionsTypes } from './auth.constants';
import { User } from '@app/shared/models';

const appLoad = createAction(AuthActionsTypes.APP_LOAD, props<{ payload: { user: User } }>());
const login = createAction(AuthActionsTypes.LOGIN, props<{ payload: { username: string; password: string } }>());
const loginSuccess = createAction(AuthActionsTypes.LOGIN_SUCCESS, props<{ payload: { access_token: string } }>());
const loginFail = createAction(AuthActionsTypes.LOGIN_FAIL, props<{ payload: { error: string } }>());
const logout = createAction(AuthActionsTypes.LOGOUT);
const loadUserProfile = createAction(AuthActionsTypes.LOAD_PROFILE, props<{ payload?: { source?: string } }>());
const loadUserProfileSuccess = createAction(
  AuthActionsTypes.LOAD_PROFILE_SUCCESS,
  props<{ payload: { user: User } }>()
);


export const AuthActions = {
  login,
  logout,
  appLoad,
  loginFail,
  loginSuccess,
  loadUserProfile,
  loadUserProfileSuccess,
};
