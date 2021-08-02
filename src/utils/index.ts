import { loginUrl } from "../spotify";

export const code = new URLSearchParams(window.location.search).get("code");
export const token = localStorage.getItem("access_token");
export const baseURL = "https://accounts.spotify.com";
export const getCodeValue = (): void => {
  // window.location.href = loginUrl;
  if (code && token) {
    window.location.href = "";
  } else if (!token) {
    window.location.href = loginUrl;
  }
};