import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header";
import { Navigate, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigate to="main" />
      <div>
        <Header />
        <div className="pt-16"></div>
        <Outlet />
        {/*TEMP PLACEHOLDER*/}
        <div className="grid grid-cols-12 justify-center items-center ">
          <div className="bg-retro-light-blue w-full h-screen"></div>
          <div className="bg-retro-light-blue w-full h-screen col-span-10 "></div>
          <div className="bg-retro-light-blue w-full h-screen"></div>
        </div>
      </div>
    </>
  );
}

export default App;
