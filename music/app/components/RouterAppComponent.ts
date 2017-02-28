/*
 * Angular
 */
import {Component} from '@angular/core';


/*
 * Services
 */
import {SpotifyService} from "../services/SpotifyService";

@Component({
  selector: 'router-app',
  template: `
  <div>
    <router-outlet></router-outlet>
  </div>
  `
})
export class RouterAppComponent {
}
