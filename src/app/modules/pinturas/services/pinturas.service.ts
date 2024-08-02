import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Pintura } from '@pinturas/interfaces/pintura';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinturasService {

  private readonly url: string = environment.endpoint + 'Pintura/'

  constructor(private _http: HttpClient) { }

  getPinturas(): Observable<Pintura[]> {
    return this._http.get<Pintura[]>(this.url)
  }

  getPinturasPorIdUsuario(id: number): Observable<Pintura[]> {
    return this._http.get<Pintura[]>(this.url+id)
  }

  addPintura(objeto: Pintura): Observable<string> {
    return this._http.post(this.url, objeto, { responseType: 'text' })
  }

  updatePintura(objeto: Pintura): Observable<string> {
    return this._http.put(this.url, objeto, { responseType: 'text' })
  }

  deletePintura(id: number): Observable<string> {
    return this._http.delete(this.url + id, { responseType: 'text' })
  }

}
