import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TvMazeService} from '../../models/tv-guide.service';
import {Show} from '../../models/shows.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows$: Observable<Show[]>;
  private searchTerms = new Subject<string>();

  constructor(private tvMazeService: TvMazeService) {
  }

  ngOnInit() {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
