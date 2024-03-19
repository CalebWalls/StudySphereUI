import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../store/login/login.actions';
import { LoginState } from '../../store/login/login.reducer';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  title = 'Study Sphere';
  username: string = '';
  password: string = '';
  loginState$: Observable<LoginState>;
  loginSubscription!: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {
    this.loginState$ = this.store.select(state => state.login);
  }
  
  ngOnInit() {
    this.loginState$ = this.store.select(state => state.login);
    this.loginSubscription = this.loginState$.subscribe(state => {
      console.log(state);
      if (state.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    });
    this.login();
  }
  
  login() {
    if (this.username && this.password) {
      this.store.dispatch(Login({ username: this.username, password: this.password }));
    }
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
