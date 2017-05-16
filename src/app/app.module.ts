import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { HeroDetailComponent } from './hero-detail.component'

import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component'


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])

  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
  	HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ 
    HeroService
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
