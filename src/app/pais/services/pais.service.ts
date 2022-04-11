import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get getHttpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(
    private http: HttpClient  //llamamos a nuestro HttpClientModule, los constructores los usamos para llamar a los servicios de angular o algun modulo
  ) { }

  /**
   * Observable
   * Puede definir eventos personalizados que envíen datos de salida observables desde un componente secundario a un componente principal.
   * El módulo HTTP usa observables para manejar las solicitudes y respuestas de AJAX.
   * Los módulos de enrutador y formularios usan observables para escuchar y responder a los eventos de entrada del usuario.
   */
  buscarPais(termino: string): Observable<Country[]> {  //es de tipo Observable
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.getHttpParams }); //get es de tipo Observable
  }
  /**
   * POR CAPITAL
   */
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this.getHttpParams });
  }
  /**
  * VER PAÍS
  */
  getPaisPorId(id: string): Observable<Country[]> {  //quitamos corchetes, solo recibe un solo pais
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {  //quitamos corchetes, solo recibe un solo pais
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.getHttpParams }).pipe(tap(console.log))
  }


}
