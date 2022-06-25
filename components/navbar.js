import Image from "next/image"
import Link from "next/link"
import navbarSkeletonGif from '../public/images/skeleton_27.gif'

export default function Navbar () {
  return (
    <div>
        <div className="flex justify-between p-4" id='navbarBackground'>
          {/* skeleton */}
          <div className="h-36 w-24 relative">
            <Image layout="fill" src={navbarSkeletonGif} alt="sekeleton" />
          </div>
          {/* links */}
          <div className="flex items-center space-x-10">
            <span className="text-white text-3xl hover:text-purple-600 hover:text-4xl">
              <Link href="/">Home</Link>
            </span>
            <span className="text-white text-3xl hover:text-purple-600 hover:text-4xl">
              <Link href="/posts/">Blog</Link>
            </span>
            <span className="text-white text-3xl hover:text-purple-600 hover:text-4xl">
              <Link href="/contact">Contact</Link>
            </span>
          </div>
          {/* skeleton */}
          <div className="h-36 w-24 relative">
            <Image layout="fill" src={navbarSkeletonGif} alt="sekeleton" />
          </div>
        </div>
    </div>
  )
}