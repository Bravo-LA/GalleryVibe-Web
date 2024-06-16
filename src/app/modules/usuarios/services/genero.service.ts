import { Injectable } from '@angular/core';
import { Genero } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  generos: Genero[] = [
    { id: 1, genero: 'Masculino', fechaReg: new Date('2023-01-01T10:00:00Z') },
    { id: 2, genero: 'Femenino', fechaReg: new Date('2023-01-02T10:00:00Z') },
    { id: 3, genero: 'Otros', fechaReg: new Date('2023-01-03T10:00:00Z') },
  ];


  getGeneros(): Genero[] {
    return this.generos
  }

  addGenero(objeto: Genero): void {
    this.generos.push(objeto);
  }

  updateGenero(objeto: Genero) {
    const index = this.generos.findIndex(g => g.id === objeto.id);
    if (index !== -1) {
      this.generos[index] = { ...this.generos[index], ...objeto };
    }
  }

  deleteGenero(id: number) {
    const index = this.generos.findIndex(g => g.id === id);
    if (index !== -1) {
      this.generos.splice(index, 1);
    }
  }

}
