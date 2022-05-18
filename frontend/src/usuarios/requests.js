import axios from "axios";
import URLBackend from "../backendPath";

const delUsers = (id) => {
  return axios
    .delete(`${URLBackend}/user/${id}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((res) => {
      console.log(res);
      return res.data;
    });
};

const getUsers = () => {
  return axios
    .get(`${URLBackend}/user`)
    .then((response) => {
      // console.log(response);
      return response.data.users;
    })
    .catch((res) => {
      // console.log(res);
      return res.data;
    });
};

export { delUsers, getUsers };
