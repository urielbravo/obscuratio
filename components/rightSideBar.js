import Image from "next/image"

// images
import ghoul_1 from "../public/images/ghoul_1.gif"

// divider
import blood_divider from "../public/dividers/blood_divider.gif"


export default function RightSideBar () {
  return (
    <div id="sidebarBackground" className="text-center h-screen border-l-2 border-green-800">
      <div className="py-4">
        <Image src={ghoul_1} alt="ghoul" />
      </div>
      <Image src={blood_divider} alt="divider" />
      <span className="text-white italic">
        Llenare tus montañas de muertos, tus colinas, tus valles y tus rios
        estaran llenos de gente masacrados por la espada. Te pondre en asolamiento perpetuo, tus
        ciudades nunca seran reconstruidas. Y asi sabras que soy Jehova.
      </span>
      <div className="mt-5">
      <span className="text-white font-bold">
        Ezequiel 35:8-9
      </span>
      </div>
     <div className="mt-5">
     <Image src={blood_divider} alt="divider" />
     </div>
    </div>
  )
}