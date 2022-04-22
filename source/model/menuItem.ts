class MenuItem {
  public iconClass: String;
  public iconBgClass: String;
  public title: String;
  public value: String;
  public descriptionValue: String;
  public descriptionClass: String;
  public descriptionText: String;

  constructor(
    iconClass: String,
    iconBgClass: String,
    title: String,
    value: String,
    descriptionValue: String,
    descriptionClass: String,
    descriptionText: String
  ) {
    this.iconClass = iconClass;
    this.iconBgClass = iconBgClass;
    this.title = title;
    this.value = value;
    this.descriptionValue = descriptionValue;
    this.descriptionClass = descriptionClass;
    this.descriptionText = descriptionText;
  }
}
export = MenuItem;
