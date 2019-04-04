import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvGuideService} from '../../models/tv-guide.service';
import {Episodes} from '../../models/episodes';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public showId;

  episodes: Episodes[];
  seasons: any;
  seasonClicked = '';
  clickFalse = false;
  time: Date = new Date();
  differential: any;
  date: any;
  nextEp = '';


  constructor(private route: ActivatedRoute, private Service: TvGuideService) {
  }

  ngOnInit() {
    // Catch the id of the show which was chosen in the shows.components.html and put it into the local showId parameter
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showId = id;


    // Get show id from seasons
    this.Service.getSeasons(this.showId).subscribe(res => {
      this.seasons = res;
    });

  }

  // When click showEpisodes make the appropriate assignment for the 2 values like this can select a season,
  // invoke the getEpisodes from the service, and count the time until the next episode
  showEpisodes(season) {
    this.seasonClicked = season.number;
    this.clickFalse = !this.clickFalse;

    // Invoke the getEpisodes from the service to get all the episodes and put them into the episodes object
    // But the click function parameters described above will control that only the episodes of the season clicked are shown
    this.Service.getEpisodes(this.showId).subscribe(res => {
      this.episodes = res;

      // For the time till the next episode occurs
      for (let i = 0; i < this.episodes.length; i++) {
        const day = this.episodes[i].dateAired;
        const t = this.episodes[i].dateAired;
        this.date = new Date(day + 'T' + t);
        this.differential = this.date - Date.now();
        if (this.differential > 0) {
          const sec = Math.floor((this.differential) / 1000);
          const days = Math.floor(sec / 86400);
          const hours = Math.floor((sec % 86400) / 3600);
          const minutes = Math.floor(((sec % 86400) % 3600) / 60);
          const seconds = ((sec % 86400) % 3600) % 60;
          this.nextEp = 'Next Episode: ' + this.episodes[i].dateAired + ' ' + this.episodes[i].runtime + ' Time left: ' +
            'days: ' + days + ' hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds;
          break;
        }
      }
    });
  }
}
