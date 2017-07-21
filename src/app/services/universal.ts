import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoggedService} from '../services/logged.service';
import { URL } from '../globals';

@Injectable()
export class AuthenticationService {

  url = URL;
  version = '22.2.2';
  logged = false;
  username: string;
  lToken: string;
  ad_user_id: number;
  ad_role_id: number;
  token: string;

  constructor(private http: Http, private loggedService: LoggedService) {
    this.token = localStorage.getItem('token');
  }

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
        console.log(`Login failed: ${data}`);
        this.token = data;
      } else {
        this.token = data;
        console.log(data);
        this.loggedService.login(this.token);
        this.logged = true;
        this.ad_user_id = data.ad_user_id;
        this.username = data.name;
        this.token = data.token;
      }
    });
  }

  logout() {
    return this.http.get('login', {
      headers: new Headers({
        'x-security-token': this.token
      })
    })
    .map((res: any) => {
      this.token = undefined;
      this.loggedService.logout();
    });
  }

}
