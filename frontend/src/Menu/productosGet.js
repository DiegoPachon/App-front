import axios from "axios";

const getProducts = (values) => {
  const URLBackend = "http://localhost:3001";
  return axios
    .get(`${URLBackend}/product?offset=0&limit=10`, {})
    .then((response) => {
      // console.log(response);
      return response.data.products;
    })
    .catch((res) => {
      // console.log(res);
      return res.data;
    });
};
export { getProducts };
