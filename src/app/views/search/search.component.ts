import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TvGuideService} from '../../models/tv-guide.service';
import {ShowsComponent} from '../shows/shows.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows$: Observable<ShowsComponent[]>;
  private searchTerms = new Subject<string>();

  constructor(private tvGuideService: TvGuideService) {
  }

  ngOnInit() {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
