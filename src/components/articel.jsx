import React, { useRef, useState } from "react";

const Childs = () => {
    return (
        <div className=" m-3 bg-white/30 p-3 rounded-xl">
            <p>Spotipeq adalah platform streaming musik dengan API feature</p>
            <p>Tenang saja gratis kok</p>
        </div>
    )
}

const Child2 = () => {
    return (
        <div className=" m-3 bg-white/30 p-3 rounded-xl">
            <p>Kamu nanya?</p>
            <p>Spotipeq sendiri dibuat oleh hacker terkenal Djamet coder, dengan skill cssnya </p>
        </div>
    )
}

const Articels = () => {
    const inputref = useRef()
    const [child, toggleChild] = useState(false)
    const [expand, setExpand] = useState('+')
    const [expand2, setExpand2] = useState('+')
    const [child2, toggleChild2] = useState(false)
    const handleclick = () => {
        if (child === false) {
            toggleChild(true)
            setExpand('-')
        } else {
            toggleChild(false)
            setExpand('+')
        }
    }
    const handleclick2 = () => {
        if (child2 === false) {
            toggleChild2(true)
            setExpand2('-')
        } else {
            toggleChild2(false)
            setExpand2('+')
        }
    }
    return (
        <div>
            <div className=" flex gap-5 bg-white/40 m-3 p-2 rounded-xl text-xl">
                <input className=" hidden" type="checkbox" name="checkbox" id="childs" ref={inputref} onClick={handleclick}/>
                <label htmlFor="childs">{expand}</label>
                <p>Apa itu SpotipeQ ?</p>
            </div>
            <div>
            {child && (
                <Childs />
            )}
            </div>
            <div className=" flex gap-5 bg-white/40 m-3 p-2 rounded-xl text-xl">
                <input className=" hidden" type="checkbox" name="checkbox" id="childs2" ref={inputref} onClick={handleclick2}/>
                <label htmlFor="childs2">{expand2}</label>
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
        <div className=" mt-15">
            <Articels />
        </div>
    )
}

export default Articel