import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisLibrosComponent } from './mis-libros/mis-libros.component';
import { AgregarLibrosComponent } from './agregar-libros/agregar-libros.component';
import { AgregarClubsComponent } from './agregar-clubs/agregar-clubs.component';
import { MisClubsComponent } from './mis-clubs/mis-clubs.component';
import { VerClubsComponent } from './ver-clubs/ver-clubs.component';
import { VerLibrosComponent } from './ver-libros/ver-libros.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { CardsComponentComponent } from './cards-component/cards-component.component';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MisLibrosComponent,
    AgregarLibrosComponent,
    AgregarClubsComponent,
    MisClubsComponent,
    VerClubsComponent,
    VerLibrosComponent,
    LoginComponent,
    RegistrerComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    CardsComponentComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
