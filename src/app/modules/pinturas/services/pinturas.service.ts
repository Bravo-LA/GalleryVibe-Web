import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Pintura } from '@pinturas/interfaces/pintura';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinturasService {

  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = ''

  constructor(private http: HttpClient) { }

  post(pintura: Pintura): Observable<void> {
    return of()
  }

  put(pintura: Pintura): Observable<void> {
    return of()
  }

  delete(id: number): Observable<void> {
    return of()
  }

  get(): Observable<Pintura[]> {
    return this.http.get<Pintura[]>('/assets/data/pinturas.json');
  }

}
