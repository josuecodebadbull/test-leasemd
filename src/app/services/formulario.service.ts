import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  readonly endPoint = environment.url;

  constructor(
    private http: HttpClient
  ) { }


  getDistribuidores() {
    return this.http.get(
      `${this.endPoint}distribuidores`
    );
  }

  nuevaCotizacion(req: any) {
    this.http.post(
      `${this.endPoint}cotizacion`,
      req
    );
  }


}
