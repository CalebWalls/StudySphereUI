import { createFeatureSelector } from '@ngrx/store';
import { State, loginFeatureKey } from '../reducers/login.reducer';

export const selectLoginState = createFeatureSelector<State>(loginFeatureKey);
