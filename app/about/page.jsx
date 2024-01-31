import Image from "next/image";
import Heading from "../components/Heading";

export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <div className="grid grid-cols-4 bg-[rgba(190,58,59,0.03)] mb-6">
        <div></div>
        <div className="mb-6 md:col-span-2 col-span-4">
          <div className="text-md text-justify text-slate-800 font-light leading-7 p-4 pt-10">
            <figure className="object-center sm:float-right ml-7 mt-2">
              <Image src="/images/about/RomitaRay_bio.jpg" width={360} height={480} alt="Romita Ray" className="w-80 h-100 border border-slate-300 p-1" />
              <figcaption className="mt-1 ml-1 text-xs text-slate-600 dark:text-gray-400">Romita Ray</figcaption>
            </figure>
            <p className="mt-4 sm:mt-0">Lorem ipsum dolor <a href="">Romita Ray</a> sit amet consectetur adipisicing elit. Repellat facilis qui, nulla optio expedita adipisci, quia quidem maiores provident nobis omnis est? Id pariatur possimus asperiores debitis reprehenderit dolorem? Error sequi accusantium ipsam, accusamus sunt nihil sit quis dolorum facilis repellendus quaerat? Minima quas accusamus molestiae saepe repellat iure dolorem aperiam tempore. Tempore atque hic quod quia quos sequi iste cumque possimus, aut et asperiores a tempora. Ipsam distinctio illo placeat facere voluptate? Nobis exercitationem nesciunt voluptate necessitatibus eligendi nemo hic! Rem distinctio veniam, molestiae alias ad dolorum iusto laudantium incidunt reprehenderit unde voluptate modi, eos blanditiis voluptatum nulla quod, nemo enim deleniti asperiores veritatis? Perferendis eius non odio aspernatur nesciunt iste natus, odit ad eveniet asperiores, totam itaque adipisci sequi velit, praesentium sunt reprehenderit enim aut? Ad, voluptatibus sunt. Minima reprehenderit unde possimus recusandae facilis officiis. Praesentium voluptatum est vel tempore quae distinctio provident, voluptatem pariatur dolorum nam itaque totam iure natus nobis nostrum amet odio molestiae animi modi temporibus iusto? Recusandae dignissimos itaque debitis deserunt quisquam, a, facere eaque maxime ut doloremque saepe adipisci! Nulla praesentium laudantium cum minima odio excepturi possimus quae sapiente sit! Libero maiores assumenda quis itaque odio praesentium cum facere quibusdam molestiae expedita tenetur commodi distinctio numquam eaque nihil, vel, inventore quo doloremque ullam ex eum ipsam impedit magnam blanditiis! Nemo illo incidunt quae totam officia aut veniam reiciendis at impedit eveniet, error laboriosam a iure optio non vitae. Numquam architecto vitae amet quas?</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, possimus. Blanditiis, consequatur reprehenderit architecto quod veniam a. Est soluta autem facilis quidem eos amet, quaerat, vel nostrum sapiente similique porro aperiam aut! Fuga alias molestias accusamus ratione unde facilis vitae molestiae tempore repellat! Vero in qui quos necessitatibus explicabo eius! Error fugit porro minus ducimus ad voluptates deserunt eveniet ipsa commodi modi, est ut nesciunt culpa, consequuntur consequatur magnam maiores, libero debitis ea iusto eos itaque maxime. Eveniet nobis, tempora odit culpa ipsam obcaecati illo labore magni natus totam voluptatem. Tempora corrupti quia vel est quisquam ratione vero!</p>
            <br />
            {/* layout="intrinsic" width={500} height={800} */}
          </div>
        </div>
        <div></div>
      </div>  
    </>
  );
} 