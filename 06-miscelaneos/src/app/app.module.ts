import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { APP_ROUTING } from "./app.routes";
import { AppComponent } from "./app.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { CssComponent } from "./components/css/css.component";
import { ClasesComponent } from "./components/clases/clases.component";
import { ResaltadoDirective } from "./directives/resaltado.directive";
import { NgSwitchComponent } from "./components/ng-switch/ng-switch.component";
import { HomeComponent } from "./components/home/home.component";
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent
  ],
  imports: [BrowserModule, AppRoutingModule,APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
