import { createReducer, on } from '@ngrx/store';
import * as LoginPageActions from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State {
  response: string | null;
}

export const initialState: State = {
  response: null,
};

export const reducer = createReducer(
    initialState,
    on(LoginPageActions.loginSuccess, (state, { response }) => ({ ...state, response })),
    on(LoginPageActions.loginFailure, (state, { error }) => ({ ...state, response: `Login failed: ${error.message}` })),
  );
  
