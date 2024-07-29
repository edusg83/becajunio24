import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { StoreStatus } from '../../shared/Interface/store-status';
import { AsyncPipe, UpperCasePipe, JsonPipe } from '@angular/common';
import { StockPipe } from '../../shared/pipes/stock.pipe';
import { FormsModule } from '@angular/forms';
import { StoreArticle } from '../../shared/Interface/store-article';
import { StoreService } from '../../shared/services/store.service';
import { Observable } from 'rxjs';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'eoi-item-list',
  standalone: true, 
  imports: [StockPipe, UpperCasePipe, FormsModule, AsyncPipe, JsonPipe, ShoppingCartComponent],
  outputs: ['miClick1'],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit {

  articulosObservable!: Observable<Array<StoreArticle>>;
  articulos: Array<StoreArticle> = Array.from([]);

  servicio = inject(StoreService);

  ngOnInit(): void {
    this.articulosObservable = this.servicio.getArticulosApiRest();
    this.servicio.getArticulosApiRest().subscribe({

      next: (articulos: Array<StoreArticle>) => {
        this.articulos = articulos;
      },
      error: (error: any) => {
        console.log('Error en la petición:', error);
      },
      complete: () => {
        console.log('Petición completada.');
      }

    });


  }




  botonDisabled: boolean = true;

  comprarMas(articulo: StoreArticle) {
    if (articulo.stock > 0) {
      articulo.cantidad++;
      articulo.stock--;
    }
  }

  comprarMenos(articulo: StoreArticle) {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
      articulo.stock++;
    }
  }

  miClick1: EventEmitter<String> = new EventEmitter<String>();

  @Output()
  miClick2: EventEmitter<String> = new EventEmitter<String>();

  emiteClick1() {
    this.miClick1.emit('Emitiendo click desde el botón 1.');
  }

  emiteClick2() {
    this.miClick2.emit('Emitiendo click desde el botón 2.');
  }







}
