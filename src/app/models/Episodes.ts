export class Episodes {
  id: number;
  name: string;
  number: number;
  season: number;
  dateAired: Date;
  runtime: string;
  summary: string;


  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.number = args.number;
      this.season = args.season;
      this.dateAired = args.dateAired;
      this.runtime = args.runtime;
      this.summary = args.summary;
    }
  }
}
