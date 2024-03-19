import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './loginScreen/actions/login.actions';
import { selectLoginState } from './loginScreen/selectors/login.selector';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Study Sphere';
  username: string = '';
  password: string = '';
  loginState$ = this.store.select(selectLoginState);

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
