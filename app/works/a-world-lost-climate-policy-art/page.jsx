'use client'
import SocialIcons from "../../components/Socialicons";
import Image from 'next/image';
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";

const gallery1 = [
  {
    href: "/images/works/a-world-lost-climate-policy-art/fig1.jpg", 
    title: "",
    description: "Fig. 1. Rina Banerjee, <i>A World Lost</i>, 2013. Black synthetic horns, wire, netting, lightbulbs, scale, ostrich eggs, textiles, cowrie shells, pebbles, coins, feathers, fish vertebrae, greenery, coral, glass birds, miniature human and animal figurines, plastic cups, and red thread. Syracuse University Art Museum. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery2 = [
  {
    href: "/images/works/a-world-lost-climate-policy-art/fig2.jpg", 
    title: "",
    description: "Fig. 2. Rina Banerjee, detail, <i>A World Lost</i>, 2013. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery3 = [
  {
    href: "/images/works/a-world-lost-climate-policy-art/fig3.jpg", 
    title: "",
    description: "Fig. 3. Rina Banerjee, detail, <i>A World Lost</i>, 2013. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

export default function WorldLostEssay() {
  return (
    <>
      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6 bg-[rgba(190,58,59,0.03)]">
          <div className="flex justify-end">
          <SocialIcons />
          </div>
          <div className="px-5 pb-10 md:mx-6 lg:mx-12 xl:mx-16 2xl:mx-32 min-[1600px]:mx-40">                
            <h1 className="font-italiana font-light pb-3 text-5xl">
              <i>A World Lost</i>: Climate, Policy, and Art
            </h1>
            <div className="flex items-center">
              <div><Image src="/images/headshots/david_driesen.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
              <div>by <Link href="/contributors/david_driesen" className="text-neutral-600 font-semibold hover:text-[#be3a3b] hover:no-underline hover:font-black">David M. Driesen</Link></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3]">
              </div>
              <div>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  <i>A World Lost</i> (2013) offers a fascinating and absorbing, albeit deeply troubling, picture of the climate crisis (fig. 1). As an academic lawyer, I tend to focus on actions designed to “mitigate” climate disruption, such as policies to reduce fossil fuel use (which reduce greenhouse gas emissions). At the same time, when I write or teach about this subject, I have to try to do something analogous to what Rina Banerjee does in <i>A World Lost</i>, paint a picture of what climate disruption is all about. In this essay, I want to contrast the perspective of <i>A World Lost</i> with the perspective I am accustomed to, as a way of capturing some of what is so intriguing about this installation.</p>
                <br />
                <p className="indent-16">First of all, there is the matter of temporal perspective. The science that policymakers focus on the most is future oriented. It aims to predict the types and magnitudes of consequences that might occur if global warming continues unabated. It is based on observations of the past (data), but the data is then assembled into computer models that have equations embodying what we might know about interrelationships between warming and the behavior of earth systems. The models then make future predictions about the type and extent of consequences of continued warming. Policy experts’ work also looks forward, proposing measures now that can have an impact in ameliorating the climate crisis going froward. My own work focuses a lot on economic incentive schemes, such as emissions trading.</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="indent-16"><i>A World Lost</i> has a very different perspective. The installation depicts a future after much of the world we know is gone. It looks back on the present (or at least the near future) from a future radically disrupted by a climate crisis. From that perspective, I found the slow rotation of the upper part of the piece particularly moving (fig. 2). It seemed to depict the aftermath of some terrible violence to the earth, as if the earth itself was left to slowly twist in the wind.</p>
                <br />
                <p className="indent-16">Then comes the problem of selection. Global climate disruption is a multifaceted phenomenon. When I first began teaching this in the 1990s, practically all my colleagues would speak of different new revelations in the scientific literature regarding the likely effects of climate disruption when we met. Global warming was, and remains, dizzying in the breadth and sheer numerosity of its consequences. The litany in my articles usually mentions floods and inundation of coastal areas, the spread of infectious disease, widespread drought, species loss and heat waves. But that description leaves out a lot. Scientists tend to solve the description problem by trying to comprehensively list all of the facts, which makes the subject overwhelming and incomprehensible to most people. Economists solve this by reducing as many of the consequences as possible into dollar terms, an approach that proves deeply misguided, as the most important aspects of the problem resist valuation in those terms.</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                <p className="indent-16"><i>A World Lost</i>, at least in its Syracuse incarnation, focuses heavily on the problem of sea level rise. It has seashells arranged along the periphery, but one has the impression that the sea has taken over and overwhelmed everything else (fig. 3). Sea level rise is one of the most central and certain consequences of global warming, caused by both melting ice caps and the thermal expansion of the ocean. Depicting it visually or describing what it means is hard. First of all, eventually it can simply mean that coastal cities go underwater. But in the meantime, one sees things like intense flooding after hurricanes pass through, the sidewalks of Fort Lauderdale being inundated almost all of the time, not just after heavy rains, and beaches slowly disappearing. <i>A World Lost</i> depicts sea level rise mainly be the use of negative space leaving a remnant of something that resembles land surrounded by an advanced sea.</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p className="indent-16">It’s a very rich exhibition and I can’t reduce it to a set of consequences depicted. I found myself seeing more things in it every time I looked. It includes burned out light bulbs suggesting the origins of the crisis in the generation of electricity. Ultimately, I hope it enables viewers to feel the immensity of the climate crisis.</p>
                <br />
                <p className="indent-16">But for all of that horror, the piece has a kind of beauty. Its elements have a weird sort of balance to them that draws one in and makes one want to look, not look away. <i>A World Lost</i> can help viewers understand and care about the climate crisis, which is what the world needs right now.</p>
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
                {/* <BsChevronCompactLeft size={80} color="#be3a3b" />
                <Link href="/" className="font-italiana text-md md:text-xl">
                Behind the Scenes: Installing “Take Me to the Palace of Love”
                </Link> */}
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/installing-take-me-to-the-palace-of-love-ac" className="font-italiana text-md md:text-xl">
                Behind the Scenes: Installing “Take Me to the Palace of Love”
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