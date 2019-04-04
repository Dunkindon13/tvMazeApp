import {Component, OnInit, Input} from '@angular/core';
import {TvGuideService} from '../../models/tv-guide.service';
import {Seasons} from '../../models/Seasons';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  @Input() public seasonId;
  seasons: Seasons[];


  constructor(private Service: TvGuideService) {
  }

  ngOnInit() {
    // Subscribe to get the episodes of the season
    this.Service.getSeasons(this.seasonId).subscribe(res => {
      this.seasons = res;
    });
  }
}

