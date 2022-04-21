import Progress from "./progress";

class CardProgress {
  public title: String;
  public progress: Array<Progress>;

  constructor(title: String, progress: Array<Progress>) {
    this.title = title;
    this.progress = progress;
  }
}
export = CardProgress;
