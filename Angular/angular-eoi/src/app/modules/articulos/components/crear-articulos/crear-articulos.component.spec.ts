import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArticulosComponent } from './crear-articulos.component';

describe('CrearArticulosComponent', () => {
  let component: CrearArticulosComponent;
  let fixture: ComponentFixture<CrearArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
