const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "f24e61e7ed5b4100ad71dd99bb93d5d4";
const clientSecret = "8bae4f346b4241adb1453b38931c7b01";

const scopes = ["streaming", "user-read-email", "user-read-private"];

export const code = new URLSearchParams(window.location.search).get("code");

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

export const tokenUrl = `curl -H "Authorization: Basic ${clientId}:${clientSecret}" -d grant_type=authorization_code -d code=${code} -d redirect_uri=${redirectUri} -X POST https://accounts.spotify.com/api/token`;
// curl -H "Authorization: Basic ZjM...zE=" -d grant_type=authorization_code -d code=MQCbtKe...44KN -d redirect_uri=https%3A%2F%2Fwww.foo.com%2Fauth https://accounts.spotify.com/api/token
