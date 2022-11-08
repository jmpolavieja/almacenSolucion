import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  // Propiedades
  productos: Producto[] = [];
  productoSeleccionado?: Producto;

  constructor(private prodSvc: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productos = this.prodSvc.getProductos();
  }

  selectProd(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

}
