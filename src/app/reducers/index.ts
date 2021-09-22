import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AuthModule} from '../auth/auth.module';

export interface AppState {

}

export const reducers: ActionReducerMap<AuthModule> = {

};


export const metaReducers: MetaReducer<AuthModule>[] = !environment.production ? [] : [];
