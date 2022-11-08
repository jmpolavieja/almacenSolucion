import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[] = [];

  constructor(private provSvc: ProveedoresService) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedores(): void {
    this.proveedores = this.provSvc.getProveedores();
  }

}
