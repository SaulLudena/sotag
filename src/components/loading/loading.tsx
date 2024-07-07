export default function Loading() {
  return (
    <div className="flex items-center text-white translate-y-[10rem]">
      <div className="w-[85%] max-w-[1600px] m-auto grid gap-5">
        <span className="flex gap-2 text-9xl">
          <span className="flex">
            <h1 className="text-[#00FFE0]">G</h1>
            <h1>enerando...</h1>
          </span>
        </span>
        <h4 className=" w-[35rem]">El proceso puede tardar unos minutos</h4>
      </div>
    </div>
  );
}
