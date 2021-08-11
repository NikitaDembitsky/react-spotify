import { loginUrl } from "../spotify";

export const code = new URLSearchParams(window.location.search).get("code");
export const token = localStorage.getItem("access_token");
export const baseURL = "v1";
export const getCodeValue = (): void => {
  if (code && token) {
    window.location.href = "";
  } else if (!token) {
    window.location.href = loginUrl;
  }
};
export const logOut = (): void => {
  localStorage.clear();
  window.location.href = "/";
};
