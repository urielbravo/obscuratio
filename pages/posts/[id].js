import Navbar from "../../components/navbar"
import LeftSideBar from "../../components/leftSideBar"
import RightSideBar from "../../components/rightSideBar"
import Marquee from "../../components/marquee"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import Date from '../../components/date'

export async function getStaticProps ({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths () {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post ({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navbar />
      <div className='flex'>
        <div className='basis-[15%]'>
          <LeftSideBar />
        </div>
        <div className='basis-[70%] text-white' id="mainContentBackground" >
          <Marquee marqueeText="Titulo del post" />
          {postData.title}
          <br />
          {postData.id}
          <br />
          <Date dateString={postData.date} />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <div className='basis-[15%]'>
          <RightSideBar />
        </div>
      </div>
    </>
  )
}