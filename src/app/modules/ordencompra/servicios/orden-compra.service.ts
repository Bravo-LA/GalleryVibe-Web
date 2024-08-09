import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { OrdenCompra } from '../interfaces/OrdenCompra';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraService {

  apiurl: string;
  url_ObtenerOrdenCompra: string = ''
  constructor(private http: HttpClient) {
    this.apiurl=environment.endpoint;
    this.url_ObtenerOrdenCompra='OrdenCompra'
   }

  ObtenerOrdenCompra():Observable<any> {
    var url=this.apiurl+this.url_ObtenerOrdenCompra
    return this.http.get(url);

  }

  GuardarOrdenCompra(ordencompra:OrdenCompra):Observable<any>{
    var url=this.apiurl+this.url_ObtenerOrdenCompra
    return this.http.post(url,ordencompra);
  }

  EliminarOrdenCompra(idOrdenCompra:number): Observable<any>{
    var url=this.apiurl+this.url_ObtenerOrdenCompra+'/'+idOrdenCompra
    return this.http.delete(url );

  }
}
