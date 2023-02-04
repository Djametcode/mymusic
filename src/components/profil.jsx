import React from "react";
import Navbar from "./nav";

const ProfilMain = () => {
    return (
        <div className=" bg-slate-600/40 p-4 m-2 rounded-lg">
            <div className=" bg-white w-12 h-12 rounded-full">
                <div className=" bg-user bg-cover rounded-full w-12 h-12 p-1">
                </div>
            </div>
            
            <div className=" bg-white/40 mt-4 h-24 p-2 rounded-lg">
                <p>Guest</p>
                <p>Subscription : forever</p>
                <p>Favorite Song : As it was </p>
            </div>
            
        </div>
    )
}

const ProfilHeader = () => {
    return (
        <div className=" bg-white/40 m-2 p-3 text-xl text-center rounded-lg">
            <h1>Welcome To Spotipeq</h1>
        </div>
    )
}
const Profil = () => {
    return (
        <div>
            <ProfilHeader />
            <ProfilMain />
            <div className=" bg-slate-600/40 h-96 m-2 rounded-lg">
                <p className=" p-4 text-white/40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti magnam recusandae incidunt iste? Architecto cupiditate enim facere nemo. Ullam beatae quasi ex dolorum incidunt molestias nesciunt sed, sapiente voluptas accusantium?</p>
            </div>
            <div className=" bg-slate-600/40 h-96 m-2 rounded-lg">
                <p className=" p-4 text-white/40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti magnam recusandae incidunt iste? Architecto cupiditate enim facere nemo. Ullam beatae quasi ex dolorum incidunt molestias nesciunt sed, sapiente voluptas accusantium?</p>
            </div>
            <Navbar />
        </div>
    )
}

export default Profil