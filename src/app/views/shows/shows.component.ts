import {Component, OnInit} from '@angular/core';
import {TvGuideService} from '../../models/tv-guide.service';
import {Router} from '@angular/router';
import {Shows} from '../../models/shows';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  search = '';
  shows: Shows[];

  constructor(private Service: TvGuideService, private router: Router) {
  }


  ngOnInit() {
  }

  /*Clicking on the Search Shows button will transmit the input field to the getShows function which will fetch the JSON of the
   shows containing the matching input field*/

  searchShows() {
    this.Service.getShows(this.search).subscribe(res => {
      this.shows = res;
    });
  }

  searchSeasons(shows) {
    this.router.navigate(['/episodes', shows.show.id]);
  }
}
