/*
 * Angular
 */

import {Component, OnInit} from '@angular/core';

import {SpotifyService} from "../services/SpotifyService";
import {Router, ActivatedRoute} from "@angular/router";

/*
 * Services
 */


@Component({
  selector: 'search',
  template: `
  <h2>Search</h2>

  <p>
    <input type="text" #newquery
      [value]="query"
      (keydown.enter)="submit(newquery.value)">
    <button (click)="submit(newquery.value)">Search</button>
  </p>

  <div *ngIf="results">
    <div *ngIf="!results.length">
      No tracks were found with the term '{{ query }}'
    </div>

    <div *ngIf="results.length">
      <h1>Results</h1>

      <div class="row">
        <div class="col-sm-6 col-md-4" *ngFor="let t of results">
          <div class="thumbnail">
            <div class="content">
              <img src="{{ t.album.images[0].url }}" class="img-responsive">
              <div class="caption">
                <h3>
                  <a [routerLink]="['/artists', t.artists[0].id]">
                    {{ t.artists[0].name }}
                  </a>  
                </h3>
                <br>
                <p>
                  <a [routerLink]="['/tracks', t.id]">
                    {{ t.name }}
                  </a>
                </p>
              </div>
              <div class="attribution">
                <h4>
                  <a [routerLink]="['/albums', t.album.id]">
                    {{ t.album.name }}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(private spotify: SpotifyService, private router: Router, private route : ActivatedRoute ) {
    this.route
        .queryParams
        .subscribe(params => {this.query = params['query'] || '';});
  }

  ngOnInit(): void {
    this.search();
  }

  submit(query: string): void {
    //diciamo al router di navigare alla route search e forniamo la query string
    this.router.navigate(['search'], {queryParams : { query : query }})
        .then( _ => this.search());
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotify
      .searchTrack(this.query)
      .subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
}
