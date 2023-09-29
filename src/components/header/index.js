import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <section class="relative mx-auto">
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-4 flex w-full items-center">
          <ul class="flex px-2 lg:px-4 mx-auto font-semibold font-heading space-x-4 lg:space-x-12 text-sm lg:text-md">
            <li> <Link href="/" className="flex items-center px-1 py-3">
              Home
            </Link></li>
            <li> <Link href="/about" className="flex items-center px-1 py-3">
              About
            </Link></li>
            <li>   <Link href="/work" className="flex items-center px-1 py-3">
              Work
            </Link></li>
            <li> <Link href="/contact" className="flex items-center px-1 py-3">
              Contact
            </Link></li>
          </ul>
        </div>
      </nav>

    </section>

  )
}

export default Header