import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { StockPipe } from '../../shared/pipes/stock.pipe';
import { ItemListComponent } from "../item-list/item-list.component";
import { OnInit } from '@angular/core';

@Component({
  selector: 'eoi-store-dashboard',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, JsonPipe, StockPipe, ItemListComponent],
  templateUrl: './store-dashboard.component.html',
  styleUrl: './store-dashboard.component.scss'
})
export class StoreDashboardComponent implements OnInit {
  ngOnInit(): void {
    this.usuario = `Usted ha iniciado sesion como ${this.usuario}` 
  }

  esUsuarioAdmin: boolean = false; 
  usuario: string="Usuario 1";
  
  recogeClick1(evento:String){
    console.log(`Recogiendo click del botón 1`, evento);
  }

  recogeClick2(evento:String){
    console.log(`Recogiendo click del botón 2`, evento);
  }
}

