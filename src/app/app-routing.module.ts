import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio',
loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{path: 'iniciar',
loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},
{path: 'registro',
loadChildren: () => import('./singin/singin.module').then(m => m.SinginModule)
},
{path: 'datos-de-registro',
loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
},
{path: '',
component: LayoutComponent,
children: [
{
  path: '',
  redirectTo: 'bienvenido',
  pathMatch: 'full',
},
  {path: 'bienvenido',
  loadChildren: () => import('./welcom/welcom.module').then(m => m.WelcomModule)
  },
  {path: 'medico',
  loadChildren: () => import('./medic/medic.module').then(m => m.MedicModule)
  },
  {path: 'consultas',
  loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {path: 'bienvenido/codigo',
  loadChildren: () => import('./code/code.module').then(m => m.CodeModule)
  },
]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
