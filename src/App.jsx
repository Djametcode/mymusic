import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
        <Link to={'/mains'}>Click Me</Link>
      <div id="flex">
        <Outlet />
      </div>
    </div>
  )
}

export default App;