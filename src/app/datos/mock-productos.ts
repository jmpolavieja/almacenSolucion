import { Producto } from '../interfaces/producto';


export const PRODUCTOS: Producto[] = [
  {
    id: 1,
    nombre: 'Portátil LEDD i3400',
    precio: 1300,
    stock: 5,
    familia: 'portátiles gaming',
    imagen: 'portatil.jpg'
  },
  {
    id: 2,
    nombre: 'ePad Platano j690',
    precio: 325,
    stock: 15,
    familia: 'tablets',
    imagen: 'tablet.jpg'
  },
  {
    id: 3,
    nombre: 'Superficie sm450',
    precio: 875,
    stock: 4,
    familia: 'tablets',
    imagen: 'tablet2.jpg'
  },
  {
    id: 4,
    nombre: 'Kit teclado y ratón inalámbricos Pocosoft h50',
    precio: 45,
    stock: 3,
    familia: 'Periféricos',
    imagen: 'keyboard.jpg'
  },
  {
    id: 5,
    nombre: 'Impresora Láser FL 550 color',
    precio: 540,
    stock: 4,
    familia: 'Impresoras',
    imagen: 'color.jpg'
  }
]
