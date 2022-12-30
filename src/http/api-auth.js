import axios from "axios";

const api = axios.create({
  baseURL: "https://api-para-testes.herokuapp.com/",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem("@app:token");
        localStorage.removeItem("@app:user");
      }
      return Promise.reject(error.response);
    }

    return Promise.reject(error);
  }
);

export default api;
