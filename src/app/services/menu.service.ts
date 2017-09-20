import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {URL} from '../globals';
import { MenuModel } from '../models/menu';

@Injectable()
export class MenuService {

  url = URL;
  menus: any;

  constructor(private http: Http) {}

  getMenus(c_user_id: number): Observable<any[]> {

    const menus$ = this.http
      .get(`${this.url}v_usermenus?filter[where][c_user_id]=11`)
      // .get(`${this.url}v_usermenus`)
      .map(response => response.json());
      return menus$;
  }
}
