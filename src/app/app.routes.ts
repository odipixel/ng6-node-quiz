import { Routes,RouterModule} from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { SignupRoutes } from './signup/signup.routes';
import { LoginComponent } from './login/index';
import { DashboardRoutes } from './dashboard/dashboard.routes';
export const routes: Routes = [
  ...LoginRoutes,
  ...SignupRoutes,
  ...DashboardRoutes,
  { path: '**', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes,{useHash: true});