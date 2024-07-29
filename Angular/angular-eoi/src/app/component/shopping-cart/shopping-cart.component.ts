import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { StoreArticle } from '../../shared/Interface/store-article';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'eoi-shopping-cart',
  standalone: true,
  imports: [JsonPipe],
  inputs: ['articulos'],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnChanges{

  articulos:Array<StoreArticle>=Array.from([]);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Los cambios son:', changes);
  }
}
