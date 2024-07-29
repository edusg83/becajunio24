
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css'
})
export class ListaArticulosComponent implements OnInit{
  
  articulos: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/articulos').subscribe(data => {
      this.articulos = data;
    });
  }
  verArticulo(id: number): void {
    this.router.navigate(['/vista-articulo', id]);
  }

}
