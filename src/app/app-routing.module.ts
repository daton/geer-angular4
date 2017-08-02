import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamenesComponent} from './examenes/examenes.component';
import {InicioComponent} from './inicio/inicio.component';
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {path: 'examenes', component: ExamenesComponent},
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
