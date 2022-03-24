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
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    /**
     * El subscribe tiene varios argumentos como :
     * value: nos trae la informacion,
     * error : manejo de errores.
     */
    this.paisService.buscarPais(this.termino).subscribe((paises) => {  //se tiene que suscribir para recibir información del servicio
      this.paises = paises;
      console.log(paises);
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    }
    );
  }


}
