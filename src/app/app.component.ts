import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModel } from './models/menu';

import { LoggedService } from './services/logged.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;
  subscription: Subscription;
  menus: MenuModel[] = [];
  error: any;
  items: any;
  user: any;
  name: string;

  constructor(
    private http: Http,
    private loggedService: LoggedService,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = this.loggedService.isLoggedin().subscribe(isLoggedIn => {
      this.isLoggedIn = this.loggedService.logged;
      if (!this.isLoggedIn) {
        this.isLoggedIn = localStorage.getItem('logged') === 'true' ? true : false;
        if (!this.isLoggedIn) {
          console.log('Not logged in');
          this.router.navigate(['/login']);
        } else {
          this.doLoading();
        }
      } else {
        this.doLoading();
      }
    });
  }

  doLoading() {
    this.user = localStorage.getItem('user');
    this.name = localStorage.getItem('name');
    console.log(this.user);
  }

  getFacilityDetails() {
    this.menuService.getMenus().subscribe(
      data => {
        this.menus = data;
        console.log(data);
      },
      err => { this.error = true; }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  launchAsset(menu: MenuModel) {
    this.router.navigate([`/dynamic/${menu.c_form_id}`]);
  }
}
