import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../store/login/login.actions';
import { selectLoginState } from '../../store/login/login.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Study Sphere';
  username: string = '';
  password: string = '';
  loginState$ = this.store.select(selectLoginState);

  constructor(private store: Store, private router: Router) {}

  onSubmit() {
    this.store.dispatch(Login({ username: this.username, password: this.password }));
    this.router.navigate(['/home']);
  }
}
