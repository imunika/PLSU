'use client'
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";

const gallery1 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig1.jpg", 
    title: "",
    description: "<span style={{color: 'blue', lineHeight : 10, padding: 20}}>Fig. 1. Wall assembly, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, Syracuse University Art Museum, January 2023.</span>",
  },
];

const gallery2 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig2.jpg",
    title: "",
    description: "Fig. 2. Abby Campanaro tidying up, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig3.jpg",
    title: "",
    description: "Fig. 3. Samaya Nasr in the dome, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig4.jpg",
    title: "",
    description: "Fig. 4. Taking a break from umbrella threading for <i>Viola, from New Orleans</i>, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig5.jpg",
    title: "",
    description: "Fig. 5. Julia Neufeld and Samaya Nasr installing umbrella components for <i>Viola, from New Orleans</i>, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig6.jpg",
    title: "",
    description: "Fig. 6. John Umphlett installing <i>Viola, from New Orleans</i>, Syracuse University Art Museum, January 2023.",
  },
];

const gallery3 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig7.jpg",
    title: "",
    description: "Fig. 7. The joy of a completed installation, Syracuse University Art Museum, January 2023.",
  },
];

export default function InstallingPalaceLoveEssayAC() {
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
              <div><Image src="/images/headshots/abby_campanaro.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
              <div>by <Link href="/contributors/abby_campanaro" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Abby Campanaro</Link></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3]">
                
              </div>
              <div>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  The world that Rina Banerjee creates through her installation work is dichotomous: impressive in its size yet simple in many of its materials; mysterious in its approach yet forthright in its message. And the almost effortless and tranquil appearance of, say, a floating pink Taj Mahal, directly contrasts the detailed and demanding work that went into installing it, along with Rina’s two other large-scale installation pieces included in the <i>Take Me to the Palace of Love</i> exhibition (fig. 1).
                </p>
                <br />

                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="indent-16">The installation process for the <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, <i>Viola, from New Orleans</i>, and <i>A World Lost</i> was neither glamorous nor easy (fig. 2). I probably spent an equal amount of time kneeling on the ground to unwrap objects and laying on my back to patch holes in the plastic underside of the <i>Taj</i> dome as I did standing on my feet (fig. 3). At times, the process was almost humbling as I crawled on the ground in front of <i>Viola</i>, meticulously placing each shoe and shell around her feet, and then spending more than an hour combing through the hundreds of threads hanging from her clothes and body (figs. 4 and 5). Despite the challenges, I do think this installation was distinctive in the sheer amount of teamwork required to put it together, and the camaraderie that emerged through the process. Nothing bonds a group of people more than sitting underneath the largest dome of the <i>Take Me, Take Me, Take Me…to the Palace of Love</i> and collectively feeling as if we’re sitting in a womb, which was a truly unique experience to say the least. But suffice to say, the work would never have gotten done without the assistance of our full museum staff, plus Rina’s installer, John Umphlett, who never seemed fazed by the task at hand, though I’m sure that putting a pink Taj Mahal together, piece by piece, is just a typical day in the office for him (fig. 6).</p>
               <br />

                <div className="flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>
                
                <br />
                <p className="indent-16">For me, however, this experience was unlike anything I’ve ever done before, both inside and outside of the museum world. It was challenging and intricate, but seeing an empty gallery space fill with these larger-than-life pieces in less than a week and knowing I played a role in the process was an incredibly rewarding feeling (fig. 7).</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
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
                <Link href="/works/a-world-lost-climate-policy-art" className="font-italiana text-md md:text-xl">
                <i>A World Lost</i>: Climate, Policy, and Art
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/installing-take-me-to-the-palace-of-love-jn" className="font-italiana text-md md:text-xl">
                Behind the Scenes: Installing <i>Take Me to the Palace of Love</i>
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