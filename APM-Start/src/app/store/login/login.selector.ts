import { createFeatureSelector } from '@ngrx/store';
import { State, loginFeatureKey } from './login.reducer';

export const selectLoginState = createFeatureSelector<State>(loginFeatureKey);
