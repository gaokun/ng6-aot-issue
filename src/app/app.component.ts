import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient) {

    // Just sent an ajax request
    this.http.get('user').subscribe(() => {
      console.log('get user done');
    }, () => {
      console.error('get user error');
    });
  }
}
