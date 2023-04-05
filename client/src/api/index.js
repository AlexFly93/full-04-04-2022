import axios from "axios";
import qs from "query-string";
import CONSTANTS from "../constants";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getUsers = (options = {}) => {
  const defaultOptions = {
    limit: CONSTANTS.MIN_LIMIT,
    offset: 0,
  };
  const readyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpClient.get(`/users?${qs.stringify(readyOptions)}`);
};

export const postUser = (values) => httpClient.post("/users", values);
