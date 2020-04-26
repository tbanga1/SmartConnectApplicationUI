import http from "./httpService";
import { apiUrl } from "../config.json";

export function getReviews() {
  return http.get(apiUrl + "comments/getReviews");
}
