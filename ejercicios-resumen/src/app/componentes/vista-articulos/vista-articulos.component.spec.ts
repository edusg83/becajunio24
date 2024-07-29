import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaArticulosComponent } from './vista-articulos.component';

describe('VistaArticulosComponent', () => {
  let component: VistaArticulosComponent;
  let fixture: ComponentFixture<VistaArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
