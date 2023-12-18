import Link from "next/link";
import { useState } from "react";

export default function Accordion(props) {
  const [item, setItem] = useState(props.data);
  const handletoggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({...item, active: newActive});
  };
  return (
    <div className={`pb-4 px-4 border-b border-[#c9c9c9] duration-1000 group ${item.active === 1 ? 'is-active': ''}`}>
      <div className="flex items-start gap-4 cursor-pointer"
        onClick={handletoggleActive}>
        <div className="text-lg my-4 w-full duration-1000 group-[.is-active]:text-[#be3a3b] hover:text-[#be3a3b]">
          {item.title_essay}
        </div>
        <div className="text-xl mt-4 rotate-90 duration-1000 group-[.is-active]:rotate-[270deg] group-[.is-active]:text-[#be3a3b] hover:text-[#be3a3b]">
          &gt;
        </div>
      </div>
      <div className="overflow-hidden max-h-0 duration-1000 group-[.is-active]:max-h-[250px]">
        <img src={item.author_headshot} alt="" className="w-16 h-16 float-left mr-4 m-1" />
        <div className="mb-3 font-extralight text-sm">
          by <Link href={item.contributor} className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">{item.author_name}</Link>
        </div>
        <div>
          <Link href={item.essay} className="text-slate-900 hover:text-[#be3a3b] hover:no-underline font-light text-sm">
            <div dangerouslySetInnerHTML={{ __html: item.desc }} />
          </Link>
        </div>
      </div>
    </div>
  );
}