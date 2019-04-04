import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SeasonsComponent} from './views/seasons/seasons.component';
import {ShowsComponent} from './views/shows/shows.component';
import {EpisodesComponent} from './views/episodes/episodes.component';
import {FormsModule} from '@angular/forms';
import {
  MatAutocompleteModule, MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsComponent,
    ShowsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
