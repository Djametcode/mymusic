import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./Header";

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
            <div id="audio">
                <audio controls>
                <source src={links}/>
                </audio>
            </div>
            
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
            <div id="tracks-flex">
                <div id="tracks">
                    <h1 id="header">{artistName}</h1>
                    <img id="images" src={thumbnail} alt=""/>
                    <p id="title">{name}</p>
                    <Audio links = {previewURL}/>
                </div>
            </div>
            
        )
    }

    const Toplist = () => {
        return (
            <h2 id="info">Top List Song</h2>
        )
    }

    const Return = ({data}) => {
        return (
            <a href="#">{data}</a>
        )
    }

    const Bottombutton = () => {
        const item = ['Beranda', 'Playlist', 'akun'];
        const result = item.map((x) => <Return data ={x} />)
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
            <div className="app">
                <Header />
                <Toplist />
                <Item />
                <Bottombutton />
            </div>
        </ItemApp.Provider>

    )
}

export default Main;