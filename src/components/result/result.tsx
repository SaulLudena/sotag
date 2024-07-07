import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";

export default function Result({ data }) {
  const [copySuccess, setCopySuccess] = useState("");


  const handleCopy = () => {
    navigator.clipboard.writeText(data)
      .then(() => {
        setCopySuccess("Texto copiado!");
        setTimeout(() => setCopySuccess(""), 2000); // Borra el mensaje después de 2 segundos
      })
      .catch(err => {
        setCopySuccess("Fallo al copiar!");
        setTimeout(() => setCopySuccess(""), 2000);
      });
  };

  return (
    <div className="w-[85%] max-w-[1600px] m-auto gap-72 flex justify-around py-40 text-white">
      <div>
        <span className="flex gap-2 mb-3 text-9xl w-96">
          <span className="flex">
            <h1 className="text-[#00FFE0]">L</h1>
            <h1>isto !</h1>
          </span>
        </span>
        <h4 className="mb-4 text-4x5">
          Análisis del estado del arte de tu artículo
        </h4>
      </div>

      <div className="grid w-1/2 gap-5 mb-40">
        <span className="grid h-auto gap-3 p-5 bg-black rounded-xl">
          <p>{data}</p>
          <div className="flex items-center">
            <div className="p-3 rounded-full cursor-pointer" onClick={handleCopy}>
              <FaRegCopy className="text-3xl"/>
            </div>
            {copySuccess && <span className="ml-3 text-green-500">{copySuccess}</span>}
          </div>
        </span>
      </div>
    </div>
  );
}

