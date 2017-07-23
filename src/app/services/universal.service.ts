import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URL } from '../globals';

@Injectable()
export class UniversalService {

  url = URL;
  version = '22.2.2';
  logged = false;
  username: string;
  lToken: string;
  ad_user_id: number;
  ad_role_id: number;
  token: string;

  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
  }

  search(endPoint: String) {
    return this.http.get(this.url + endPoint)
      .map((res: any) => {
        const data = res.json();
    });
  }

}
