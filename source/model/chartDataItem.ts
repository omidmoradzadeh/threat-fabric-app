class ChartDataItem {
  public name: String;
  public chartType: String;
  public values: Array<Number>;
  constructor(name: String, chartType: String, values: Array<Number>) {
    this.name = name;
    this.chartType = chartType;
    this.values = values;
  }
}
export = ChartDataItem;
