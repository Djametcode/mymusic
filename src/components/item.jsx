import React, { useEffect, useState } from "react";
const Audio = ({links}) => {
    return (
        <div>
            <audio src={links} controls>
            </audio>
        </div>
    )
}

const List = ({data}) => {
    console.log(data)
    const {
        artistName,
        name,
        albumId,
        previewURL
    } = data

    const thumbnail = `https://api.napster.com/imageserver/v2/albums/${albumId}/images/356x237.jpg`;
    return (
        <div className=" m-2 flex flex-col justify-center text-center gap-2 p-3 bg-white/30 rounded-3xl cursor-pointer">
                <img className=" rounded-3xl" src={thumbnail} alt="" />
                <h1 className=" w-64">{name}</h1>
                <h2>{artistName}</h2>
                <Audio links={previewURL}/>
        </div>
    )
}
const MusicList = () => {
        
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
    const result = data.map((item) => <List key={item.id} data = {item} />)
    return(
        <div className=" flex overflow-auto p-3">
            {result}
        </div>
    )
}

export default MusicList