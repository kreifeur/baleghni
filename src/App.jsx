import { useEffect, useState } from "react";
import Adhkar from "./pages/Adhkar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Salat from "./pages/Salat";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Ayah from "./pages/Ayah";
const App = () => {
  const [position, setPosition] = useState(0);
  window.onscroll = function () {
    setPosition(scrollY);
  };
  return (
    <div className="w-[100%] h-max text-sm relative">
      <Home />
      <Salat />
      <Adhkar />
      <Ayah/>
      <Contact />
      {position > 0 ? (
        <div
        onClick={()=>window.scrollTo(0,0)}
         className="sm:visible invisible fixed right-[3%] bottom-[5%] text-3xl text-green-700 cursor-pointer">
          <BsFillArrowUpSquareFill />
        </div>
      ) : null}
    </div>
  );
};

export default App;
