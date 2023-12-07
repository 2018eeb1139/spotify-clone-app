import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useStateValue } from './StateProvider';
import Player from './Player';

const spotify = new SpotifyWebApi()
function App() {
  const [{ user, token }, dispatch] = useStateValue()
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    // console.log(hash)
    const _token = hash.access_token
    if (_token) {
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
        dispatch({
          type:"SET_TOKEN",
          token:_token
        })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      })
      spotify.getPlaylist('4yJzNIoNknZHcMRsvjAssJ').then((response)=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      })
    }
  }, [])
  return (
    <div className="app">
      {
        token ? (<Player spotify={spotify}/>) : (<Login />)
      }
    </div>
  );
}

export default App;
