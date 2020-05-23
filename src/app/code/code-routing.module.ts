import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CodigoComponent} from './componentecode/codigo/codigo.component';

const routes: Routes = [
    {path: '', component: CodigoComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class CodeRoutingModule {}
