import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProveedoresComponent } from './detalle-proveedores.component';

describe('DetalleProveedoresComponent', () => {
  let component: DetalleProveedoresComponent;
  let fixture: ComponentFixture<DetalleProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
