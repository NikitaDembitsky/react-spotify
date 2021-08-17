const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotifyapplication.herokuapp.com/";
const clientId = "f24e61e7ed5b4100ad71dd99bb93d5d4";

export const scopes = ["streaming", "user-read-email", "user-read-private"];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;
