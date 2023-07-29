import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold underline">helo</h1>
        </div>
      </div>
    </>
  );
}

export default App;
