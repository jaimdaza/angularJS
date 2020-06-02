import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Graficos
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarrasComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
