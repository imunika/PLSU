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
            Viola’s love story
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
                  <p>That’s why I wear the mask</p>
                  <p>As I uttered the prayer</p>
                  <p>Ewat Ewat Ewat meel Jacel egay</p>
                  <br />
                  <p>I am only a fraction of the lover I use to be</p>
                  <p>A forgotten history</p>
                  <p>And as vacant as the empty chair in my palace of love</p>
                  <p>You have caused my weeds (weakness) to overgrow and take over the luscious garden that</p>
                  <p>overflowed with what I thought was love</p>
                  <br />
                  <p>But it wasn’t</p>
                  <p>And as I looked around I saw just how identical to real thing it was</p>
                  <br />
                  <p>And that is when</p>
                  <p>I went in search of love,</p>
                  <p>taking pieces from every land until I became so full</p>
                  <br />
                  <p>Ewat Ewat meel jecke egay</p>
                  <br />
                  <p>Allah said I have entrusted you with this vessel of a body</p>
                  <p>A temple,</p>
                  <p>At which you have to wash yourself before entering,</p>
                  <p>Why did I ever let your filthy heart taunt my purity (make it more imaginary)</p>
                  <br />
                  <p>When did my Taj Mahal</p>
                  <p>Become nothing more than a</p>
                  <p>Tourist attraction at the museum</p>
                  <p>Every wandering eye mesmerized</p>
                  <p>At the beauty that once was</p>
                  <br />
                  <p>And it was then that I realized</p>
                  <p>Hatebe at is jaclin wiliga mahesit.</p>
                  <br />
                  <p>Isn’t it crazy</p>
                  <p>That when I started smiling in the mirror</p>
                  <p>It reflected in the people around me</p>
                  <p>So imagine what happened when I started loving more</p>
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
                <Link href="/works/unearthing-my-identity-through-viola" className="font-italiana text-md md:text-xl">
                Unearthing my Identity through Viola
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/a-world-lost" className="font-italiana text-md md:text-xl">
                A World Lost
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