import axios from "axios";

export const axiosService = {
  baseURL: "http://138.201.167.230:5050",

  createInstance(contentType = "application/json") {
    return axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": contentType,
      },
    });
  },

  async get(url, params = {}, contentType = "application/json") {
    try {
      const instance = this.createInstance(contentType);
      const response = await instance.get(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  },

  async post(url, data = {}, contentType = "application/json") {
    try {
      const instance = this.createInstance(contentType);
      const response = await instance.post(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  },

  async put(url, data = {}, contentType = "application/json") {
    try {
      const instance = this.createInstance(contentType);
      const response = await instance.put(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  },

  async delete(url, contentType = "application/json") {
    try {
      const instance = this.createInstance(contentType);
      const response = await instance.delete(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  },

  handleError(error) {
    console.error("An error occurred:", error.message);
  },
};

// module.exports = axiosService;
