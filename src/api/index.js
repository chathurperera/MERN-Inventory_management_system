import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:rootAdmin"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser?.token;

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    token: `Bearer ${token}`,
  },
});

export default API;
