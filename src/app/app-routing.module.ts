import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AccessGuard} from './guard/access.guard';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  /*{
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./singin/singin.module').then(m => m.SinginModule)
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        canActivate: [AccessGuard],
        redirectTo: 'bienvenido',
        pathMatch: 'full',
      },
      {
        path: 'bienvenido',
        canActivate: [AccessGuard],
        loadChildren: () => import('./welcom/welcom.module').then(m => m.WelcomModule)
      },
      {
        path: 'consultas',
        canActivate: [AccessGuard],
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      },
    ]
  },
  */
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
  canActivate: [AccessGuard],
  loadChildren: () => import('./welcom/welcom.module').then(m => m.WelcomModule)
  },
  {path: 'medico',
  canActivate: [AccessGuard],
  loadChildren: () => import('./medic/medic.module').then(m => m.MedicModule)
  },
  {path: 'consultas',
  canActivate: [AccessGuard],
  loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {path: 'bienvenido/codigo',
  canActivate: [AccessGuard],
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
export class AppRoutingModule {
}
