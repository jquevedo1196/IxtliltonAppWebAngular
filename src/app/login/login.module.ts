import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { IniciarComponent } from './componentelogin/iniciar/iniciar.component';
import { LogComponent } from './componentelogin/log/log.component';
import {HeaderLogComponent} from './componentelogin/header-log/header-log.component';
import {FooterLogComponent} from './componentelogin/footer-log/footer-log.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";

import { FormsModule } from '@angular/forms';
/*nuevo25/4/20202*/
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
/*fin nuevi*/
@NgModule({
  declarations: [
    IniciarComponent,
    LogComponent,
    HeaderLogComponent,
    FooterLogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
  ],
})
export class LoginModule {}




