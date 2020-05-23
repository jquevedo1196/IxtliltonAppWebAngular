import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

import {CommonModule} from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {CoreModule} from './core/core.module';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import {SharedModule} from './shared/shared.module';
/*nuevo25/4/2020*/
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatExpansionModule,
    CoreModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
