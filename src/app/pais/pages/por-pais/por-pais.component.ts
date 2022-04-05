import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false; //hay error? false!!
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string) {
    this.hayError = false; //si false = false : no hay error
    this.termino = termino; //el this.termino va se = al termino que recibo como argmento de buscar()
    console.log(this.termino);
    /**
     * El subscribe tiene varios argumentos como :
     * value: nos trae la informacion,
     * error : manejo de errores.
     * para que un observable se dispare debems de tener un subscribe 
     * el observable se dispara del servicio paises.service.
     */
    this.paisService.buscarPais(this.termino).subscribe((paises) => {  //se tiene que suscribir para recibir información del servicio
      this.paises = paises;
      console.log(paises);
    }, (err) => {
      this.hayError = true; //si false = true : si hay error
      this.paises = [];  // purgamos los paises si hay error
    }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO CREAR SUGERENCIAS.
  }


}
