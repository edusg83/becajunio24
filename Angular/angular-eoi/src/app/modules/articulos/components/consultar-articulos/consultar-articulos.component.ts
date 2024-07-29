import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eoi-consultar-articulos',
  standalone: true,
  imports: [],
  templateUrl: './consultar-articulos.component.html',
  styleUrl: './consultar-articulos.component.scss'
})
export class ConsultarArticulosComponent implements OnInit {

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
    });

  }
}
