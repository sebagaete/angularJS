import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule } from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PipesComponent } from './pipes/pipes.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';


@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    FormularioComponent,
    PipesComponent,
    Notfound404Component,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
