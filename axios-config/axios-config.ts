import axios from "axios";

const instance = axios.create({
  baseURL: "https://asiam-e-commerce-be.herokuapp.com",
});

export default instance;
