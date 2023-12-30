// NGRX
import { createSelector } from '@ngrx/store';
import { AppState } from './../index';

const selectAuthState = (state: AppState) => state.auth;

const isLoggedIn = createSelector(selectAuthState, (auth) => auth.loggedIn);

const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);

const isUserLoaded = createSelector(selectAuthState, (auth) => auth.isUserLoaded);

const currentUser = createSelector(selectAuthState, (auth) => auth.user);


export const AuthSelectors = {
  isLoggedIn,
  isLoggedOut,
  isUserLoaded,
  currentUser,
};
