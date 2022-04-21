import ChartDataItem from "./chartDataItem";

class Chart {
  public title: String;
  public labels: Array<String>;
  public height: Number;
  public colors: Array<String>;
  public chartData: Array<ChartDataItem>;

  constructor(
    title: String,
    labels: Array<String>,
    height: Number,
    colors: Array<String>,
    chartData: Array<ChartDataItem>
  ) {
    this.title = title;
    this.labels = labels;
    this.height = height;
    this.colors = colors;
    this.chartData = chartData;
  }
}
export = Chart;
