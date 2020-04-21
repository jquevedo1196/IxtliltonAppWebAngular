import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';


import { IndexComponent } from './componentehome/index/index.component';
import { AboutComponent } from './componentehome/about/about.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderHomeComponent } from './componentehome/header-home/header-home.component';
import { ObjetiveComponent } from './componentehome/objetive/objetive.component';
import { Parallax1Component } from './componentehome/parallax1/parallax1.component';
import { Parallax2Component } from './componentehome/parallax2/parallax2.component';
import { BenefitsComponent } from './componentehome/benefits/benefits.component';
import { FooterHomeComponent } from './componentehome/footer-home/footer-home.component';



import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';



@NgModule({
    declarations: [
        AboutComponent,
        IndexComponent,
        HeaderHomeComponent,
        ObjetiveComponent,
        Parallax1Component,
        Parallax2Component,
        BenefitsComponent,
        FooterHomeComponent,

    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
    ]
})


export class HomeModule {

}

