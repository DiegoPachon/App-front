import axios from "axios";

const delProducts = (id) => {
  const URLBackend = "http://localhost:3001";
  return axios
    .delete(`${URLBackend}/product/${id}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((res) => {
      console.log(res);
      return res.data;
    });
};
export { delProducts };
