import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false; //hay error? false!!
  capital: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string) { //este termino viene del input de pais-input.component.ts no tiene nada que ver con el termino de esta clase
    this.hayError = false; //si false = false : no hay error
    this.termino = termino; //propiedad de esta clase
    console.log(this.termino);
    /**
     * El subscribe tiene varios argumentos como :
     * value: nos trae la informacion,
     * error : manejo de errores.
     * para que un observable se dispare debems de tener un subscribe 
     * el observable se dispara del servicio paises.service.
     */
    this.paisService.buscarCapital(termino).subscribe((capital) => {  //se tiene que suscribir para recibir información del servicio
      this.capital = capital;
      console.log(capital);
    }, (err) => {
      this.hayError = true; //si false = true : si hay error
      this.capital = [];  // purgamos los paises si hay error
    }
    );
  }


}
