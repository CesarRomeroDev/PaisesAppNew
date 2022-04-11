import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  /**@Output()—una función de decorador que marca la propiedad 
   * como una forma de que los datos pasen del elemento
   *  secundario al elemento principal 
   * Output para hacer la emicion
   * onEnter casi siempre se le pone este nombre al evento al dar enter
   * */
  /**
   * EventEmitter
   * Úselo en componentes con la directiva para emitir eventos personalizados 
   * de forma síncrona o asíncrona, y registre controladores para esos eventos 
   * suscribiéndose a una instancia.@Output
   */
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // Se va emitir cuando la persona deje de escribir

  /**
   * @Input()
   * La propiedad de entrada está vinculada a una propiedad DOM
   *  en la plantilla. Durante la detección de cambios, Angular 
   * actualiza automáticamente la propiedad de datos con el valor de la propiedad DOM.
   */
  @Input() placeholder: string = '';

  /**Subjet: es un observable */
  /**debouncer : la idea es que se emita cuando deje de escribir 
   *es un objeto con los métodos next(v), error(e)y complete(). Para enviar un nuevo valor al Subject,
   */
  debouncer: Subject<string> = new Subject(); // se inicializa el Subject (new Subject())

  termino: string = '';
  /**
   * ngOnInit()
   * Un enlace de ciclo de vida que se llama después de que Angular 
   * haya inicializado todas las propiedades vinculadas a datos de una
   *  directiva. Defina un ngOnInit()método para manejar cualquier tarea de inicialización adicional.
   */
  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => { //nos subscribimos al debuncer
      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    /**emit 
     * Emite un evento que contiene un valor dado.
     * cuando alguien de enter va emitir un valor dado
    */
    this.onEnter.emit(this.termino);

  }

  teclaPresionada() {
    /**
     * next esta asociado al ngOnInit
     */
    this.debouncer.next(this.termino); //next mandar el siguiente valor , la siguente letra.
  }

}
