import {Oferta} from './oferta';

export interface Sitio {
    id: number;
    nombre?: string;
    ubicacion?: string;
    descripcion?: string;
    descripcionlarga?: string;
    imagenes?: any[];
    ofertas: Oferta[];
}
