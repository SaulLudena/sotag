import FirstFormText from "./firstFormText";
import { IoCloudUploadSharp } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";

export default function FirstForm({ onMoveForward,onDataFromFirstForm }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    console.log(e.target.files); // Muestra los archivos en la consola
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files);
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("pdfFiles", files[i]);
    }

    try {
      const request = await axios.post("http://127.0.0.1:5000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(request.data.completion);
      onDataFromFirstForm(request.data.completion); // Pasamos el dato al padre
      onMoveForward(); // Movemos al siguiente slide
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="text-white translate-y-[10rem]">
      <div className="w-[85%] max-w-[1600px] m-auto grid gap-5">
        <FirstFormText />

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex gap-3">
            <div className="items-center h-10 group">
              <div className="absolute border-2 p-3 border-[#00FFE0] w-80 flex items-center justify-center rounded-xl gap-5">
                <div className="flex items-center justify-center transition duration-300 opacity-30 group-hover:opacity-100">
                  <div className="text-[#00FFE0] p-7 bg-black rounded-full">
                    <IoCloudUploadSharp className="text-2xl" />
                  </div>
                </div>
                <p>Sube tus archivos</p>
              </div>
              <input
                type="file"
                name="pdfFiles"
                id="pdfFiles"
                className="relative opacity-0 cursor-pointer h-28 w-80"
                accept="application/pdf"
                multiple
                onChange={handleFileChange }
              />
            </div>
            <div className="grid items-center h-28">
              {files.length > 0 ? (
                <button className="px-10 py-7 bg-[#00FFE0] text-black font-bold rounded-xl">
                  Generar
                </button>
              ) : (
                "no hay archivos"
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
