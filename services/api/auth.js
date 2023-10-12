import axios from "../axios";

export const getUserApi = async (user) => {
  const response = await axios.post("login/", user);
  return response.data;
};
