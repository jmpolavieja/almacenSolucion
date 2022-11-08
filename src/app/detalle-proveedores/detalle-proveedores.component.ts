import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../servicios/proveedores.service';
import { Proveedor } from '../interfaces/proveedor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-proveedores',
  templateUrl: './detalle-proveedores.component.html',
  styleUrls: ['./detalle-proveedores.component.css']
})
export class DetalleProveedoresComponent implements OnInit {

  id: number = 0;
  proveedor?: Proveedor;

  constructor(
    private ruta: ActivatedRoute,
    private provSvc: ProveedoresService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.getDetalleProveedor(this.id);
  }

  getDetalleProveedor(id: number): void {
    this.proveedor = this.provSvc.getDetalle(id);
  }

  volver(): void {
    this.location.back();
  }

}
