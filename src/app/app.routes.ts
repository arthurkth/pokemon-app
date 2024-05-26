import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'details/:name',
        loadComponent: () =>
          import('./details/details.page').then((m) => m.DetailsPage),
      },
      {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('./favorites/favorites.page').then((m) => m.FavoritesPage),
      },
    ],
  },
];
