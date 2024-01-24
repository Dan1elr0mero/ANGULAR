import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './componets/inicio/inicio.component';
import { NavComponent } from './componets/nav/nav.component';
import { FundametsComponent } from './componets/fundamets/fundamets.component';
import { DanielComponent } from './componets/daniel/daniel.component';
import { NoencontradoComponent } from './componets/noencontrado/noencontrado.component';

export const routes: Routes = [
  /*aqui se crean las rutas que van a funcionar en todo el proyecto */
  { path: 'inicio', component: InicioComponent },
  { path: 'nav', component: NavComponent, title: 'navegacion' },
  { path: 'fundamets', component: FundametsComponent },
  { path: 'daniel', component: DanielComponent },
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
  { path: '**', component: NoencontradoComponent, title: '404' },
];
