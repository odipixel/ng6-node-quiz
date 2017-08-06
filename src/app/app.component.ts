import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {Ng2BreadcrumbModule, BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private slimLoadingBarService: SlimLoadingBarService,private _router:Router,private breadcrumbService: BreadcrumbService) { }
 
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
