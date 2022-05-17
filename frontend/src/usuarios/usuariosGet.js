import axios from "axios";

const getUsers = () => {
  const URLBackend = "http://localhost:3001";
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
export { getUsers };
