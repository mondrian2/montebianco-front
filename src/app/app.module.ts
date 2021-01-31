import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './shared/top/top.component';
import { BtnComponent } from './shared/btn/btn.component';
import { ProdutoComponent } from './shared/produto/produto.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { StatusVideoComponent } from './shared/status-video/status-video.component';
import { StatusPacoteComponent } from './shared/status-pacote/status-pacote.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { BtnItemComponent } from './shared/btn-item/btn-item.component';
import { ItemComponent } from './pages/item/item.component';
import { ExercicioComponent } from './pages/exercicio/exercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BtnComponent,
    ProdutoComponent,
    LoginComponent,
    ModulosComponent,
    ModuloComponent,
    StatusVideoComponent,
    StatusPacoteComponent,
    ExerciciosComponent,
    BtnItemComponent,
    ItemComponent,
    ExercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
