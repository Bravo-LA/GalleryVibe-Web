import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Tecnica } from '@pinturas/interfaces/tecnica';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicasService {

  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = ''

  tipos: Tecnica[] = [
    {
        id: 1,
        nombre: 'Acuarela',
        descripcion: 'Pintura con acuarela, utilizando pigmentos diluidos en agua para crear efectos suaves y transparentes.'
    },
    {
        id: 2,
        nombre: 'Óleo sobre lienzo',
        descripcion: 'Pintura al óleo sobre lienzo, que permite una amplia gama de texturas y profundidades de color.'
    },
    {
        id: 3,
        nombre: 'Acrílico',
        descripcion: 'Pintura acrílica, conocida por su versatilidad y rápido secado, utilizada en diversas superficies.'
    },
    {
        id: 4,
        nombre: 'Témpera',
        descripcion: 'Pintura con témpera, empleando pigmentos mezclados con un aglutinante soluble en agua, ideal para colores opacos y brillantes.'
    },
    {
        id: 5,
        nombre: 'Acrílico sobre lienzo',
        descripcion: 'Pintura acrílica sobre lienzo, combinando la durabilidad del acrílico con la textura del lienzo para efectos vibrantes.'
    },
    {
        id: 6,
        nombre: 'Óleo sobre madera',
        descripcion: 'Pintura al óleo sobre madera, ofreciendo una base rígida y duradera que destaca los detalles y la riqueza del color.'
    },
    {
        id: 7,
        nombre: 'Acrílico y collage',
        descripcion: 'Técnica mixta de acrílico y collage, combinando pintura y elementos pegados para crear texturas únicas y capas de significado.'
    },
    {
        id: 8,
        nombre: 'Acuarela sobre papel',
        descripcion: 'Pintura con acuarela sobre papel, permitiendo detalles delicados y efectos de lavado sutiles.'
    },
    {
        id: 9,
        nombre: 'Carboncillo',
        descripcion: 'Dibujo con carboncillo, utilizando carbón vegetal para crear líneas fuertes y sombras profundas.'
    },
    {
        id: 10,
        nombre: 'Mixta sobre lienzo',
        descripcion: 'Técnica mixta sobre lienzo, integrando diversos materiales y técnicas para una expresión artística rica y variada.'
    }
  ]

  get(): Observable<Tecnica[]> {
    return of(this.tipos);
  }

  put(tecnica: Tecnica): Observable<any> {
    const index = this.tipos.findIndex(t => t.id === tecnica.id);
    if (index !== -1) {
      this.tipos[index] = tecnica;
      return of('Técnica actualizada correctamente');
    } else {
      return of('No se encontró la técnica para actualizar');
    }
  }

  post(tecnica: Tecnica): Observable<any> {
    tecnica.id = this.tipos.length + 1; 
    this.tipos.push(tecnica);
    return of('Técnica agregada correctamente');
  }

  delete(id: number): Observable<any> {
    const index = this.tipos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tipos.splice(index, 1);
      return of('Técnica eliminada correctamente');
    } else {
      return of('No se encontró la técnica para eliminar');
    }
  }

}
