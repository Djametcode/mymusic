import React, { useRef, useState } from "react";

const Childs = () => {
    return (
        <div className=" m-2 bg-white/40 p-2 rounded-xl">
            <p>Spotipeq adalah platform streaming musik dengan API feature</p>
            <p>Tenang saja gratis kok</p>
        </div>
    )
}

const Child2 = () => {
    return (
        <div className=" m-2 bg-white/40 p-2 rounded-xl">
            <p>Kamu nanya?</p>
            <p>Spotipeq sendiri dibuat oleh hacker terkenal Djamet coder, dengan skill cssnya </p>
        </div>
    )
}

const Articels = () => {
    const inputref = useRef()
    const [child, toggleChild] = useState(false)
    const [child2, toggleChild2] = useState(false)
    const handleclick = () => {
        if (child === false) {
            toggleChild(true)
        } else {
            toggleChild(false)
        }
    }
    const handleclick2 = () => {
        if (child2 === false) {
            toggleChild2(true)
        } else {
            toggleChild2(false)
        }
    }
    return (
        <div>
            <div className=" flex gap-5 bg-white/40 m-2 p-2 rounded-xl">
                <input className=" hidden" type="checkbox" name="checkbox" id="childs" ref={inputref} onClick={handleclick}/>
                <label className=" text-2xl" htmlFor="childs">+</label>
                <p>Apa itu SpotipeQ ?</p>
            </div>
            <div>
            {child && (
                <Childs />
            )}
            </div>
            <div className=" flex gap-5 bg-white/40 m-2 p-2 rounded-xl">
                <input className=" hidden" type="checkbox" name="checkbox" id="childs2" ref={inputref} onClick={handleclick2}/>
                <label className=" text-2xl" htmlFor="childs2">+</label>
                <p>Siapa owner SpotipeQ ?</p>
            </div>
            <div>
            {child2 && (
                <Child2 />
            )}
            </div>
        </div>
    )
}

const Articel = () => {
    return (
        <div className=" h-96 pb-10 mt-15">
            <Articels />
        </div>
    )
}

export default Articel