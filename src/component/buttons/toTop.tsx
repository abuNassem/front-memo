import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowScrollTop(currentY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ✅ ما في داعي لـ scrollY

  return (
    <div
     className="fixed bottom-[20%] left-1/2 -translate-x-1/2 z-[30]"
      style={{ display: showScrollTop ? "block" : "none" }}
    >
      <IconButton
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  sx={{backgroundColor:'rgba(0, 0, 0, 0.25)',color:'rgba(255, 255, 255, 1)255, 255, 1)',transitionDuration:'0.5s','&:hover':{color:'rgb(0,0,0)'}}}
>
  <FaArrowUp />
</IconButton>

    </div>
  );
};

export default ToTop;
