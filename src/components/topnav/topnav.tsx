import Logo from "../logo/logo";
import Topnavitem from "./topnavitem";
import LateralFileViewer from "../lateralFileViewer/lateralFileViewer";

import { useState } from "react";
export default function Topnav() {
  const [openLateralViewer, setOpenLateralViewer] = useState(false);
  const toggleLateralViewer = () => {
    setOpenLateralViewer(!openLateralViewer);
  };

  return (
    <div className=" flex w-[85%] max-w-[1600px] m-auto items-center gap-28 py-14 justify-between">
      <div className="flex items-center gap-28">
        <Logo />
        <ul className="flex items-center gap-5">
          {topnavitems.map((topnavitem, index) => (
            <Topnavitem key={index} topnavitem={topnavitem} />
          ))}
        </ul>
      </div>

      <LateralFileViewer
        isOpen={openLateralViewer}
        onToggleLateralViewer={toggleLateralViewer}
      />
    </div>
  );
}
const topnavitems = [
  { name: "Inicio", link: "/" },
  { name: "Membresia", link: "/membresia" },
  { name: "Contacto", link: "/contacto" },
];
