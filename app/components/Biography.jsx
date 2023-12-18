import records from 'src/records.json'
import Link from 'next/link';

export default function Card() {
  return (
    records.map((item, key) => (
        <div className="flex justify-center items-center p-6" key={key}>
          <Link href={item.contributor} className="hover:no-underline">
            <img src={item.author_headshot} alt="" className="mx-auto rounded-full w-40 h-40 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"/>
            <h2 className="p-2 text-center text-slate-700 font-light font-taviraj text-xl hover:text-[#be3a3b]">{item.author_name}</h2>
          </Link>  
        </div>
      ))
  );
}