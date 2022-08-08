import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeadComponent } from './componentes/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeccionesComponent,
    FooterComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
