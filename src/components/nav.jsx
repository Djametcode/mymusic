import React from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
    return (
        <Link to={'/'} className=" block p-3 w-full">Beranda</Link>
        )
    }

const Playing = () => {
    return (
        <a className=" block p-3 w-full" href="#">Playing</a>
    )
}
    
const Profil = () => {
    return (
        <Link to={'/profile'} className=" block p-3 w-full" >Profil</Link>
    )
}
const Navbar = () => {
    return (
        <div className=" bg-slate-600 flex justify-around m-0 p-0 text-center text-white/40">
            <Beranda />
            <Playing />
            <Profil />
        </div>
    )
}

export default Navbar;