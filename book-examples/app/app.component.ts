import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello names</h1>
	<ul><li *ngFor="let name of names" >Ciao {{name}}</li></ul>
  `,
})
export class AppComponent  { 
	names : string[]; 
	
	constructor(){
			this.names = ['Grazia', 'Graziella', 'Grazie tante'];
	}
}
