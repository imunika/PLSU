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
            To the Palace of Love
            </h1>
            <div className="flex items-center">
              <div><Image src="/images/headshots/justo_triana.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
              <div>by <Link href="/contributors/justo_triana" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Justo Triana</Link></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3]">
              </div>
              <div className="mt-10">
                <div className="sm:indent-4">
                  <p>Take me</p>
                  <p>to the Palace of Love</p>
                  <p>before the Taj</p>
                  <p>where I can dip my feet in the long fountain</p>
                  <p>and close my eyes, and kneel and pray, and play</p>
                  <p>the sitar to the gods.</p>
                  <br />
                  <p>To the palace</p>
                  <p>where memory is a promise</p>
                  <p>&mdash;a breathing, burning promise&mdash;</p>
                  <p>blending with life,</p>
                  <p>perpetually unfulfilled.</p>
                  <br />
                  <p>Take me where incense manifests its wisdom</p>
                  <p>in the dark room,</p>
                  <p>growing</p>
                  <p>like an unfinished shadow,</p>
                  <p>like a serpent</p>
                  <p>entangled in the air</p>
                  <p>interrupted by the movement of a hand,</p>
                  <p>where I may see</p>
                  <p>what you've seen</p>
                  <p>through other eyes.</p>
                  <br />
                  <p>The marble hides the features</p>
                  <p>not yet sculpted</p>
                  <p>by the lover's chisel,</p>
                  <p>imagining a face</p>
                  <p>buried four hundred years ago.</p>
                  <br />
                  <p>I want to see that face.</p>
                  <p>And I want to forget all other faces.</p>
                  <br />
                  <p>I'll bid farewell</p>
                  <p>with pity</p>
                  <p>from some window</p>
                  <p>to those who dare not realize</p>
                  <p>that love was always worth</p>
                  <p>the vow to love till death;</p>
                  <p>to die till love, till life:</p>
                  <p>to love</p>
                  <p>till life do us part,</p>
                  <p>till death bring us together.</p>
                  <br />
                  <p>I'll leave my death outside</p>
                  <p>&mdash;the one I wore</p>
                  <p>while living&mdash;,</p>
                  <p>my scabs as souvenirs,</p>
                  <p>and the walls of the palace</p>
                  <p>as my testament.</p>
                  <br />
                  <p>Now</p>
                  <p>take me</p>
                  <p>to the Altar of Love,</p>
                  <p>and take my life:</p>
                  <p>I'll keep dragging my suffering around</p>
                  <p>until I lie</p>
                  <p>where there are no more names,</p>
                  <p>no dates,</p>
                  <p>no history,</p>
                  <p>no pain,</p>
                  <p>and what is left is naked flesh in silence</p>
                  <p>offering Love its beauty</p>
                  <p>in spite of time.</p>
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
                <Link href="/works/tell-me-whom-you-love" className="font-italiana text-md md:text-xl">
                “Tell Me Whom You Love”: ‘Mixed’ Marriage & Racial Mutability
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/unearthing-my-identity-through-viola" className="font-italiana text-md md:text-xl">
                Unearthing my Identity through Viola
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