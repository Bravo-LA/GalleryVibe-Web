import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Tipo } from '@pinturas/interfaces/tipo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = ''

  tipos: Tipo[] = [
    { id: 1, descripcion: 'Paisaje' },
    { id: 2, descripcion: 'Retrato' },
    { id: 3, descripcion: 'Abstracto' },
    { id: 4, descripcion: 'Naturaleza muerta' },
    { id: 5, descripcion: 'Figurativo' },
    { id: 6, descripcion: 'Surrealismo' }
  ]

  get():Observable<Tipo[]> {
    return of(this.tipos)
  }

}
