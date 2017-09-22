import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoggedService} from '../services/logged.service';
import { URL } from '../globals';

@Injectable()
export class AuthenticationService {

  url = URL;
  username: string;

  constructor(
    private http: Http, 
    private loggedService: LoggedService
  ) {}

  login(username: String, password: String) {
    return this.http.post(this.url + 'c_users/login', JSON.stringify({
        name: username,
        password: password
    }), {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .map((res: any) => {
      const data = res.json();
      if (data === 'failed') {
          localStorage.setItem('logged', 'false');
          this.loggedService.logout();
          return data;
      } else {
          this.loggedService.login(data);
          return data;
      }
    });
  }

  logout() {
    return this.http.get('login', null)
    .map((res: any) => {
      this.loggedService.logout();
    });
  }

}
