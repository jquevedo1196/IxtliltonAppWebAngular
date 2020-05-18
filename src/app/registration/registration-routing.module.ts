import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatosDeRegistroComponent } from './componenteregistration/datos-de-registro/datos-de-registro.component';


const routes: Routes = [
    {path: '', component: DatosDeRegistroComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class RegistrationRoutingModule {}
