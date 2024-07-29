import { Component, Version } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StoreDashboardComponent } from './component/store-dashboard/store-dashboard.component';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreDashboardComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  env = environment;
};

