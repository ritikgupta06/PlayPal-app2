import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.onlyritik.playpal",
  projectId: "6727038d0036d185c61c",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

// Function to register a new user
export const createUser = async (email, password, name) => {
  try {
    const response = await account.create(ID.unique(), email, password, name);
    console.log("User created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const session = await account.createSession(email, password);
    console.log("User logged in successfully:", session);
    return session;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export default client;
