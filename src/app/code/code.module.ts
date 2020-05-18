import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeRoutingModule } from './code-routing.module';

import {CodigoComponent} from './componentecode/codigo/codigo.component';
import {QrComponent} from './componentecode/qr/qr.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import {SharedModule} from './../shared/shared.module';

@NgModule({
  declarations: [
    CodigoComponent,
    QrComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CodeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
  ]
})
export class CodeModule { }
