import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as LoginPageActions from '../actions/login.actions';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      mergeMap(action =>
        this.loginService.login(action.username, action.password).pipe(
          map(response => LoginPageActions.loginSuccess({ response })),
          catchError((error) => of(LoginPageActions.loginFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
