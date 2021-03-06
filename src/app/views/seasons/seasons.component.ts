import {Component, OnInit} from '@angular/core';
import {TvGuideService} from '../../models/tv-guide.service';
import {Seasons} from '../../models/Seasons';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  id: string;
  seasons: Seasons[];


  constructor(private Service: TvGuideService, private route: ActivatedRoute) {
    // Getting a snapshot of the route to get seasonId
    this.id = this.route.snapshot.paramMap.get('id');

    this.Service.getSeasons(this.id).subscribe(
      res => {
        this.seasons = [];
        res.map((item) => {
          this.seasons.push(new Seasons(item));
        });
      }
    );
  }


  ngOnInit() {
  }

}
