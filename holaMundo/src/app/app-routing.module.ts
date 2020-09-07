import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path: '', component: TitulosComponent
  },
  {
    path: 'pipes', component: PipesComponent
  },
  {
    path: 'ejemplo', component: DirectivaComponent
  },
  {
    path: 'formulario', component: FormularioComponent
  },
  {
    path: 'ejemplo', component: DirectivaComponent
  },
  {
    path: '**', component: Notfound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
