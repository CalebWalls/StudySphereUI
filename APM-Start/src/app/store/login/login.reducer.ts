import { createReducer, on } from '@ngrx/store';
import { LoginFailure, LoginSuccess } from './login.actions';

export const loginFeatureKey = 'login';

export interface State {
  response: string | null;
}

export const initialState: State = {
  response: null,
};

export const reducer = createReducer(
    initialState,
    on(LoginSuccess, (state, { response }) => ({ ...state, response })),
    on(LoginFailure, (state, { error }) => ({ ...state, response: `Login failed: ${error.message}` })),
  );
  
