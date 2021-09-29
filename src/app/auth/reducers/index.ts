import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {User} from '../model/user.model';
import {AuthActions} from '../actions-types';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
}

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    };
  })
)

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];
