import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'eoi-dashboard-articulos',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard-articulos.component.html',
  styleUrl: './dashboard-articulos.component.scss'
})
export class DashboardArticulosComponent {

}
