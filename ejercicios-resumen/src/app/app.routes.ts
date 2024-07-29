import { RouterModule, Routes } from '@angular/router';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'lista-articulos', component: ListaArticulosComponent },
  //{ path: 'vista-articulo/:id', component: VistaArticuloComponent },
  //{ path: 'update-articulo/:id', component: UpdateArticuloComponent },
  { path: '', redirectTo: '/lista-articulos', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }