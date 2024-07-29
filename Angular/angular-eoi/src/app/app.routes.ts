import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: 'store',
    loadComponent: () => import('./component/store-dashboard/store-dashboard.component').then(m => m.StoreDashboardComponent)
},

{
    path: 'articulos',
    loadChildren: () => import('./modules/articulos/articulos.module').then(m => m.ArticulosModule)
},

{
    path: 'signal',
    loadComponent: () => import('./component/signal/signal.component').then(m => m.SignalComponent)
}

];
