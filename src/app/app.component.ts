import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1> 
  	<h2>{{hero.name}} details! </h2>
  	<div><label>{{hero.id}}</label></div>
  	<div><label>{{hero.name}}</label></div>
  `
})

export class AppComponent  { 
	title = 'A Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Windsomething'
	};
}



