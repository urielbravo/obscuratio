import Image from "next/image"

// components
import Marquee from "../marquee"

// dividers
import fireDivider from '../../public/dividers/divider_2.gif'

// cuentos de la noche logo
import logo from '../../public/CuentosDeLaNoche.jpg'

// castle
import castle from '../../public/images/castle.gif'


export default function MainContent () {
  return (
    <div className="space-y-4 h-screen" id="mainContentBackground">
      <Marquee marqueeText="Cuentos de la noche" />
      <div className="flex flex-col">
        <h1 className="text-white text-2xl text-center">
          Bienvenidos a la pagina oficial de su podcast favorito
        </h1>
        <Image alt="divider" src={fireDivider} />
        <div className="flex flex-col items-center">
          <div className="h-64 w-64 text-center">
            <Image alt="castle" src={castle} />
          </div>
          <div className="h-80 w-80">
            <Image alt="logo" src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}