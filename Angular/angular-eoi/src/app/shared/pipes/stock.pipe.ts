import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
  standalone: true
})
export class StockPipe implements PipeTransform {

  transform(stock: number, mensaje:String): String {
    return stock > 0 ? stock.toString() : mensaje ;
  }

}
