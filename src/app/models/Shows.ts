import {Seasons} from './Seasons';
import {Episodes} from './Episodes';

export class Shows {
  id: number;
  name: string;
  language: string;
  status: string;
  premiered: Date;
  seasons: Seasons[];
  website: string;
  image: { medium: string };
  summary: string;
  prevEp: Episodes;
  nextEp: Episodes;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.language = args.language;
      this.status = args.status;
      this.premiered = args.premiered;
      this.seasons = args.seasons;
      this.website = args.website;
      this.image = args.image;
      this.summary = args.summary;
    }
  }
}