import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarArticulosComponent } from './consultar-articulos.component';

describe('ConsultarArticulosComponent', () => {
  let component: ConsultarArticulosComponent;
  let fixture: ComponentFixture<ConsultarArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
