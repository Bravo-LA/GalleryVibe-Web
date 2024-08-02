import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Tecnica } from '@pinturas/interfaces/tecnica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicasService {

  private readonly url: string = environment.endpoint + 'Tecnica/'

  constructor(private _http: HttpClient) { }

  getTecnicas(): Observable<Tecnica[]> {
    return this._http.get<Tecnica[]>(this.url)
  }

  addTecnica(objeto: Tecnica): Observable<string> {
    return this._http.post(this.url, objeto, { responseType: 'text' })
  }

  updateTecnica(objeto: Tecnica): Observable<string> {
    return this._http.put(this.url, objeto, { responseType: 'text' })
  }

  deleteTecnica(id: number): Observable<string> {
    return this._http.delete(this.url + id, { responseType: 'text' })
  }

}
