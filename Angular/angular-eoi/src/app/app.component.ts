import { Component, Version } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreDashboardComponent } from './component/store-dashboard/store-dashboard.component';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  env = environment;
};

