import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { DodajPevacaComponent } from './dodajpevaca/dodajpevaca.component';
import { DodajProducentaComponent } from './dodajproducenta/dodajproducenta.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SviPevaciComponent } from './svipevaci/svipevaci.component';
import { ObrisiPevacaComponent } from './obrisipevaca/obrisipevaca.component';
import { IzmeniPevacaComponent } from './izmenipevaca/izmenipevaca.component';
import { ObrisiProducentaComponent } from './obrisiproducenta/obrisiproducenta.component';
import { IzmeniProducentaComponent } from './izmeniproducenta/izmeniproducenta.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'dodajpevaca',
    component: DodajPevacaComponent
  },
  {
    path: 'dodajproducenta',
    component: DodajProducentaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'svipevaci',
    component: SviPevaciComponent
  },
  {
    path: 'obrisipevaca',
    component: ObrisiPevacaComponent
  },
  {
    path: 'izmenipevaca/:id',
    component: IzmeniPevacaComponent
  },
  {
    path: 'obrisiproducenta',
    component: ObrisiProducentaComponent
  },
  {
    path: 'izmeniproducenta/:id',
    component: IzmeniProducentaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
