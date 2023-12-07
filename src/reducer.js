export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: 'BQAephLhmyFSYfHliA-oxuscl52V1sui-MNI7-N_ldxM6f84A-xK3WCz0YAyqUB-EUwLTRqm-wXBYcBGUTq-nLLjxkEXRVoU36Kx6E5OwlJs0algwbrpFS1-1co61FVOHCtVoLfoM00cTwYFqBXGzkjAj-OSmGbmfoNRfIy1POx-wwBtcQ3x1lpo4KfSiLAxqDjPfA5Y4ai7Jg5m3t8'
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer