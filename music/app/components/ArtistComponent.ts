/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocationStrategy} from "@angular/common";

/*
 * Services
 */
import {SpotifyService} from "../services/SpotifyService";

@Component({
  selector: 'artist',
  template: `
  <div *ngIf="artist">
    <h1>{{ artist.name }}</h1>

    <p>
      <img src="{{ artist.images[0].url }}">
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `,
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(route : ActivatedRoute, private spotify: SpotifyService,
              private locationStrategy: LocationStrategy) {
    this.id = route.snapshot.params['id'] ? route.snapshot.params['id'] : 'none';
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id)
      .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }
}
