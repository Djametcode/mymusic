import React from "react";

const Ytpicks = () => {
    return (
        <div className=" flex m-2 h-96 overflow-auto">
            <iframe className=" w-80 h-80 m-2 rounded-xl" src="https://www.youtube.com/embed/RUu_RtRxsTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className=" w-80 h-80 m-2 rounded-xl" src="https://www.youtube.com/embed/Rl1ImG2b1k8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className=" w-80 h-80 m-2 rounded-xl" src="https://www.youtube.com/embed/_r0vlyp33pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Ytpicks