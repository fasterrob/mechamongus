import axios from "../axios";

export const getDataAPi = async () => {
  try {
    const response = await axios.get("message/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
