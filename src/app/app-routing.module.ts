import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowsComponent} from './views/shows/shows.component';
import {SeasonsComponent} from './views/seasons/seasons.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ShowsComponent},
  {path: '**', component: ShowsComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'episodes/:id', component: SeasonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
