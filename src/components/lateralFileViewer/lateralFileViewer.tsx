import { IoIosClose } from "react-icons/io";
import Logo from "../logo/logo";
import { useEffect, useState } from "react";
export default function LateralFileViewer() {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("pdfFiles")) || [];
    setPdfFiles(storedFiles);
  }, []);
  console.log(pdfFiles);
  return (
    <div className="fixed top-0 right-0  z-40 h-full bg-black w-[25rem] text-white">
      <div className="px-10 py-20">
        <Logo />

        <div className="mt-20">Tus archivos</div>
        <div className="grid gap-3 mt-5">
          {pdfFiles.map((file, index) => (
            <div
              className="flex justify-between px-6 py-5 items-center bg-black rounded-xl text-white w-80 border border-[#222222]"
              key={index}
            >
              <div>{file.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
