import React from "react";

const Beranda = () => {
    return (
        <a className=" block p-3 w-full" href="#">Beranda</a>
    )
}

const Playing = () => {
    return (
        <a className=" block p-3 w-full" href="#">Playing</a>
    )
}
    
const Profil = () => {
    return (
        <a className=" block p-3 w-full" href="#">Profil</a>
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