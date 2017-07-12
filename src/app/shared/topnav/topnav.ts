import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedService } from '../../services/logged.service';

declare var $: any;

@Component({
    selector: 'app-top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {

  title = 'Binker Tinker';
  isLoggedIn = false;
  subscription: Subscription;
  error: any;
  items: any;
  user: any;
  name: string;

  constructor(
    private loggedService: LoggedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  changeTheme(color: string): void {
    let link: any = $('<link>');
    link
      .appendTo('head')
      .attr({type : 'text/css', rel : 'stylesheet'})
      .attr('href', 'themes/app-' + color + '.css');
  }

  rtl(): void {
    let body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void  {
    let sidebar: any = $('#sidebar');
    let mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }

  logout() {
    this.loggedService.logout();
    this.router.navigate(['/login']);
  }
}
