//Angular
import { Component, Input, OnInit } from '@angular/core';
//interfaces
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})


export class PaisTablaComponent {

  constructor() { }

  /**
   * Un patrón común en Angular es compartir datos entre un componente 
   * principal y uno o más componentes secundarios. Implemente este
   *  patrón con los decoradores y .@Input()@Output()
   */
  @Input() paises: Country[] = [];



}
