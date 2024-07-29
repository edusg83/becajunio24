import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard-articulos',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-articulos',
    loadComponent: () => import('./components/dashboard-articulos/dashboard-articulos.component').then(m => m.DashboardArticulosComponent),
    children: [
      {
        path:'consultar-articulos/:id',
        loadComponent: () => import('./components/consultar-articulos/consultar-articulos.component').then(m => m.ConsultarArticulosComponent)
      },
      {
        path:'crear-articulo',
        loadComponent: () => import('./components/crear-articulos/crear-articulos.component').then(m => m.CrearArticulosComponent)
      }
    ]
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticulosModule { }
