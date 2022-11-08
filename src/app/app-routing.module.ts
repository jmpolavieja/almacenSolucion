import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { DetalleProveedoresComponent } from './detalle-proveedores/detalle-proveedores.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent
  },
  {
    path: 'detalle-proveedor/:id',
    component: DetalleProveedoresComponent
  },
  {
    path: '**',
    redirectTo: '/productos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
