"use strict";
import { Request, Response, NextFunction, json } from "express";
const querystring = require("querystring");
import { List } from "linq.ts";

interface Device {
  id: Number;
  deviceId: String;
  deviceType: String;
  deviceRiskLevelScore: String;
  lastSeenTimestamp: String;
  appName: String;
  installationTimestamp: String;
  lastUpdateTimestamp: String;
  appVersion: String;
  installDate: String;
  permissions: List<Permission>;
}

interface Permission {
  name: String;
  description: String;
}

// get all devices
const getDevices = async (req: Request, res: Response, next: NextFunction) => {
  var dta = String(req.query.lazyEvent);
  var rows = JSON.parse(dta).rows;
  var sortField = JSON.parse(dta).sortField;
  var sortOrder = JSON.parse(dta).sortOrder;
  var page = JSON.parse(dta).page;
  var pageCount = JSON.parse(dta).pageCount;
  var search = String(
    JSON.parse(dta).search == null ? "" : JSON.parse(dta).search
  ).trim();

  if (!rows) rows = 10;
  if (!page) page = 0;
  if (!pageCount) pageCount = 1;
  var devices = data;
  if (search)
    devices = devices.Where(
      (t) =>
        t?.deviceType.toLocaleLowerCase() == search.toLocaleLowerCase() ||
        t?.deviceId == search ||
        t?.lastSeenTimestamp == search
    );

  if (sortOrder == 1) {
    if (sortField == "deviceType")
      devices = devices.OrderBy((t) => t.deviceType);
    if (sortField == "deviceId") devices = devices.OrderBy((t) => t.deviceType);
    if (sortField == "lastSeenTimestamp")
      devices = devices.OrderBy((t) => t.deviceType);
    if (sortField == "deviceRiskLevelScore")
      devices = devices.OrderBy((t) => t.deviceRiskLevelScore);
  } else if (sortOrder == -1) {
    if (sortField == "deviceType")
      devices = devices.OrderByDescending((t) => t.deviceType);
    if (sortField == "deviceId")
      devices = devices.OrderByDescending((t) => t.deviceId);
    if (sortField == "lastSeenTimestamp")
      devices = devices.OrderByDescending((t) => t.lastSeenTimestamp);
    if (sortField == "deviceRiskLevelScore")
      devices = devices.OrderByDescending((t) => t.deviceRiskLevelScore);
  }

  var count = devices.Count();
  devices = devices
    .Select((t) => t)
    .Skip(Number(rows) * Number(page))
    .Take(Number(rows));

  return res.status(200).json({
    devices: devices,
    totalRecords: count,
  });
};

//get device detail with id
const getDevicesDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var id = req.params.id;
  var queryId = 0;
  if (id) queryId = Number(id);
  var devices = data;
  var device = devices
    .Where((q) => q?.id == queryId)
    .Select((t) => t)
    .FirstOrDefault();

  return res.status(200).json({
    device: device,
  });
};

var permissions = new List<Permission>([
  {
    name: "BIND_VPN",
    description:
      "Must be required by a VpnService to ensure that only system can bind to it.",
  },
  {
    name: "BLUETOOTH_ADMIN",
    description: "Allows applications to discover and pair bluetooth devices.",
  },
  {
    name: "BROADCAST_SMS",
    description:
      "Allows an application to broadcast an SMS receipt notification.",
  },
  {
    name: "CALL_COMPANION",
    description:
      "Allows an app which implements the InCallService API to be eligible.",
  },
  {
    name: "CAPTURE_AUDIO",
    description: "Allows an application to capture audio output.",
  },
  {
    name: "	CHANGE_STATE",
    description: "Allows applications to change network connectivity state.",
  },
]);

let data = new List<Device>([
  {
    id: 1000,
    deviceId: "75583416-bdea-4767-ba08-ce78f8927f44",
    deviceType: "Android",
    deviceRiskLevelScore: "1",
    lastSeenTimestamp: "1650561021",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1002,
    deviceId: "a3ac41a0-2d4d-4e7e-9fc0-01eb9435cf91",
    deviceType: "IOS",
    deviceRiskLevelScore: "1",
    lastSeenTimestamp: "1650561022",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1003,
    deviceId: "924c6153-af89-433e-b927-47069a8383c1",
    deviceType: "Android",
    deviceRiskLevelScore: "3",
    lastSeenTimestamp: "1650561023",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1004,
    deviceId: "28a4ba65-fd7d-42f3-8f9e-ad66abc954eb",
    deviceType: "Android",
    deviceRiskLevelScore: "2",
    lastSeenTimestamp: "1650561024",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1005,
    deviceId: "1b374cdb-b645-496d-8cb5-478d85d73f71",
    deviceType: "IOS",
    deviceRiskLevelScore: "1",
    lastSeenTimestamp: "1650561025",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1006,
    deviceId: "6e7dab25-cf86-4823-b56f-71540d8a8d70",
    deviceType: "IOS",
    deviceRiskLevelScore: "2",
    lastSeenTimestamp: "1650561026",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1007,
    deviceId: "be7ad15f-66e9-4f93-a404-edeba2db3aec",
    deviceType: "Android",
    deviceRiskLevelScore: "3",
    lastSeenTimestamp: "1650561027",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1008,
    deviceId: "f0cb5f31-fe69-44dd-b6a8-61951a71e5a8",
    deviceType: "PC",
    deviceRiskLevelScore: "1",
    lastSeenTimestamp: "1650561028",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1009,
    deviceId: "b9b701a0-8323-48b5-95c7-4a4090a42b58",
    deviceType: "Android",
    deviceRiskLevelScore: "2",
    lastSeenTimestamp: "1650561029",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1010,
    deviceId: "0ed13e9b-c4c3-4b4f-9a81-ddf5c070c87d",
    deviceType: "Android",
    deviceRiskLevelScore: "2",
    lastSeenTimestamp: "1650561030",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1011,
    deviceId: "1b3302a7-ffc3-4f5c-afd7-a9258dcac673",
    deviceType: "PC",
    deviceRiskLevelScore: "1",
    lastSeenTimestamp: "1650561031",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1012,
    deviceId: "98c83147-3c35-4a19-b271-47015c1d43db",
    deviceType: "PC",
    deviceRiskLevelScore: "1",
    lastSeenTimestamp: "1650561032",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1013,
    deviceId: "ba16b6d4-1e69-4cc6-815c-38ed3bfdcc00",
    deviceType: "Android",
    deviceRiskLevelScore: "1",
    lastSeenTimestamp: "1650561033",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1014,
    deviceId: "ba950b9a-71fa-4b4f-b1d3-d7e7d58fbce4",
    deviceType: "IOS",
    deviceRiskLevelScore: "2",
    lastSeenTimestamp: "1650561034",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
  {
    id: 1015,
    deviceId: "3b82a13b-afdb-4d6b-8a01-610c3452255b",
    deviceType: "Android",
    deviceRiskLevelScore: "3",
    lastSeenTimestamp: "1650561036",
    appName: "Telegrm",
    installationTimestamp: "1650561021",
    lastUpdateTimestamp: "1650561021",
    appVersion: "2.1",
    installDate: "2022/4/22",
    permissions: permissions,
  },
]);

export default { getDevices, getDevicesDetail };
