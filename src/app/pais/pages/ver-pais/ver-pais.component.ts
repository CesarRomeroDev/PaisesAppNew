import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  /**
   * '!' : confia en mi, pais puede ser null , puede tener data.
   */
  pais!: Country;
  /**
   * @param activatedRoute
   * Brinda acceso a información sobre una ruta asociada a un componente
   * que se carga en un tomacorriente. Úselo para recorrer el RouterStateárbol 
   * y extraer información de los nodos.
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    //opcion para no usar dos subscribe y usar switchMap()
    /**
     * switchMap()
     * Proyecta cada valor de origen a un Observable que se 
     * fusiona en el Observable de salida, emitiendo valores solo 
     * desde el Observable proyectado más recientemente
     */
    //params : Un observable de los parámetros de la matriz en el ámbito de esta ruta.
    //{id} : destructuración de objetos para extraer solo las funciones necesarias.
    //tap : Se utiliza para realizar efectos secundarios para las notificaciones de la fuente observable, su funcion como un console.log()
    this.activatedRoute.params.pipe(switchMap(({ id }) => this.paisService.getPaisPorId(id)), tap(console.log))
      .subscribe(pais => this.pais = pais[0]);

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorId(id).subscribe(pais => {
    //     console.log(pais);
    //   })

    // })
  }

}
