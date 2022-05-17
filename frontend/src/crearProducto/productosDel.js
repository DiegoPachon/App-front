import axios from "axios";

const delProducts = (values) => {
  const formData = new FormData();
    formData.append("image", values.file[0]);
    formData.append("name", values.name);
    formData.append("price", values.price);
    const URLBackend = "http://localhost:3001";
    return axios
      .delete(`${URLBackend}/product/:productId`, {
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
    export { delProducts };