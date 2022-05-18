import axios from "axios";
import URLBackend from "../backendPath";

const getProducts = () => {
  return axios
    .get(`${URLBackend}/product?offset=0&limit=30`)
    .then((response) => {
      return response.data.products;
    })
    .catch((res) => {
      console.log(res.response.data);
    });
};

export { getProducts };
