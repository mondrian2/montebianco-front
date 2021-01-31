import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { ItemComponent } from './pages/item/item.component';
import { ExercicioComponent } from './pages/exercicio/exercicio.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'modulos', component: ModulosComponent},
  {path: 'modulo', component: ModuloComponent},
  {path: 'exercicios', component: ExerciciosComponent},
  {path: 'exercicio', component: ExercicioComponent},
  {path: 'item', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
