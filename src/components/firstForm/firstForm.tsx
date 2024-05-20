import { useEffect, useState } from "react";
import FirstFormText from "./firstFormText";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

interface PropsType {
  id: number;
  file: File;
}

export default function FirstForm() {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPdfFiles = files.map((file) => ({
      name: file.name,
      data: URL.createObjectURL(file),
    }));

    setPdfFiles((prevFiles) => [...prevFiles, ...newPdfFiles]);
  };

  const deleteFile = (fileName) => {
    const updatedFiles = pdfFiles.filter((file) => file.name !== fileName);
    setPdfFiles(updatedFiles);
  };

  useEffect(() => {
    localStorage.setItem("pdfFiles", JSON.stringify(pdfFiles));
  }, [pdfFiles]);
  return (
    <div className="text-white  translate-y-[10rem]">
      <div className="w-[85%] max-w-[1600px] m-auto grid gap-5">
        <FirstFormText />
        <form>
          <div className="flex gap-3">
            <div className="h-10 group">
              <div className="absolute border-2 border-dashed p-3 border-[#00FFE0] w-80 flex items-center justify-center rounded-xl gap-5   ">
                <div className="flex items-center justify-center transition duration-300 opacity-30 group-hover:opacity-100">
                  <div className="text-[#00FFE0] p-7 bg-black rounded-full  ">
                    <IoCloudUploadSharp className="text-2xl" />
                  </div>
                </div>
                <p>Sube tus archivos</p>
              </div>
              <input
                type="file"
                name=""
                id=""
                className="relative border-2 border-white opacity-0 cursor-pointer h-28 w-80"
                accept="application/pdf"
                multiple
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
