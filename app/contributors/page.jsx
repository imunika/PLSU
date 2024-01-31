'use client'
import Heading from "../components/Heading";
import Biography from "../components/Biography";

export default function AuthorsPage() {
  return (
    <>
      <Heading>Contributors</Heading>
      <div className="grid grid-cols-4 pb-6 bg-[rgba(190,58,59,0.03)] mb-6">
        <div></div>
        {/* <div className="col-span-6 bg-[rgba(190,58,59,0.03)] border-[#be3a3b] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 p-4"> */}
        <div className="mb-2 md:col-span-2 col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mt-4">
          <Biography />               
        </div>
        <div></div>
      </div>
    </>
  );
}