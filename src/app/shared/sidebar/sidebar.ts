import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModel } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.html'
})

export class SidebarComponent {

  menus: MenuModel[] = [];
  orgmenus: MenuModel[] = [];
  error: any;
  isActive = false;
  showMenu = '';

  constructor(
    private http: Http,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getMenus();
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  getMenus() {
    this.menuService.getMenus().subscribe(
      data => {
        this.menus = data;
        for (let menu of this.menus) {
          if (menu.parentmenu == 0) {
            console.log(menu);
          }
        }
      },
      err => { this.error = true; }
    );
  }
}
