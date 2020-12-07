import axios from "axios";

export const api = axios.create({
  baseURL: "https://nelio-dscatalog.herokuapp.com",
});
