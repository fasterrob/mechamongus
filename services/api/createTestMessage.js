import axios from "../axios";

export const createTestMessageApi = async (messageData) => {
  try {
    await axios.post("testmessage/", messageData);
  } catch (error) {
    console.error(error);
  }
};
