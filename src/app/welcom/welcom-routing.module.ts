import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BienvenidoComponent} from './comonenteswelcom/bienvenido/bienvenido.component';

const routes: Routes = [
    {path: '', component: BienvenidoComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class WelcomRoutingModule {}

