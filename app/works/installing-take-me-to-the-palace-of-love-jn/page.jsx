'use client'
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";

const gallery1 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-jn/fig1.jpg", 
    title: "",
    description: "Captions ... ",
  },
];

export default function InstallingPalaceLoveEssayJN() {
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
            Behind the Scenes: Installing <i>Take Me to the Palace of Love</i>
            </h1>
            <div className="flex items-center">
              <div><Image src="/images/headshots/julia_neufeld.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
              <div>by <Link href="/contributors/julia_neufeld" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Julia Neufeld</Link></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3]">
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

              </div>
              <div>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  Installing Rina Banerjee’s monumental works for <i>Take Me to the Palace of Love</i> was an experience unlike any I’ve had in a museum. Unlike the prints, paintings, and smaller sculptures included in the exhibition, Rina’s enormous installations were physically demanding. Her unconventional materials—the metal frameworks of all the sculptures, the antique chair and table in <i>Take me, take me, take me… to the Palace of Love</i>, and the mesh cage covered in light bulbs and shells in <i>A World Lost</i>—were often heavy and unwieldy. The challenges of installing these objects might not be visible to visitors, since the works are hanging, seeming almost weightless with their single point of suspension. One of the most challenging moments of the installation was hanging the suspended chair at the center of <i>Take me, take me, take me… to the Palace of Love</i>. The chair is a heavy antique with delicate details mounted to a metal framework that attached to cables hanging from the top dome of the Taj Mahal. Hanging the chair was difficult not only because of the weight, but because of the balance required to make sure that the chair did not pull the dome in any one direction. The chair needed to be perfectly centered to ensure that the entire rest of the sculpture was balanced. These kinds of challenges that go on behind the scenes are not seen by visitors to the exhibition, who only see the end product and not the labor that goes into making the exhibition as close to perfect as possible.</p>
                <br />
                <p className="indent-16">My favorite work to install was <i>Viola, from New Orleans</i>, which I worked on primarily with my colleague Samaya Nasr. <i>Viola</i> was exciting for me to work on because of how it involved us in the artistic process. All of the sculptures arrived disassembled, requiring us to essentially rebuild the artworks, unlike installing paintings or other sculptures, which are more self-contained, and usually just need hanging or placing. <i>Viola</i> was special to me because of the real person she represented and how closely I worked with her. Samaya and I spent one day running thread back and forth over 100 times, connecting the figure of Viola to the parachute hanging from the ceiling behind her. At the end of this process, when the threads were brought together and tied to Viola’s back between her wings, I sat on the floor behind her to braid the strings together in a long fishtail braid. This act felt like being at a sleepover with a friend as a child, braiding hair before going to sleep. That intimacy and connection made <i>Viola, from New Orleans</i> my favorite sculpture in the exhibition.</p>
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
                <Link href="/works/installing-take-me-to-the-palace-of-love-ac" className="font-italiana text-md md:text-xl">
                Behind the Scenes: Installing <i>Take Me to the Palace of Love</i>
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/love-in-syracuse-making-art-together" className="font-italiana text-md md:text-xl">
                Love in Syracuse: Making Art Together
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