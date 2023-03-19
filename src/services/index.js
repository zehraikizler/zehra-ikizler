import axios from "axios";

export async function GetReposApi() {
  try {
    let response = await axios.get(
      "https://api.github.com/users/zehraikizler/repos"
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function GetAllData() {
  try {
    const response = await fetch("https://api.github.com/users/zehraikizler");
    let data = response.json();
    return data;
  } catch (err) {
    return err;
  }
}
