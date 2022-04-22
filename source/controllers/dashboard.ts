/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import Chart = require("../model/chart");
import ChartDataItem = require("../model/chartDataItem");
import MenuItem = require("../model/menuItem");
import Progress = require("../model/progress");
import CardProgress = require("../model/cardProgress");
import { createModuleResolutionCache } from "typescript";

interface Post {
  userId: Number;
  id: Number;
  title: String;
  body: String;
}

const fs = require("fs");
var path = require("path");

// getting all devices
const getDevices = async (req: Request, res: Response, next: NextFunction) => {
  if (path.existsSync("device.json")) {
    return res.status(200).json({
      devices: 1,
    });
  } else {
    return res.status(200).json({
      devices: 2,
    });
  }

  //   let rawdata = fs.readFileSync("device.json");
  //   let devices = JSON.parse(rawdata);
  //   return res.status(200).json({
  //     devices: devices,
  //   });
  // return res.status(200).json({
  //   devices: "abc",
  // });
};

const chartItemCount = 15;

// getting all posts
const getDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var menu1 = new MenuItem(
    "pi-info-circle text-yellow-3 text-xl",
    "bg-yellow-1",
    "Total Infected",
    String(generateRandomNumber(0, 1000)),
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-up text-green-1",
    "Since Last Month"
  );

  var menu2 = new MenuItem(
    "pi-euro text-green-3 text-xl",
    "bg-green-1",
    "Infection Price",
    String(generateRandomNumber(0, 10000)) + "$",
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-up text-green-1",
    "Since Last Month"
  );

  var menu3 = new MenuItem(
    "pi-flag text-blue-3 text-xl",
    "bg-blue-1",
    "Total Rooted",
    String(generateRandomNumber(0, 1000)),
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-down text-red-2",
    "Since Last Month"
  );

  var menu4 = new MenuItem(
    "pi-ban text-red-3 text-xl",
    "bg-red-1",
    "Total Abnormal",
    String(generateRandomNumber(0, 1000)),
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-up text-green-1",
    "Since Last Month"
  );

  var progressMaxValue = 100;
  var progressIos = generateRandomNumber(0, progressMaxValue);
  var progressAndroid = generateRandomNumber(0, progressMaxValue - progressIos);
  var progressPc = progressMaxValue - progressIos - progressAndroid;

  var progress = new CardProgress(
    "Infected Devices Ratio",
    new Array<Progress>(
      new Progress("IOS", "bg-red-2", progressIos),
      new Progress("Android", "bg-green-2", progressAndroid),
      new Progress("PC", "bg-light-blue-1", progressPc)
    )
  );

  var chart1DataItem1 = createChartDataItem("pc", chartItemCount, "bar");
  var chart1DataItem2 = createChartDataItem("ios", chartItemCount, "bar");
  var chart1DataItem3 = createChartDataItem("android", chartItemCount, "bar");

  var chart1 = new Chart(
    "Infected Devices",
    createLabels(chartItemCount),
    400,
    ["bg-red-1", "bg-red-2", "bg-red-3"],
    [chart1DataItem1, chart1DataItem2, chart1DataItem3]
  );

  var chart1DataItem1 = createChartDataItem("pc", chartItemCount, "bar");
  var chart1DataItem2 = createChartDataItem("ios", chartItemCount, "bar");
  var chart1DataItem3 = createChartDataItem("android", chartItemCount, "bar");

  var chart2 = new Chart(
    "Rooted Devices",
    createLabels(chartItemCount),
    400,
    ["#145DA0", "#0C2D48", "#B1D4E0"],
    [chart1DataItem1, chart1DataItem2, chart1DataItem3]
  );

  var chart1DataItem1 = createChartDataItem("BIND APP", chartItemCount, "line");
  var chart1DataItem2 = createChartDataItem(
    "BIND REMOTE",
    chartItemCount,
    "line"
  );
  var chart1DataItem3 = createChartDataItem("BIND TV", chartItemCount, "line");
  var chart1DataItem4 = createChartDataItem(
    "BLUETOOTH ",
    chartItemCount,
    "line"
  );
  var chart1DataItem5 = createChartDataItem(
    "BODY SENSORS",
    chartItemCount,
    "line"
  );
  // var chart1DataItem6 = createChartDataItem("BROADCAST SMS", chartItemCount, "line");
  // var chart1DataItem7 = createChartDataItem("CAMERA", chartItemCount, "line");
  // var chart1DataItem8 = createChartDataItem("CALL PHONE", chartItemCount, "line");

  var chart3 = new Chart(
    "Abnormal Security Devices",
    createLabels(chartItemCount),
    400,
    [
      "#62acc9",
      "#f89a1c",
      "#bdda7b",
      "#e5d26d",
      "#f15722",
      // "#01949A",
      // "#004369",
      // "#DB1F48",
    ],
    [
      chart1DataItem1,
      chart1DataItem2,
      chart1DataItem3,
      chart1DataItem4,
      chart1DataItem5,
      // chart1DataItem6,
      // chart1DataItem7,
      // chart1DataItem8,
    ]
  );

  return res.status(200).json({
    menu1: menu1,
    menu2: menu2,
    menu3: menu3,
    menu4: menu4,
    chart1: chart1,
    chart2: chart2,
    chart3: chart3,
    progress: progress,
  });
};

const getStatistic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var menu1 = new MenuItem(
    "pi-info-circle text-yellow-3 text-xl",
    "bg-yellow-1",
    "Total Infected",
    String(generateRandomNumber(0, 1000)),
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-up text-green-1",
    "Since Last Month"
  );

  var menu2 = new MenuItem(
    "pi-euro text-green-3 text-xl",
    "bg-green-1",
    "Infection Price",
    String(generateRandomNumber(0, 10000)) + "$",
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-up text-green-1",
    "Since Last Month"
  );

  var menu3 = new MenuItem(
    "pi-flag text-blue-3 text-xl",
    "bg-blue-1",
    "Total Rooted",
    String(generateRandomNumber(0, 1000)),
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-down text-red-2",
    "Since Last Month"
  );

  var menu4 = new MenuItem(
    "pi-ban text-red-3  text-xl",
    "bg-red-1",
    "Total Abnormal",
    String(generateRandomNumber(0, 1000)),
    String(generateRandomNumber(0, 100)) + "%",
    "pi-arrow-up text-green-1",
    "Since Last Month"
  );

  var progressMaxValue = 100;
  var progressIos = generateRandomNumber(0, progressMaxValue);
  var progressAndroid = generateRandomNumber(0, progressMaxValue - progressIos);
  var progressPc = progressMaxValue - progressIos - progressAndroid;

  var progress = new CardProgress(
    "Infected Devices Ratio",
    new Array<Progress>(
      new Progress("IOS", "bg-red-2", progressIos),
      new Progress("Android", "bg-green-2", progressAndroid),
      new Progress("PC", "bg-light-blue-1", progressPc)
    )
  );

  return res.status(200).json({
    menu1: menu1,
    menu2: menu2,
    menu3: menu3,
    menu4: menu4,
    progress: progress,
  });
};

const getInfectedChart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var chart1DataItem1 = createChartDataItem("pc", chartItemCount, "bar");
  var chart1DataItem2 = createChartDataItem("ios", chartItemCount, "bar");
  var chart1DataItem3 = createChartDataItem("android", chartItemCount, "bar");

  var chart = new Chart(
    "Infected Devices",
    createLabels(chartItemCount),
    400,
    ["#98C8DB", "#FABC57", "#DDEBBD"],
    [chart1DataItem1, chart1DataItem2, chart1DataItem3]
  );

  return res.status(200).json({
    chart,
  });
};

const getRootedChart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var chart1DataItem1 = createChartDataItem("pc", chartItemCount, "bar");
  var chart1DataItem2 = createChartDataItem("ios", chartItemCount, "bar");
  var chart1DataItem3 = createChartDataItem("android", chartItemCount, "bar");

  var chart = new Chart(
    "Rooted Devices",
    createLabels(chartItemCount),
    400,
    ["#98C8DB", "#FABC57", "#DDEBBD"],
    [chart1DataItem1, chart1DataItem2, chart1DataItem3]
  );

  return res.status(200).json({
    chart,
  });
};

const getAbnormalChart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var chart1DataItem1 = createChartDataItem("BIND APP", chartItemCount, "line");
  var chart1DataItem2 = createChartDataItem(
    "BIND REMOTE",
    chartItemCount,
    "line"
  );
  var chart1DataItem3 = createChartDataItem("BIND TV", chartItemCount, "line");
  var chart1DataItem4 = createChartDataItem(
    "BLUETOOTH ",
    chartItemCount,
    "line"
  );
  var chart1DataItem5 = createChartDataItem(
    "BODY SENSORS",
    chartItemCount,
    "line"
  );
  // var chart1DataItem6 = createChartDataItem("BROADCAST SMS", chartItemCount, "line");
  // var chart1DataItem7 = createChartDataItem("CAMERA", chartItemCount, "line");
  // var chart1DataItem8 = createChartDataItem("CALL PHONE", chartItemCount, "line");

  var chart = new Chart(
    "Abnormal Security Devices",
    createLabels(chartItemCount),
    400,
    [
      "#98C8DB",
      "#FABC57",
      "#DDEBBD",
      "#f68f59",
      "#f15722",
      // "#01949A",
      // "#004369",
      // "#DB1F48",
    ],
    [
      chart1DataItem1,
      chart1DataItem2,
      chart1DataItem3,
      chart1DataItem4,
      chart1DataItem5,
      // chart1DataItem6,
      // chart1DataItem7,
      // chart1DataItem8,
    ]
  );

  return res.status(200).json({
    chart,
  });
};

// getting a single post
const getDashboardDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get the post id from the req
  let id: string = req.params.id;
  // get the post
  let result: AxiosResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  let post: Post = result.data;
  return res.status(200).json({
    message: post,
  });
};

function createChartDataItem(name: string, count: number, chartType: String) {
  var itemValues = [];
  for (var i = 0; i < count; i++) {
    itemValues.push(generateRandomNumber(1, 100));
  }
  return new ChartDataItem(name, chartType, itemValues);
}

function createLabels(count: number) {
  var dateArray = [];

  for (var i = 0; i < count; i++) {
    var currentDate = new Date(new Date());
    var date = currentDate.setDate(currentDate.getDate() - i);
    dateArray.push(formatDate(date));
  }
  return dateArray;
}

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function formatDate(date: number) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export default {
  getStatistic,
  getInfectedChart,
  getRootedChart,
  getAbnormalChart,
  getDashboard,
  getDevices,
};
