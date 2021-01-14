const axios = require("axios").default;

const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/",
  timeout: 5000,
});

export const get = async (url, params) => {
  try {
    const response = await instance.get(url, { params });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const post = async (url, data) => {
  try {
    const response = await instance.post(url, data);
    return response;
  } catch (err) {
    // console.log("Catch err", err, err.response);
    return err.response;
  }
};
