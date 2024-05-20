import LogoImg from "../../../public/Logo.png";
export default function Logo() {
  return (
    <div className="flex  text-white gap-3 items-center">
      <img src={LogoImg} alt="" className="w-10" />
      <h1>Sotag</h1>
    </div>
  );
}
