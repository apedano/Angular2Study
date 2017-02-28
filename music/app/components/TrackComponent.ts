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



// angular2 doesn't like 'track' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
@Component({
  selector: 'theTrack',
  template: `
  <div *ngIf="track">
    <h1>{{ track.name }}</h1>

    <p>
      <img src="{{ track.album.images[1].url }}">
    </p>

    <p>
      <audio controls src="{{ track.preview_url }}"></audio>
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `,
  providers: [SpotifyService]
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(route : ActivatedRoute , private spotify: SpotifyService, private locationStrategy : LocationStrategy) {
    this.id = route.snapshot.params['id'] ? route.snapshot.params['id'] : 'none';
  }

  ngOnInit(): void {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }
}