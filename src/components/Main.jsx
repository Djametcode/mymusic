import React, { createContext, useContext, useEffect, useState } from "react";
import Audios from "./audio";
import Header from "./Header";
import HomeIcon from '@mui/icons-material/Home';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

const ItemApp = createContext(null)
const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const url = 'https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm';
        try {
            const getData = async () => {
                const response = await fetch(url);
                const data = await response.json();
                const result = data.tracks;
                setData(result)
            }
            getData()
        } catch (error) {
            console.error(error)
        }
    }, [])


    const Audio = ({links}) => {
        return (
            <Paper variant="contained" sx={{
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <audio style={{
                    scale: '0.7'
                }} controls >
                <source src={links}/>
                </audio>
            </Paper>
            
        )
    }

    const List = ({data}) => {
        console.log(data)
        const {
            artistName,
            name,
            previewURL,
            albumId
        } = data

        const thumbnail = `https://api.napster.com/imageserver/v2/albums/${albumId}/images/356x237.jpg`;
        return (
            <Box sx={{
                margin: '10px',
                width: '250px'
            }}>
                 <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '10px',
                    backgroundImage: 'radial-gradient(circle, #344968, #3f7185, #649898, #9abdaa, #d8e1c4)'
                }}>
                    <h1 id="header">{artistName}</h1>
                        <div id="img-flex">
                            <img id="images" src={thumbnail} alt=""/>
                        </div>
                    
                    <p id="title">{name}</p>
                    <Audio links = {previewURL}/>
                </Paper>
            </Box>
            
        )
    }

    const Toplist = () => {
        return (
            <h2 id="info">Top List Song</h2>
        )
    }

    const Return = ({data}) => {
        return (
            <a key={data} href="#">{data}</a>
        )
    }

    const Bottombutton = () => {
        // const item = ['Beranda', 'Playlist', 'akun'];
        const item = ['Home', 'music'];
        const result = item.map((x) => <Return key={x} data ={x} />)
        return (
            <div id="homebtn">
                {result}
            </div>
        )
    }

    const Item = () => {
        
        const { data, setData} = useContext(ItemApp);
        const result = data.map((item) => <List key={item.id} data = {item} />)
        return(
            <div id="flex">
                {result}
            </div>
        )
    }

    return (
        <ItemApp.Provider value={{data, setData}}>
            <Box sx={{
            }}>
                <Header />
                <Toplist />
                <Item />
                <Bottombutton />
            </Box>
        </ItemApp.Provider>

    )
}

export default Main;