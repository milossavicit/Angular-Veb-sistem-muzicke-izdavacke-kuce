import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { DodajPevacaComponent } from './dodajpevaca/dodajpevaca.component';
import { DodajProducentaComponent } from './dodajproducenta/dodajproducenta.component';
import { SearchPipe } from './pipes/search';
import { SearchPipe1 } from './pipes/search1';
import { SviPevaciComponent } from './svipevaci/svipevaci.component';
import { ObrisiPevacaComponent } from './obrisipevaca/obrisipevaca.component';
import { IzmeniPevacaComponent } from './izmenipevaca/izmenipevaca.component';
import { ObrisiProducentaComponent } from './obrisiproducenta/obrisiproducenta.component';
import { IzmeniProducentaComponent } from './izmeniproducenta/izmeniproducenta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    DodajPevacaComponent,
    DodajProducentaComponent,
    SearchPipe,
    SearchPipe1,
    RegisterComponent,
    LoginComponent,
    SviPevaciComponent,
    ObrisiPevacaComponent,
    IzmeniPevacaComponent,
    ObrisiProducentaComponent,
    IzmeniProducentaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
