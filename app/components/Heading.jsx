  export default function Heading({ children }) {
  return (
    <div className="grid grid-cols-4 mb-2 p-8">
      <div></div>
      <div className="md:col-span-2 col-span-4">
        <h1 className={"font-italiana font-light pb-3 text-5xl"}>
          { children }
        </h1>
      </div>
      <div></div>
    </div>
  );
}