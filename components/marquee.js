import Image from "next/image"

// images
import Torch from '../public/background/torch.gif'

export default function Marquee ({ marqueeText }) {
  return (
    <div className="py-20 px-10 flex justify-center items-center" >
      <Image src={Torch} alt="torch" />
      <div className="text-5xl font-bold" id="marquee">
        <span className="text-red-700">{ marqueeText }</span>
      </div>
      <Image src={Torch} alt="torch" />
    </div>
  )
}