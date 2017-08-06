import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
declare var $: any;

@Component({
    selector: 'app-top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent implements OnInit {
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
  constructor(private slimLoadingBarService: SlimLoadingBarService,private _router:Router) { }

  
  startLoading() {
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
  }
  finishLoading(){
    this.slimLoadingBarService.complete();
  }
  ngOnInit() {
     this._router.events.subscribe((event: any): void => {
      this.navigationInterceptor(event);
    });
  }
  
  navigationInterceptor(event): void {
    if (event instanceof NavigationStart) {
      this.startLoading();
    }
    if (event instanceof NavigationEnd) {
      this.finishLoading();    }
    if (event instanceof NavigationCancel) {
      this.finishLoading();
    }
    if (event instanceof NavigationError) {
      this.finishLoading();
    }
  }
}
