// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndPoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "f62cfc93200a46f6b0e0314fa94f5d79"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;