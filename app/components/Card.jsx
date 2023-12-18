import records from 'src/records.json'
import Link from 'next/link';

export default function Card() {
  const essayist = records.filter(item => item.title_essay.length > 0);
  return (
    essayist.map((item, key) => (
        <div className="flex justify-center items-center bg-white border shadow hover:shadow-xl rounded-xl relative text-white" key={key}>
          <Link href={item.essay}>
            <img src={item.artwork_img} alt="" className="mx-auto aspect-[16/12] h-full w-full object-cover"/>
            <div className="absolute inset-0 h-full w-full z-10 bg-gradient-to-b from-transparent to-stone-800 opacity-40"></div>
            <div className="mt-4 absolute bottom-0 left-0 z-20">
              <h2 className="p-2 text-center text-white font-taviraj text-xl">{item.title_essay}</h2>
              <p className="text-white text-sm mx-2 mb-2">{item.author_name}</p>
            </div>
          </Link>  
        </div>
      ))
  );
}