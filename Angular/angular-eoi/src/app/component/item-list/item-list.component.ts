import { Component } from '@angular/core';
import { StoreStatus } from '../../shared/Interface/store-status';
import { UpperCasePipe } from '@angular/common';
import { StockPipe } from '../../shared/pipes/stock.pipe';
import { articles } from '../../shared/Interface/articles';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'eoi-item-list',
  standalone: true,
  imports: [StockPipe, UpperCasePipe, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  articulos = articles;
  botonDisabled:boolean = true;

  comprarMas(nombreArticulo: string){
     this.articulos.forEach(articulo => {
       if(articulo.nombre === nombreArticulo){ 
         if(articulo.stock > 0){
            articulo.cantidad++;
            articulo.stock--;
         }
       }
     });
  }

  comprarMenos(nombreArticulo: string){ 
     this.articulos.forEach(articulo => {
       if(articulo.nombre === nombreArticulo){
         if(articulo.cantidad > 0){
            articulo.cantidad--;
            articulo.stock++;
         }
       }
     });
  }

  //Sin usar
  cambiaInput(evento: Event){
    const target = evento.target as HTMLInputElement
    console.log('cambiaInput',target.value);
}
  cambiaLista(evento: Event){
    const target = evento.target as HTMLSelectElement
    console.log('cambia lista',target.value);
  
}
}
