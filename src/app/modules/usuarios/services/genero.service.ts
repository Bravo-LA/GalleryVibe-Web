import { Injectable } from '@angular/core';
import { Genero } from '../interfaces/genero';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private readonly url: string = environment.endpoint + 'Genero/'

  constructor(private _http: HttpClient) { }

  getGeneros(): Observable<Genero[]> {
    return this._http.get<Genero[]>(this.url)
  }

  addGenero(objeto: Genero): Observable<string> {
    return this._http.post(this.url, objeto, { responseType: 'text' })
  }

  updateGenero(objeto: Genero): Observable<string> {
    return this._http.put(this.url, objeto, { responseType: 'text' })
  }

  deleteGenero(id: number): Observable<string> {
    return this._http.delete(this.url + id, { responseType: 'text' })
  }

}
