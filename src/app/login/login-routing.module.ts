import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarComponent } from './componentelogin/iniciar/iniciar.component';


const routes: Routes = [
    {path: '', component: IniciarComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class LoginRoutingModule {}


