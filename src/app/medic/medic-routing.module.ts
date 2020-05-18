import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicoComponent} from './componentemedic/medico/medico.component';

const routes: Routes = [
    {path: '', component: MedicoComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class MedicRoutingModule {}