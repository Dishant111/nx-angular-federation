import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';


export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path:'remotea',
    loadChildren: () =>
      loadRemoteModule('remotea','./Routes').then((m) =>{ 
            return m.remoteRoutes})
      //  import('remotea/Routes').then((m) =>{ 
      //    return m.remoteRoutes}),
  },
];

