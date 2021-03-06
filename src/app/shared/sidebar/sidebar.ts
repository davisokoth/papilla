import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModel } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.html',
  styleUrls: [ 'sidebar.css' ]
})

export class SidebarComponent implements OnInit{

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
    
  }

  ngOnInit() {
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
    let user = JSON.parse(localStorage.getItem('user'))[0];
    this.menuService.getMenus(user.c_user_id).subscribe(
      data => {
        this.orgmenus = data;
        for (let menu of this.orgmenus) {
          if (menu.parentmenu == 0) {
            menu.navitems = [];
            for (let item of this.orgmenus) {
              if (item.parentmenu === menu.c_menu_id) {
                menu.navitems.push(item);
              }
            }
            this.menus.push(menu);
          }
        }
      },
      err => { 
        this.error = true; 
        console.log(err);
      }
    );
  }

  launchAction(menu: MenuModel) {
    if (menu.action === 'form') {
      this.router.navigate([menu.url]);
    }
    if (menu.action === 'activity') {
      // this.router.navigate([`/dashboard/queue`]);
      this.router.navigate([menu.url, menu.record_id]);
    }
    if (menu.action === 'custom') {
      // this.router.navigate([`/dashboard/queue`]);
      this.router.navigate([menu.url]);
    }
  }
}
