import Heading from '../../components/Heading';
import records from '/src/records.json'

// Generate segments for both [category] and [product]
export async function generateStaticParams() { 
  return records.map((record) => ({
    slug: record.contributor.substring(14),
  }))
}

export default function ContributorsPage({ params: {slug} }) {
  const item = records.find(record => record.contributor === `/contributors/${slug}`);
  return (
    <>
      <Heading>Contributor</Heading>
      <div className="grid grid-cols-4 bg-[rgba(190,58,59,0.03)] mb-6">
        <div></div>
        <div className="mb-6 md:col-span-2 col-span-4">
          <img src={item.author_headshot} className="mt-6 p-2 mx-auto w-72 h-72" alt="" />
          <h2 className="p-2 text-center text-slate-700 font-light font-taviraj text-2xl mb-10">{item.author_name}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.bio }} className="p-4" />
        </div>
        <div></div>
      </div>
    </>
  );
}