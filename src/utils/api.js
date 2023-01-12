import axios from "axios";

export const handleError = (err) => {
  console.error(err);
};

class ApiClient {
  constructor() {
    this.apiClient = null;
    this.apiUrl = process.env.REACT_APP_API_URL ?? "";
  }

  init = () => {
    if (this.apiUrl.length === 0) {
      console.error("api url undefined");
      return;
    }

    const headers = {
      "content-type": "application/json",
    };

    this.apiClient = axios.create({
      baseURL: this.apiUrl + "/",
      timeout: 30000, //timeout 30sec
      headers: headers,
    });

    return this.apiClient;
  };
}
export default class Api extends ApiClient {
  getProducts = async (params) => {
    try {
      const results = await this.init()?.get("products", { params });
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  getProduct = async (id) => {
    try {
      const results = await this.init()?.get(`products/${id}`);
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  getTopProducts = async () => {
    try {
      const results = await this.init()?.get("products", {
        params: {
          limit: 5,
          sortBy: "sales:desc",
        },
      });
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  getFeaturedSellers = async () => {
    try {
      const res = await this.init()?.get("shop/featured");
      return res.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  getBrands = async () => {
    try {
      const results = await this.init()?.get("brands");
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  getMaterials = async () => {
    try {
      const results = await this.init()?.get("materials");
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  getUser = async () => {
    try {
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  login = async () => {
    try {
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };
  logout = async () => {
    try {
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };
  createAcc = async () => {
    try {
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };
}
