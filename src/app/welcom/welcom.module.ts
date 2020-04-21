import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomRoutingModule } from './welcom-routing.module';

import {BienvenidoComponent} from './comonenteswelcom/bienvenido/bienvenido.component';
import {InfdoctorComponent} from './comonenteswelcom/infdoctor/infdoctor.component';
import { HeaderWelcomComponent } from './comonenteswelcom/header-welcom/header-welcom.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    BienvenidoComponent,
    InfdoctorComponent,
    HeaderWelcomComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    WelcomRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
  ]
})
export class WelcomModule { }


