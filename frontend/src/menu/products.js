import axios from "axios";

const getProducts = () => {
  const URLBackend = "http://localhost:3000";
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
