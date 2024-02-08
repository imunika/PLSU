// import records from '/src/records.json'
// import Link from 'next/link';

// export default function Card() {
//   return (
//     records.map((item, key) => (
//         <div className="flex justify-center p-6" key={key}>
//           <Link href={item.contributor} className="hover:no-underline">
//             <img src={item.author_headshot} alt="" className="mx-auto rounded-full w-36 h-36 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"/>
//             <h2 className="p-2 text-center text-slate-700 font-light font-taviraj text-xl hover:text-[#be3a3b]">{item.author_name}</h2>
//           </Link>  
//         </div>
//       ))
//   );
// }

import React from 'react';
import records from '/src/records.json';
import Link from 'next/link';

export default function Card() {
  // Create a Set to store unique author names
  const uniqueAuthors = new Set();

  // Filter records to include only unique authors
  const uniqueRecords = records.filter(item => {
    if (!uniqueAuthors.has(item.author_name)) {
      uniqueAuthors.add(item.author_name);
      return true;
    }
    return false;
  });

  return (
    <>
      {uniqueRecords.map((item, key) => (
        <div className="flex justify-center p-6 md:p-2" key={key}>
          <Link href={item.contributor} className="hover:no-underline">
            <img
              src={item.author_headshot}
              alt=""
              className="mx-auto rounded-full w-36 h-36 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            />
            <h2 className="p-2 text-center text-slate-700 font-light font-taviraj text-xl md:text-lg hover:text-[#be3a3b]">
              {item.author_name}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}
