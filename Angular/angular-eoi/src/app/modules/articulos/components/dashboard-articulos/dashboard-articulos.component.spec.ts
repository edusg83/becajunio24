import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArticulosComponent } from './dashboard-articulos.component';

describe('DashboardArticulosComponent', () => {
  let component: DashboardArticulosComponent;
  let fixture: ComponentFixture<DashboardArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
