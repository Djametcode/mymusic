import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./nav";
import MusicList from "./item";
import Articel from "./articel";
import Ytpicks from "./ytpicks";

const Main = () => {

    const Toplist = () => {
        return (
            <h2 className=" bg-white/30 rounded-lg text-center m-3 p-4 text-xl animate-pulse">Top List Song</h2>
        )
    }
    return (
            <div className=" bg-slate-600/80">
                <Header />
                <Toplist />
                <MusicList />
                <Articel />
                <h2 className=" bg-white/30 m-3 p-4 text-xl text-center rounded-lg">Youtube Picks</h2>
                <Ytpicks />
                <div className=" fixed bottom-0 w-full">
                    <Navbar/>
                </div>
            </div> 
    )
}

export default Main;