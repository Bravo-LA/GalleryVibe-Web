import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@environment/environment';
import { Usuario } from '@usuarios/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private readonly url: string = environment.endpoint + 'Usuario/'

  constructor(private _http: HttpClient) { }

  authentication(credenciales: { username: string, password: string }): Observable<string> {
    return this._http.post(this.url + 'login', credenciales, { responseType: 'text' })
  }

  getUsuario(id: number): Observable<Usuario> {
    return this._http.get<Usuario>(this.url+id)
  }

  addUsuario(objeto: Usuario): Observable<string> {
    return this._http.post(this.url, objeto, { responseType: 'text' })
  }

  updateUsuario(objeto: Usuario): Observable<string> {
    return this._http.put(this.url, objeto, { responseType: 'text' })
  }

  deleteUsuario(id: number): Observable<string> {
    return this._http.delete(this.url + id, { responseType: 'text' })
  }

}
