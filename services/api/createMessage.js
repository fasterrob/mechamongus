import axios from "../axios";

export const createMessageApi = async (messageData) => {
  try {
    await axios.post("message/", messageData);
  } catch (error) {
    console.error(error);
  }
};
