import { useState } from "react";
import Popup from "./components/Popup";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [val, setVal] = useState(null);
  
  const handle = (value)=>{
    setVal(value);
  }

  return (
    <div className="bg-darkBlue flex flex-col gap-36 justify-start md:justify-center items-center w-screen h-screen">
      <Popup setVal={handle}/>
      <h1 className="text-white text-3xl md:text-5xl mt-28 text-center md:-mt-20">NumTrack</h1>
      <ProgressBar initialValue={val}/>
      {!val && <div className="inset-0 z-20 bg-black opacity-70 absolute"></div>}
    </div>
  );
}

export default App;
