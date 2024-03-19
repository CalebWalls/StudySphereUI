import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ response: string }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ error: any }>()
);
