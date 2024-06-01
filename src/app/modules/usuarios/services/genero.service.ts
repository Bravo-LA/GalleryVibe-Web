import { Injectable } from '@angular/core';
import { Genero } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  generos: Genero[] = [
    { id: 1, genero: 'Masculino' },
    { id: 2, genero: 'Femenino' },
    { id: 3, genero: 'Otros' },
  ]

  get getGeneros(): Genero[] {
    return this.generos
  }

}
