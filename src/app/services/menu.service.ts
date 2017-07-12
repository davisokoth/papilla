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

  getMenus(): Observable<MenuModel[]> {
    console.log(`${this.url}c_menus`);
    const menus$ = this.http
      .get(`${this.url}c_menus`)
      .map(response => response.json());
      return menus$;
  }
}
