import { Route } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { ChartsRoutes } from './charts/charts.routes';
import { ComponentsRoutes } from './components/components.routes';
import { FormsRoutes } from './forms/forms.routes';
import { MapsRoutes } from './maps/maps.routes';
import { TablesRoutes } from './tables/tables.routes';
import { EditorsRoutes } from './editors/editors.routes';
import { PagesRoutes } from './pages/pages.routes';
import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        ...HomeRoutes,
        ...ChartsRoutes,
        ...ComponentsRoutes,
        ...FormsRoutes,
        ...MapsRoutes,
        ...TablesRoutes,
        ...EditorsRoutes,
        ...PagesRoutes
      ]
    }
];
