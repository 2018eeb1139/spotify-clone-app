export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3001/"

const clientId = "e145a70999b2466d87222d011c3daf10"

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played"
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;