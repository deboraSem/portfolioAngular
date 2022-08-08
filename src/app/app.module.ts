import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { ComponentesComponent } from './head/componentes/componentes.component';
import { HeadComponent } from './componentes/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeccionesComponent,
    FooterComponent,
    LogoArgProgComponent,
    ComponentesComponent,
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
