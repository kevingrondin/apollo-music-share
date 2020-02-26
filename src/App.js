import React from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import {Grid, Hidden, useMediaQuery} from '@material-ui/core';
import SongReducer from './reducer';

export const SongContext = React.createContext({
  song:{
    id:"501e4e2c-2c43-44a8-b3f4-27d0e5a3bb57",
    title: "The Race Freestyle (Tay-K)",
    artist: "Isaiah Rashad",
    thumbnail : "http://img.youtube.com/vi/Rf4S_44jkAY/0.jpg",
    duration: 116,
    url: "https://www.youtube.com/watch?v=Rf4S_44jkAY",
  },
  isPlaying: false
});

function App() {
  const greaterThanMd =useMediaQuery(theme=>theme.breakpoints.up('md'));
  const greaterThanSm =useMediaQuery(theme=>theme.breakpoints.up('sm'));
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(SongReducer,initialSongState);
  return (
    <SongContext.Provider value={{state,dispatch}}>

      <Hidden only="xs">
        <Header/>
      </Hidden>
      <Grid 
        container 
        spacing={3}
        style={{
          paddingTop: greaterThanSm ? 80 : 10
        }}
      >
        <Grid item xs={12} md={7}>
          <AddSong/>
          <SongList/>
        </Grid>
        <Grid item xs={12} md={5} style={
          greaterThanMd ? {
            position:'fixed',
            right: 0,
            top:70,
            width:'100%',
          } : {
            bottom:0,
            left:0,
            position:'fixed',
            width:'100%',
          }
        }>
          <SongPlayer/>
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
