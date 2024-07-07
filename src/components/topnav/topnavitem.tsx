export default function Topnavitem({ topnavitem }) {
  const { name, link } = topnavitem;
  return (
    <li className="p-2 text-white cursor-pointer group">
      <p >
        <a>{name}</a>
      </p>
      
    </li>
  );
}
