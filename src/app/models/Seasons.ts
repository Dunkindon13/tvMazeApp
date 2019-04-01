import {Episodes} from './Episodes';


export class Seasons {
  id: number;
  number: number;
  premiereDate: Date;
  endDate: Date;
  image: string;
  episodes: Episodes[];

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.number = args.number;
      this.premiereDate = args.premiereDate;
      this.endDate = args.endDate;
      this.image = args.image;
      this.episodes = args.episodes;
    }
  }
}
