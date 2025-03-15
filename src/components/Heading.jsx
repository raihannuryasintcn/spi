export function Heading(props) {
  return (
    <h1 className="border-l-4 border-l-blue-500 bg-gradient-to-r from-[rgba(177,228,242,0.5)] to-[rgba(153,153,153,0)] p-4 text-2xl text-gray-700 font-bold text-left">
      {props.title}
    </h1>
  );
}
