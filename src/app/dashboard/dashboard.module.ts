import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../commontemplate/index';
import {SidebarComponent} from '../commontemplate/index';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { ComponentsComponent } from './components/components.component';
import { MapsComponent } from './maps/maps.component';
import { EditorsComponent } from './editors/editors.component';
import { PagesComponent } from './pages/pages.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgmCoreModule} from 'angular2-google-maps/core';
//import { AgmCoreModule } from '@agm/core';
import { AceEditorDirective } from 'ng2-ace-editor';
import {Ng2BreadcrumbModule,BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';
import { DataTableModule } from "angular2-datatable";
import { ApiserviceService } from './index';
@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      SlimLoadingBarModule.forRoot(),
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBI8kBeZd_GPlNMSvGgGETCQH28x51gW2s'//Please add your own api key
    }),
        Ng2SmartTableModule,
        Ng2BreadcrumbModule.forRoot(),
        DataTableModule
    ],
    declarations: [
       DashboardComponent,
       TopNavComponent,
       SidebarComponent,
       ChartsComponent,
       TablesComponent,
       FormsComponent,
       ComponentsComponent,
       MapsComponent,
       EditorsComponent,
       PagesComponent,
       AceEditorDirective
     ],
    providers: [BreadcrumbService,ApiserviceService],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent,SlimLoadingBarModule]
})

export class DashboardModule { }
