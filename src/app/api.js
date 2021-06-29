import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api/";

const login = (email, password) => {
  axios.post("/login", {
    email,
    password,
  });
};

const register = (email, password) => {
  axios.post("/register", {
    email,
    password,
  });
};

const getUsers = (page) => axios.get(`/users?/page=${page}`);

const createUser = (name, job) => {
  axios.post("/users", {
    name,
    job,
  });
};

const deleteUser = (userId) => axios.delete(`users/${userId}`);

const updateUser = (userId, name, job) => {
  axios.put(`users/${userId}`, {
    name,
    job,
  });
};

const API = {
  login,
  register,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};

export default API;
