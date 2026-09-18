import React, { useState , useEffect } from "react";
import { RiArrowLeftWideFill } from "@remixicon/react";
import { RiArrowRightWideFill } from "@remixicon/react";



const corousal = () => {
  const images = [
    "https://images.unsplash.com/photo-1697143493170-8cf836596b34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1702731798348-2ef25e35ead3?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1688884886298-74264a6f8cd8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1688884886369-14a7406cdbc6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [Corousal, setCorousal] = useState(0);

  function crsl() {
    if (Corousal<3) {
      setCorousal(Corousal + 1)
      console.log("clicked");

    }
    else{
        setCorousal(0)
 
    }
  }
  function prev() {
    if (Corousal>0) {
      setCorousal(Corousal - 1)
      console.log("clicked");
    
    } else {
      setCorousal(images.length - 1);
    }
  }
 useEffect(() => {
  const timer = setInterval(() => {
    setCorousal((prev) => {
      if (prev < images.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }, 3000);

  return () => clearInterval(timer);
}, []);


  return (
    <div>
      <div id="home" className="handle">
        <button onClick={prev}><RiArrowLeftWideFill size={36} /></button>
        <img id="pics" src={images[Corousal]} alt="no image found" />
        <button onClick={crsl}><RiArrowRightWideFill size={36} /></button>
      </div>
    </div>
  );
};

export default corousal;
