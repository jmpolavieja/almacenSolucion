import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { PRODUCTOS } from '../datos/mock-productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[] = [];

  constructor() {
    this.productos = PRODUCTOS;
   }

  getProductos(): Producto[] {
    return this.productos;
  }

}
