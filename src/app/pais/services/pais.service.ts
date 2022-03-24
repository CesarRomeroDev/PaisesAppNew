import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient  //llamamos a nuestro HttpClientModule
  ) { }

  /**
   * Observable
   * Puede definir eventos personalizados que envíen datos de salida observables desde un componente secundario a un componente principal.
   * El módulo HTTP usa observables para manejar las solicitudes y respuestas de AJAX.
   * Los módulos de enrutador y formularios usan observables para escuchar y responder a los eventos de entrada del usuario.
   */
  buscarPais(termino: string): Observable<Country[]> {  //es de tipo Observable
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url); //get es de tipo Observable
  }


}
