import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";

const tokenKey = "token";

function log(error) {
  console.error(error);
}

export function getServiceRequests(userId) {
  return http.get(userId);
}

http.setJwt(getJwt());

export function saveServiceRequests(serviceObj) {
  console.log("inside serviceObj ", serviceObj.data, serviceObj._id);
  //editing the service request
  const tempObj = { ...serviceObj.data, _id: serviceObj._id };

  if (serviceObj._id) {
    return http.put("serviceReq/editServiceRequest", tempObj);
  }
  //adding new service request
  return http.put("serviceReq/saveServiceRequest", serviceObj.data);
}

export function register(user) {
  var resp = http.post("userAcct", {
    email: user.username,
    password: user.password,
    name: user.name,
  });
  return resp;
}

export async function login(user) {
  var resp = await http.post("userAcct/auth", {
    email: user.username,
    password: user.password,
  });

  localStorage.setItem(tokenKey, resp.data.token);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getCurrentUser() {
  try {
    const jwtToken = localStorage.getItem(tokenKey);
    console.log("jwtToken", jwtToken);
    return jwtDecode(jwtToken);
  } catch (ex) {
    return null;
  }
}
export default {
  log,
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
