import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef  } from '@angular/core';
import { routing } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CommontemplateComponent } from './commontemplate/commontemplate.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NvD3Component } from 'ng2-nvd3';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {Ng2BreadcrumbModule, BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';
import {DataTableModule} from "angular2-datatable";
import 'd3';
import 'nvd3';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CommontemplateComponent,
    NvD3Component
  ],
  imports: [
    routing,
    BrowserModule,
    DashboardModule,
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule.forRoot(),
    Ng2BreadcrumbModule.forRoot(),
    DataTableModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent],
  exports: [BrowserModule, SlimLoadingBarModule],
})
export class AppModule { }
