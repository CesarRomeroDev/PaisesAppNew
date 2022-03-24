/**Angular */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
/**Component */
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        path: '',                           //path de inicio Home.
        component: PorPaisComponent,        //component a mostrar.
        pathMatch: 'full'
    },
    {
        path: 'region',                     //nombre de la ruta.
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',                         //si algun usuario ingresa otra ruta.
        redirectTo: ''                      //lo redirecciona a home.
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule { }