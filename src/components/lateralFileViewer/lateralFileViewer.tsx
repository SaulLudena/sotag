import { IoClose } from "react-icons/io5";
import Logo from "../logo/logo";
import { useEffect, useState } from "react";

export default function LateralFileViewer({ isOpen, onToggleLateralViewer }) {
  return (
    <div
      className={`fixed top-0 right-0  z-40 h-full bg-black w-[25rem] text-white ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-200`}
    >
      <div className="px-10 py-20">
        <div className="flex justify-between">
          <Logo />
          <div
            className="p-5 text-2xl text-white transition duration-200 rounded-full cursor-pointer bg-zinc-950 "
            onClick={onToggleLateralViewer}
          >
            <IoClose />
          </div>
        </div>
        <div className="mt-20">Tus archivos</div>
        <div className="grid gap-3 mt-5">
          {/*pdfFiles.map((file, index) => (
            <div
              className="flex justify-between px-6 py-5 items-center bg-black rounded-xl text-white w-80 border border-[#222222]"
              key={index}
            >
              <div>{file.name}</div>
            </div>
          ))*/}
        </div>
      </div>
    </div>
  );
}
