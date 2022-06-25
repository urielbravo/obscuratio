import Image from "next/image"

// blinkers
import netscapebtn from "../public/blinkers/browser1.gif"
import hellokitty from "../public/blinkers/SANRIO_PUROLAND.gif"
import noecities from "../public/blinkers/noecities_blinker.gif"
import akane from "../public/blinkers/akageo_blinker.gif"
import noescape from "../public/blinkers/noescape_blinker.gif"
import mars from "../public/blinkers/mars_blinker.gif"
import nescenter from "../public/blinkers/nescenter_blinker.gif"
import mania from "../public/blinkers/mania_blinker.gif"
import angel from "../public/blinkers/angel_blinker.jpg"
import piracy from "../public/blinkers/piracy_blinker.gif"
import eyes from "../public/blinkers/eyes_blinker.gif"

// images
import ghoul_1 from "../public/images/ghoul_1.gif"


export default function LeftSideBar () {
  return (
    <div id="sidebarBackground" className="h-screen border-r-2 border-green-800 text-center">
      <div className="py-4">
        <Image src={ghoul_1} alt="ghoul" />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-[15vh] text-center px-2">
        <Image src={netscapebtn} alt="button" />
        <Image src={hellokitty} alt="button" />
        <Image src={noecities} alt="button" />
        <Image src={akane} alt="button" />
        <Image src={noescape} alt="button" />
        <Image src={mars} alt="button" />
        <Image src={nescenter} alt="button" />
        <Image src={mania} alt="button" />
        <Image src={angel} alt="button" />
        <Image src={piracy} alt="button" />
        <Image src={eyes} alt="button" />
      </div>
    </div>
  )
}