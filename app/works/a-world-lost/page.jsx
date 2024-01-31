'use client'
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function AWorldLostEssay() {
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
            A World Lost
            </h1>
            <div className="flex items-center">
              <div><Image src="/images/headshots/khadija_sharif.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
              <div>by <Link href="/contributors/khadija_sharif" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Khadija Sharif</Link></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3]">
              </div>
              <div className="mt-10">
                <div className="sm:indent-4">
                  <p>It is important you know What calms the waterfall’s anger</p>
                  <p>Currents so wild</p>
                  <p>It chips off a piece of</p>
                  <p>you slowly sinking to the bottom</p>
                  <p>And under the water, the scales, weigh the same</p>
                  <p>But down here it’s so easy</p>
                  <p>The current taking you,</p>
                  <p>Through a world lost</p>
                  <p>And you become complacent riding the wave</p>
                  <p>Unaware</p>
                  <p>As if the reefs aren’t dying</p>
                  <p>As if you soul isn’t screaming for air</p>
                  <p>WAKE UP</p>
                  <p>When will you realize that the scale weighs the same down here?</p>
                  <br />
                  <p>Can love rescue us?</p>
                  <br />
                  <p>And even when you are part of that world</p>
                  <p>Where we can run and walk</p>
                  <p>There are days when the sky opens up and lets droplet drips</p>
                  <p>And it’s these days is when we say the prayer</p>
                  <br />
                  <div>
                    <Image src="/images/works/a-world-lost/a_world_lost_prayer.jpg" width={1280} height={720} alt="" className="w-[50%]" />
                  </div>  
                  <br />
                  <p>Allahumma hawalaina wala ‘alaina</p>
                  <br />
                  <p>And let us find our anchor</p>
                  <p>While out boat gets tossed around</p>
                  <p>In this sea we call life</p>
                  <p>In a Word lost</p>
                  <p>I pray you find your way</p>
                  <p>a path light up with Gulaal</p>
                  <p>Where we can quench the desire to be artificially human</p>
                  <br />
                  <p>Imagine a world found,</p>
                  <p>Only then would we understand</p>
                  <p>The waterfall wasn’t angry</p>
                  <p>It was warning us</p>
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
                <Link href="/works/violas-love-story" className="font-italiana text-md md:text-xl">
                Viola’s love story
                </Link>
              </div>
            </div>
            {/* <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/a-world-lost" className="font-italiana text-md md:text-xl">
                A World Lost
                </Link>
                <div><BsChevronCompactRight size={80} color="#be3a3b" /></div>
              </div>
            </div> */}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}