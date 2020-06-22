import React, { useState,useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import { Button,AppBar,Toolbar,IconButton,Typography } from '@material-ui/core';
import NewSongForm from './NewSongForm'

const Songlist = () => {
    const [songs, setSongs] = useState([
        { title:"Kaise hua",  id:1},
        { title:"Dil ka darya",  id:2},
        { title:"Psycho",  id:3},
    ]);
    const addSong = (title) => {
        setSongs([...songs, {title:title,id:uuid()}])
    }
    useEffect( () => {
        console.log("Effetinggg");        
    })
    return (        
        <div className="songs">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">                    
                    </IconButton>
                    <Typography variant="h6" >
                    News &nbsp; &nbsp; &nbsp;                              
                    </Typography>
                    <Typography variant="h6" >
                    Sports &nbsp; &nbsp; &nbsp; 
                    </Typography>
                    <Typography variant="h6" >
                    Politics &nbsp; &nbsp; &nbsp; 
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            
            <ul>
                {songs.map( song => {
                    return(<li key={song.id}>{song.title}</li>) 
                })}
            </ul>
           
            <NewSongForm addSong={addSong} />
            
        </div>
    );
}
 
export default Songlist;