import Navbar from "../../components/navbar"
import LeftSideBar from "../../components/leftSideBar"
import RightSideBar from "../../components/rightSideBar"
import Marquee from "../../components/marquee"

export default function Posts() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='basis-[15%]'>
          <LeftSideBar />
        </div>
        <div className='basis-[70%]' id="mainContentBackground" >
          <Marquee marqueeText="Blog" />
        </div>
        <div className='basis-[15%]'>
          <RightSideBar />
        </div>
      </div>
    </>
  )
}