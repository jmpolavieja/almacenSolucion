import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { PROVEEDORES } from '../datos/mock-proveedores';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private proveedores: Proveedor[] = [];

  constructor() {
    this.proveedores = PROVEEDORES;
  }

  getProveedores(): Proveedor[] {
    return this.proveedores;
  }

  getDetalle(id: number): Proveedor {
    const elProveedor = this.proveedores.find(p => p.id === id)!;
    return elProveedor;
  }
}
