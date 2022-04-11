
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }
  //(region es de tipo string): y retorna un string
  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return } //para no recargar otra vez los paises si damos clic en el mismo boton
    this.regionActiva = region;
    this.paises = [];  //para mandar paises vacios al cargar otro boton

    this.paisService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises;
    })
  }
}
