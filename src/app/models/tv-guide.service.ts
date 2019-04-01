import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shows} from './Shows';
import {Seasons} from './Seasons';
import {Episodes} from './Episodes';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvGuideService {
  tvUrl = 'http://api.tvmaze.com/';

  constructor(private http: HttpClient) {
  }

  // Function that returns an array of shows following the api call based on tvMaze.
  getShows(search: string): Observable<Shows[]> {
    return this.http.get(this.tvUrl + 'search/shows?q=' + search).pipe(map(res => (res as any[]).map(item => new Shows(item.show)))
    );
  }

  // Function that returns a specific show (based on ID) following the api call based on tvMaze.
  getShow(id: number): Observable<Shows> {
    return this.http.get<Shows>(this.tvUrl + 'shows/' + id);
  }

  // Function that returns the seasons of a specified show (based on ID) following the api call based on tvMaze.
  getSeasons(id: number): Observable<Seasons[]> {
    return this.http.get<Seasons[]>(this.tvUrl + '/shows' + id + '/seasons').pipe(
      map(res => (res as any[]).map(item => new Seasons(item)))
    );
  }

  // Function that returns the episodes of a specified seasons of a specified show (based on ID) following the api call based on tvMaze.
  getEpisodes(id: number): Observable<Episodes[]> {
    return this.http.get<Episodes[]>(this.tvUrl + 'seasons/' + id + '/episodes').pipe(
      map(res => (res as any[]).map(item => new Episodes(item)))
    );
  }

  // Api call to receive immediately preceding episodes and next episodes
  callEp(url: string): Observable<Episodes> {
    return this.http.get<Episodes>(url);
  }
}
