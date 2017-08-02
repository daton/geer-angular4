import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxChartModule } from 'devextreme-angular';
import {ButtonModule, FileUploadModule, CalendarModule} from 'primeng/primeng';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import { ClarityModule } from 'clarity-angular';
import { InicioComponent } from './inicio/inicio.component';
import { ExamenesComponent } from './examenes/examenes.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ExamenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
