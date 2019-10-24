import request from "superagent";

export default authRequest = () => {
  const token = localStorage.getItem("jwt");
  return request
    .set("Authorization", `Bearer ${token}`)
}

export const apiUrl = (path) => `http://localhost:4000${path}`;
