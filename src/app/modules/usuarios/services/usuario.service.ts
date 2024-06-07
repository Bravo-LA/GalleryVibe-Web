import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@environment/environment';
import { Usuario } from '@usuarios/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = ''

  constructor(private http: HttpClient) { }

  authentication(
    credenciales:
      { usuario: string, contrasena: string }
  ): Observable<any> {
    //return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, credenciales)
    return of('-')
  }

  registrarUsuario(usuario: Usuario): Observable<boolean>{
    //return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, usuario)
    return of(true)
  }

}
