import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {Routes, RouterModule} from "@angular/router";
import {SearchComponent} from "./components/SearchComponent";
import {RouterAppComponent} from "./components/RouterAppComponent";
import {ArtistComponent} from "./components/ArtistComponent";
import {TrackComponent} from "./components/TrackComponent";
import {AlbumComponent} from "./components/AlbumComponent";
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from "@angular/common";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { HttpModule } from '@angular/http';


const routes: Routes = [
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    {path: 'search', component: SearchComponent},
    {path: 'artists/:id', component: ArtistComponent},
    {path: 'tracks/:id', component: TrackComponent},
    {path: 'albums/:id', component: AlbumComponent},
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule],
    declarations: [SearchComponent, ArtistComponent, TrackComponent, AlbumComponent, RouterAppComponent],
    bootstrap : [RouterAppComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: APP_BASE_HREF, useValue: "/"}
    ]
})
export class RouterAppModule {
}

platformBrowserDynamic().bootstrapModule(RouterAppModule)
    .catch((err: any) => console.error(err));