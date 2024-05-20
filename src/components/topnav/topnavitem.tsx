export default function Topnavitem({ topnavitem }) {
  const { name, link } = topnavitem;
  return (
    <li className="text-white  p-2 group cursor-pointer">
      <p className="pb-2">{name}</p>
      <div className="bg-white opacity-0 h-1 w-full rounded-full group-hover:opacity-100 transition duration-200"></div>
    </li>
  );
}
