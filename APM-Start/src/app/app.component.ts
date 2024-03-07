import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Study Sphere';
  username: string = '';
  password: string = '';
  response: string = ''; // Corrected here

  constructor(private http: HttpClient) {}

  onSubmit() {
    const url = 'http://localhost:5192/User/login';
    this.http.post(url, { username: this.username, password: this.password }, { responseType: 'text' }).subscribe(
      (res: string) => {
        this.response = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  
}
