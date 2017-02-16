/// <reference path="../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, bootstrap, View} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";

/*
 * Components
 */
import {SimpleHTTPComponent} from "components/SimpleHTTPComponent";
import {MoreHTTPRequests} from "components/MoreHTTPRequests";
import {YouTubeSearchComponent} from "components/YouTubeSearchComponent";

/*
 * Injectables
 */
import {youTubeServiceInjectables} from "components/YouTubeSearchComponent";
import {utilInjectables} from "util/util";

/*
 * Webpack
 */
require("css/styles.scss");

@Component({
  selector: "http-app"
})
@View({
  directives: [
    SimpleHTTPComponent,
    MoreHTTPRequests,
    YouTubeSearchComponent],
  template: `
  <div class="container">
    <simple-http></simple-http>
    <hr/>
    <more-http></more-http>
    <hr/>
    <youtube-search></youtube-search>
  </div>
  `
})
class HttpApp {
}

bootstrap(HttpApp, [HTTP_BINDINGS,
                    youTubeServiceInjectables,
                    utilInjectables]);
