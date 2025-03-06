import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
      path: 'microA',
      loadComponent: () =>
        loadRemoteModule('microA', './Component').then((m) => m.AppComponent),
    },
    {
      path: 'microB',
      loadComponent: () =>
        loadRemoteModule('microB', './Component').then((m) => m.AppComponent),
    },
    { path: '', redirectTo: '/microA', pathMatch: 'full' }
  ];