import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,

    children: [

      {
        path: 'usuarios',
        component: UsuariosComponent,
        pathMatch: 'full',
      },
      {
        path: 'nuevo-usuario',
        component: NuevoUsuarioComponent,
        pathMatch: 'full',
      },
      {
        path: 'actividades',
        component: ActividadesComponent,
        pathMatch: 'full',
      },

      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
