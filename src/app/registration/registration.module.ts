import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {RegistrationRoutingModule } from './registration-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ScrollingModule} from '@angular/cdk/scrolling';




import {DatosDeRegistroComponent} from './componenteregistration/datos-de-registro/datos-de-registro.component';
import {FormularioDatosComponent} from './componenteregistration/formulario-datos/formulario-datos.component';


import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DatosDeRegistroComponent,
    FormularioDatosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegistrationRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    ScrollingModule,
  ]
})
export class RegistrationModule { }