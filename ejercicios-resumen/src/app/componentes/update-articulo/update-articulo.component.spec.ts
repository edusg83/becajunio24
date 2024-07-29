import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticuloComponent } from './update-articulo.component';

describe('UpdateArticuloComponent', () => {
  let component: UpdateArticuloComponent;
  let fixture: ComponentFixture<UpdateArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
