import Navbar from "../../components/navbar"
import LeftSideBar from "../../components/leftSideBar"
import RightSideBar from "../../components/rightSideBar"
import Marquee from "../../components/marquee"
import Link from "next/link"
import Date from '../../components/date'

// method to get the posts
import { getSortedPostsData } from "../../lib/posts"

export async function getStaticProps () {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts ({ allPostsData }) {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='basis-[15%]'>
          <LeftSideBar />
        </div>
        <div className='basis-[70%]' id="mainContentBackground" >
          <Marquee marqueeText="Blog" />
          {/* blog posts section */}
          <section className="text-white text-center">
            <ul className="space-y-10">
              {allPostsData.map(({ id, date, title }) => (
                <li className="border-red-800 border-2" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="text-3xl">{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className='basis-[15%]'>
          <RightSideBar />
        </div>
      </div>
    </>
  )
}