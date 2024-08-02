import { Injectable } from '@angular/core';
import { Usuario } from '@usuarios/interfaces/usuario';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token: string = 'token-dawa'

  create(token: string): void {
    localStorage.setItem(this._token, token);
  }

  clear(): void {
    localStorage.removeItem(this._token);
  }

  get(): string | null {
    return localStorage.getItem(this._token);
  }

  getUsuario(): Usuario {
    const token = this.get();
    if (!token) throw new Error('Error al obtener token')
    const decodedToken: DecodedToken = jwtDecode(token);
    return {
      id: Number(decodedToken.nameid),
      nombres: decodedToken.unique_name[0],
      apellidos: decodedToken.unique_name[1],
    }
  }

}

interface DecodedToken {
  nameid: string
  unique_name: [string, string]
}