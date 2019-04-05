import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shows} from './shows';
import {Episodes} from './episodes';

@Injectable({
  providedIn: 'root'
})
export class TvGuideService {

  constructor(private http: HttpClient) {
  }

  // This function is used to fetch the JSON data containing the input field transmitted, following the TvMaze API.
  getShows(tvUrl): Observable<Shows[]> {
    return this.http.get<Shows[]>('http://api.tvmaze.com/search/shows?q=' + tvUrl);
  }


  // Presents seasons based on show ID
  getSeasons(tvUrl) {
    return this.http.get('http://api.tvmaze.com/shows/' + tvUrl + '/seasons');
  }

  // Presents episodes based on show ID
  getEpisodes(tvUrl): Observable<Episodes[]> {
    return this.http.get<Episodes[]>('http://api.tvmaze.com/shows/' + tvUrl + '/episodes');
  }

  getPrevNextEps(tvUrl): Observable<any> {
    return this.http.get<any>(tvUrl);
  }

}
