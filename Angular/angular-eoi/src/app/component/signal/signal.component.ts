import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../shared/services/store.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { StoreArticle } from '../../shared/Interface/store-article';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'eoi-signal',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  servicio = inject(StoreService);

  signalEdad:WritableSignal<number> = signal(0);

  signalServicio = toSignal(this.servicio.getArticulosApiRest(), {initialValue:[]}) ;


  
}
 