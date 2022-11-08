import { Proveedor } from '../interfaces/proveedor';



export const PROVEEDORES: Proveedor[] = [
  {
    id: 101,
    nombre: 'Pocosoft SL',
    contacto: 'Juan Manuel Pedrera López',
    direccion: 'C/Pececillo, 45, Pol. Ind. MareNostrum',
    medio: {
      movil: '600999888',
      email: 'jmpedlop@pcosoft.com'
    }
  },
  {
    id: 131,
    nombre: 'LEDD SUL',
    contacto: 'Marina Cuadrado Gómez',
    direccion: 'C/Esfera, 5, Pol. Ind. Geometría',
    medio: {
      movil: '666000222',
      email: 'marinacuadrado@ledd.org'
    }
  },
  {
    id: 142,
    nombre: 'ELBONO SIL',
    contacto: 'Charly Stevenson',
    direccion: 'C/Mercury, 45, Pol. Ind. Island',
    medio: {
      movil: '+41752999888',
      email: 'charlyson@elbonosil.com'
    }
  },
  {
    id: 159,
    nombre: 'FP TICS SA',
    contacto: 'Olga Kurilenko',
    direccion: 'C/Alondra, 77, Pol. Ind. Nidos',
    medio: {
      movil: '699875421',
      email: 'olgakuri@fptics.org'
    }
  },
  {
    id: 258,
    nombre: 'Papeles del Este SA',
    contacto: 'Juan Contreras Murillo',
    direccion: 'C/Arce, 4, Pol. Ind. BosqueVerde',
    medio: {
      movil: '665421242',
      email: 'jcm@papeleste.com'
    }
  }
]
