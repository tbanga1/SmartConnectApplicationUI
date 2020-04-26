import http from "./httpService";
import { apiUrl } from "../config.json";
import auth from "./userService";

export async function getUserServiceRequests() {
  return await http.get(apiUrl + "serviceReq/schedule/history");
}

export async function deleteServiceRequests(item) {
  console.log("item:", item);

  return await http.delete(apiUrl + `serviceReq/schedule/delete/${item._id}`);
}

export default {
  getUserServiceRequests,
  deleteServiceRequests,
};
