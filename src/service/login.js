import { driverLoginURL, loginURL, userLoginURL } from "../utils/servicePaths";

export const loginAPI = (phoneNumber,mode) => {
  const url = mode ==="driver" ? driverLoginURL+""+phoneNumber : userLoginURL+""+phoneNumber
  console.log(url)
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log("Service")
      console.log(json)
      return json;
    })
    .catch((err) => {
      console.log("Encountered an Error")
      console.log(err)
      throw err; // Rethrow the error to be caught by the caller
    });
};
