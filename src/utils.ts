import { loginUrl } from "./spotify";

export const code = new URLSearchParams(window.location.search).get("code");
export const token = localStorage.getItem("access_token");
export const baseURL = "https://accounts.spotify.com"
export const getCodeValue = () => {
  window.location.href = loginUrl;
};
