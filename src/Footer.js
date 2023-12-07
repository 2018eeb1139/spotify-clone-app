import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footerAlbum__logo'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7u__7OyTwnJm6rGEV2t2Digr29utTFnQgA&usqp=CAU"
          alt=""
        />
        <div className="footerSong__info">
          <h4>Koi Jo mila tha mujhe</h4>
          <p>Shankar Mahadevan</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider"/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer