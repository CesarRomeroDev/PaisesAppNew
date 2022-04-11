import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false; //hay error? false!!
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string) { //este termino viene del input de pais-input.component.ts no tiene nada que ver con el termino de esta clase
    this.mostrarSugerencias = false;
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
    this.paisService.buscarPais(termino).subscribe((paises) => {  //se tiene que suscribir para recibir información del servicio
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0, 5), (err) => this.paisesSugeridos = []);
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }


}
