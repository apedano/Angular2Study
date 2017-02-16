/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View, NgIf} from "angular2/angular2";
import {Http, Response} from "angular2/http";

@Component({
  selector: "simple-http"
})
@View({
  directives: [NgIf],
  template: `
  <h2>Basic Request</h2>
  <button type="button" (click)="makeRequest()">Make Request</button>
  <div *ng-if="loading">loading...</div>
  <pre>{{data | json}}</pre>
`
})
export class SimpleHTTPComponent {
  data: Object;
  loading: boolean;

  constructor(public http: Http) {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request("http://jsonplaceholder.typicode.com/posts/1")
      .toRx()
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}

