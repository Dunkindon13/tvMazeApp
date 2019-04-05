import {Component, OnInit} from '@angular/core';
import {TvGuideService} from '../../models/tv-guide.service';
import {ActivatedRoute} from '@angular/router';
import {Shows} from '../../models/shows';
import {Episodes} from '../../models/Episodes';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  search: string;
  shows: Shows[];

  constructor(private route: ActivatedRoute, private Service: TvGuideService) {

    // Getting the show name from the route
    this.route.paramMap.subscribe((params) => {
      this.search = params.get('search');

      // getting all the shows with api call in the dataService and pushing it in to the array
      this.Service.getShows(this.search).subscribe(
        res => {
          this.shows = [];
          res.map((item) => {
            this.shows.push(new Shows(item.id));
          });

          // Retrieving the previous episodes and the next episodes
          this.getPrevNextEpisodes();
        }
      );
    });
  }

  ngOnInit() {
  }

  getPrevNextEpisodes() {
    this.shows.map(
      show => {
        if (show.prevEpUrl) {
          // call the api to get the data from the Service
          this.Service.getPrevNextEps(show.prevEpUrl).subscribe(res => {
              const Ep = new Episodes(res);
              show.setPrevEp(Ep);
            }
          );
        }
        if (show.nextEpUrl) {
          // call the api to get the data from the Service
          this.Service.getPrevNextEps(show.nextEpUrl).subscribe(res => {
            const Ep = new Episodes(res);
            show.setNextEp(Ep);
          });
        }
      }
    );
  }

  searchSeasons(show: Shows) {

  }
}
