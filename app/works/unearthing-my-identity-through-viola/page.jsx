'use client'
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function WorldLostEssay() {
  return (
    <>
      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6 bg-[rgba(190,58,59,0.03)]">
          <div className="flex justify-end">
            <SocialIcons />
          </div>
          {/* <div className="px-5 pb-10 sm:mx-10 xl:mx-20 2xl:mx-28">                 */}
          <div className="px-5 pb-10 md:mx-6 lg:mx-12 xl:mx-16 2xl:mx-32 min-[1600px]:mx-40">
            <h1 className="font-italiana font-light pb-3 text-5xl">
            Unearthing my Identity through Viola
            </h1>
            <div className="flex items-center">
              <div><Image src="/images/headshots/zamzam_mohamed.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
              <div>by <Link href="/contributors/zamzam_mohamed" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Zamzam Mohamed</Link></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3]">
              </div>
              <div className="mt-10">
                <div className="sm:indent-4">
                  <p>As I wander through these halls,</p>
                  <p>my eyes alight on a figure that calls</p>
                  <p className="font-bold text-black">To me, as if it holds a secret key.</p>
                  <p>To unlock the truth of who I'm meant to be.</p>
                  <br />
                  <p>Oh Viola, your skin is a tapestry,</p>
                  <p className="font-bold text-black">woven with the threads of your past and present,</p>
                  <p className="font-bold text-black">Each stitch a tribute to your heritage and history,</p>
                  <p>A masterpiece that defies all attempts to confine.</p>
                  <br />
                  <p>Your tusks, proud and regal,</p>
                  <p>extend like sentinels from your neck,</p>
                  <p>A symbol of the burdens you have borne,</p>
                  <p>And the strength that lies within your every step.</p>
                  <br />
                  <p>The objects that surround us,</p>
                  <p>bear witness to the stories of generations,</p>
                  <p>They whisper secrets of struggle and survival,</p>
                  <p>And the resilience that has carried us to this moment at last.</p>
                  <br />
                  <p>Like you, I am on a journey,</p>
                  <p>to discover the depths of my identity,</p>
                  <p>My roots, like the tendrils of a tree,</p>
                  <p>Entwined with the stories of those who came before me.</p>
                  <br />
                  <p>Viola, your legacy of fortitude is an inspiration,</p>
                  <p>A testament to the human spirit,</p>
                  <p>And the unyielding force that makes us stand / still.</p>
                  < br/>
                  <p>And though the road ahead may be fraught with struggles,</p>
                  <p>I take comfort in the knowledge that I am not alone,</p>
                  <p>for I carry within me the strength and resilience,</p>
                  <p>Of those who have come before.</p>
                  <br />
                  <p>Oh Viola, your tapestry and tusks,</p>
                  <p>Are a testament to the power of the human spirit,</p>
                  <p>Through your assemblage I find the courage to face the unknown,</p>
                  <p>And the strength to live my life with purpose and merit.</p>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6">
          <div className="flex items-center gap-20">
          <div className="text-left flex-1">
            <div className="flex gap-1 items-center justify-start">
              <div><BsChevronCompactLeft size={80} color="#be3a3b" /></div>
                <Link href="/works/to-the-palace-of-love" className="font-italiana text-md md:text-xl">
                To the Palace of Love
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/violas-love-story" className="font-italiana text-md md:text-xl">
                Viola’s love story
                </Link>
                <div><BsChevronCompactRight size={80} color="#be3a3b" /></div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}