import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarComponent } from './views/search/search.component';
import { SeasonsComponent } from './views/seasons/seasons.component';
import { ShowsComponent } from './views/shows/shows.component';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { ServicesComponent } from './models/services/services.component';
import {MatAutocompleteModule, MatIconModule, MatInputModule, MatOptionModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SeasonsComponent,
    ShowsComponent,
    EpisodesComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
