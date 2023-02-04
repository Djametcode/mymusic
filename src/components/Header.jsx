import React, { useRef, useState } from "react";

const Navss = () => {
  return (
    <p className=" text-sm">Hello</p>
  )
}

const Header = () => {
    const inpuref = useRef()
    const [nav, toggleNavs] = useState(false)
    const toggleNav = () => {
        if (inpuref.current.checked === false) {
            toggleNavs(true)
        } else {
            toggleNavs(false)
        }
    }
    return (
        <div className=" bg-slate-600 p-5 text-4xl text-center text-white sticky top-0 z-20">
             <h1>SpotipeQ</h1>
             <input className=" hidden" type="checkbox" name="head" id="head" ref={inpuref} onClick={toggleNav}/>
             <label className=" absolute left-5 top-7" htmlFor="head">
                <svg className=" h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ariaHidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" />
                </svg>
             </label>
             <div>
                {nav && (
                    <Navss />
                )}
             </div>
        </div>
       
    )
}

export default Header;