import { useState } from "react";

const ScrollIndicator = () => {
    const [scroll, setScroll] = useState(0);
  
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

    return ( 
        <div className={`h-1 lg:h-1.5 bgLight z-50 fixed top-0 left-0 w-full`}>
            <div className={`bg-gradient-to-l from-blue-500 to-green-300 h-full rounded-b-md`} style={{width: `${scroll}%`}}></div>
        </div>
     );
}
 
export default ScrollIndicator;