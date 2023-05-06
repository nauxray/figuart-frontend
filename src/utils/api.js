import axios from "axios";

export const handleError = (err) => {
  console.error(err);
};

class ApiClient {
  constructor() {
    this.apiClient = null;
    this.apiUrl = `${process.env.REACT_APP_API_URL}api/` ?? "";
  }

  init = () => {
    if (this.apiUrl.length === 0) {
      console.error("api url undefined");
      return;
    }

    const headers = {
      Authorization: "Bearer " + localStorage.getItem("jwtToken") ?? "",
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

  // cart apis
  getCart = async (id) => {
    try {
      const results = await this.init()?.get(`cart/${id}`);
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  addToCart = async (id) => {
    try {
      const res = await this.init()?.post(`cart/add/${id}`);
      return res.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  removeFromCart = async (id) => {
    try {
      const res = await this.init()?.delete(`cart/remove/product/${id}`);
      return res.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  removeOneFromCart = async (id) => {
    try {
      const res = await this.init()?.delete(`cart/remove/${id}`);
      return res;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  checkout = async () => {
    try {
      const response = await this.init()?.get("checkout");
      return response;
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };
  completePayment = async (orderId) => {
    try {
      const response = await this.init()?.get(`checkout/${orderId}`);
      return response;
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };
  handleCheckoutSuccess = async (sessionId) => {
    try {
      const response = await this.init()?.post(
        "checkout/success",
        { sessionId },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response;
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };

  // user apis
  getUser = async (id) => {
    try {
      const results = await this.init()?.get(`users/${id}/profile`);
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
  login = async (data) => {
    try {
      const response = await this.init()?.post("users/login", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response;
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };
  logout = async () => {
    try {
      const response = await this.init()?.get("users/logout");
      return response;
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };
  createAcc = async (data) => {
    try {
      const response = await this.init()?.post("users/create", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response;
    } catch (err) {
      handleError(err);
      return err.response;
    }
  };

  // order apis
  getUserOrders = async (userId) => {
    try {
      const results = await this.init()?.get(`orders/user/${userId}`);
      return results.data;
    } catch (err) {
      handleError(err);
      return null;
    }
  };
}
