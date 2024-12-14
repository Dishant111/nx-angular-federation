import { SomethingComponent } from './../something/something.component';
import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: 'something', component: SomethingComponent },
];
