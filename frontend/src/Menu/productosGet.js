import axios from "axios";

const getProducts = (values) => {
  const formData = new FormData();
    formData.append("image", values.file[0]);
    formData.append("name", values.name);
    formData.append("price", values.price);
  const URLBackend = "http://localhost:3001";
  return axios
    .get(`${URLBackend}/product?offset=0&limit=10`, {
      file: values.file[0],
      name: values.name,
      price: values.price,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((res) => {
      console.log(res);
    return res.data;
    });
  }
  export  { getProducts };