'use client'
import Carousel from "@/app/components/Carousel";
import SocialIcons from "@/app/components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";


const slides = [
  "/images/works/love-in-syracuse-making-art-together/fig1.jpg",
  "/images/works/love-in-syracuse-making-art-together/fig2.jpg",
  "/images/works/love-in-syracuse-making-art-together/fig3.jpg",
]

export default function InstallingPalaceLoveEssayJN() {
  return (
    <>          
      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6 bg-[rgba(190,58,59,0.03)]">
          <div className="flex justify-end">
            <SocialIcons />
          </div>
          <div className="px-5 pb-10 sm:mx-10 xl:mx-20 2xl:mx-28">                
            <h1 className="font-italiana font-light pb-3 text-5xl">
            Love in Syracuse: Making Art Together
            </h1>
            <div className="flex items-center">
              <div><img src="/images/headshots/natalie_rieth.png" className="p-2 mx-auto w-16 h-16" alt="" /></div>
              <div>by <a href="/contributors/natalie_rieth" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Natalie Rieth</a></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3] flex items-center justify-center">
                <div className="mt-6 max-w-4xl">
                  <Carousel>
                    {slides.map((s) => (
                      <img src={s} />
                    ))}
                  </Carousel>
                </div>
              </div>
              <div>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  Relationship building is innate to art, whether it be a common understanding between an artist's work and its spectator’s lived experience, or the connections formed by creators who make art together.</p>
                <br />
                <p>“You need a community to have value connected to art,” artist and sculptor Rina Banerjee said. “People decide whether they are attracted to an object or if an object is art and so it's really important that you have a community to establish that vocabulary and language.”</p>
                <br />
                <p>Banerjee's paintings and installations featured in <i>Take Me to the Palace of Love</i> (Syracuse University Art Museum, 2023) are rooted in this sentiment. She believes that making art collaboratively is the best way to form relationships and engage in individual storytelling.</p>
                <br />
                <p>This concept was demonstrated at the <i>Love in Syracuse: Making Art Together</i> event held in February 2023 as part of Banerjee’s recent residency as the Jeannette K. Watson Distinguished Visiting Professor in the Humanities at Syracuse University. Students from the Narratio Fellowship, Syracuse community members, as well as faculty and students from Syracuse University joined Banerjee at Salt City Market in Downtown Syracuse for an afternoon filled with food, conversation, and art-making entrenched in communal love and connection.</p>
                <br />
                <p>Using materials like rope, nylon hair extensions and colored filament, more than thirty community members gathered in the market to create a public art installation that was displayed at the Narratio Fellows’ annual exhibition <i>Repair, Refuge & Resilience</i> in late March 2023, at the Nancy Cantor Warehouse.</p>
                <br />
                <p>After a demonstration led by Banerjee, collaborators were each provided a curved sewing needle to thread the green and black nylon filament — colors that Banerjee mentioned are evocative of nature — and hair extensions into the installation rope. Then, the filament was tightly secured with a simple fishing knot. Banerjee encouraged participants to intuitively create fringe patterns on the rope with the attached filament.</p>
                <br />
                <p>“Rope was designed to be strong,” Banerjee said. “And it needed to be strong — it made a whole industry and income for countries. I’m so excited about the technology of braiding that we’re so familiar with because it has made everything in the exchange of goods possible.”</p>
                <br />
                <p>The project invited participants, ranging from youth to adulthood, to ponder the role love plays in art-making, identity formation, place-making, and more. Having over 16 different nationalities and ethnicities represented at Salt City Market, the gathering also acted as a constellation of diverse communities and a welcoming space for those with a shared understanding of the diasporic experience in Syracuse, New York.</p>
                <br />
                <p>“We’re all sitting together, working together, building community and getting to know each other,” participant and Syracuse school teacher Angela Waithe said. “We’re all very invested in the finishing product.”</p>
                <br />
                <p>Banerjee said the idea of a public art making project originated from creating her site-specific installation <i>A World Lost</i> at Sackler Gallery in 2013. In addition to troublesome lighting, the metal ribs of the installation’s dome were overwhelmed by the black stone in the walls, ceiling, and floor of the space that held the sculpture — an obstacle the artist said she hadn’t anticipated. So, Banerjee recruited gallery staff to assist her in covering the sculpture’s metal ribs with threaded marine rope, which she said added a frilly look to the piece.</p>
                <br />
                <p>Several staff members gathered at tables and threaded ropes with red thread. The activity naturally sparked conversations about Banerjee’s installation, life stories, and experiences working at Sackler Gallery. “It also reminded me of my initiative for bringing this kind of slow, meticulous, detail-oriented work that I learned to love because it's really relaxing and it allows people to share,” Banerjee said.</p>
                <p>Growing up, Banerjee said her mother taught her and her sisters how to sew, crochet, and knit — skills that she’s since embodied within many of her works. The artist said she finds it interesting that since working with thread doesn’t require much muscle, that needleworking is deemed feminine.</p>
                <br />
                <p>“There’s more to just the act of putting the needle to the rope,” Banerjee said. “There’s a very long history of knotting that is part of all cultures and their histories — everything from surgery to fixing a house, and they are taught separately and all very gendered. And I think it was time for me to think about that.”</p>
                <br />
                <p>Banerjee said the event at Salt City Market was her third time leading a version of the community project. She has led a similar workshop at Brown University.</p>
                <br />
                <p>“It’s really exciting to see the range of ages and different relationships,” Banerjee said of the participants at Salt City Market. “You could really see [determination] on their faces as they worked. I think people enjoy seeing their product as it grows.”</p>
                <br />
                <p>Waithe, one of the project collaborators, said that, as a Black woman, braiding has been part of her life since she was first taught how to style her hair around 10 years old. When braiding someone else’s hair, Waithe said the act prompts conversation. She’s actively bonding with the person whose hair she’s braiding.</p>
                <br />
                <p>“It’s a time for sharing and growing, because when you learn about other people they may inspire me to transcend from wherever I am in the moment,” Waithe said. “If you love what you do you have passion for it. It becomes effortless. That’s how I see a love of braiding.”</p>
                <br />
                <p>Syracuse University student N’dei Innocent, who was raised in New York City by parents who moved to the U.S. from St. Lucia and Haiti, said while participating in the event she recognized the compassion in others who she created with.</p>
                <br />
                <p>“You can find love in very small gestures,” Innocent said. “They cared enough to come up to me and say ‘good morning’ and start a conversation.”</p>
                <br />
                <p>Throughout Banerjee’s residency, past fellows of the Narratio Fellowship storytelling and leadership program engaged with the artwork featured in Banerjee’s exhibition at Syracuse University Art Museum and created profound poems and a documentary film based on the art-making event at Salt City Market. Brice Nordquist, co-founder and co-director of the Narratio Fellowship, said it's only fitting for its fellows to create in conjunction with Banerjee since the program aims to reject the kind of narrative that Western audiences might expect of diasporic communities.</p>
                <br />
                <p>“Banerjee’s work does that really well,” Nordquist said. “It disrupts the expectation of what an Indian-American woman is going to be creating.”</p>
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
          <div className="flex gap-20">
            <div className="text-left flex-1">
              <div className="flex gap-1 items-center justify-start">
                <BsChevronCompactLeft size={80} color="#be3a3b" />
                <Link href="/works/installing-take-me-to-the-palace-of-love-jn" className="font-italiana text-md md:text-xl">
                Behind the Scenes: Installing <i>Take Me to the Palace of Love</i>
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/mermaid-thoughts" className="font-italiana text-md md:text-xl">
                Mermaid Thoughts
                </Link>
                <BsChevronCompactRight size={80} color="#be3a3b" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}