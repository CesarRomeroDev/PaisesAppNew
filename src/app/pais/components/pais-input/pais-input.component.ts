import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  /**@Output()—una función de decorador que marca la propiedad 
   * como una forma de que los datos pasen del elemento
   *  secundario al elemento principal */
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  /**Subjet: es un observable */
  /**debouncer : la idea es que se emita cuando deje de escribir  */
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => { //nos subscribimos al debuncer
      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);

  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
