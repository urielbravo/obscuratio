import Navbar from '../components/navbar'
import MainContent from '../components/home/main'
import RightSideBar from '../components/rightSideBar'
import LeftSideBar from '../components/leftSideBar'

export default function Home () {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div className='basis-[15%]'>
          <LeftSideBar />
        </div>
        <div className='basis-[70%]'>
          <MainContent marqueeText={"Cuentos de la noche"} />
        </div>
        <div className='basis-[15%]'>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}
