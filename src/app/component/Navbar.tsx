'use client'
import React from 'react';
import Image from 'next/image';
import logo from "@/assets/book.ico"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavbarPage = () => {
  const pathname = usePathname();

const links =<>
<li><Link className={pathname ==='/books'?'text-pink-400':''} href={'/books'}>Books</Link></li>
<li><Link className={pathname ==="/listedBooks"?"text-pink-400":''} href={'/listedBooks'}>Listed Books</Link></li>
<li><Link className={pathname ==="/readBookChart"?'text-pink-400':''} href={'/readBookChart'}>Read Books</Link></li>

</>

  return (
    <nav className='bg-base-100 shadow-sm '>
      <div className="navbar container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
           
          </div>
          <div className='flex gap-2 items-center'>
            {/* <Image src={logo} alt='ash'></Image> */}
            <Link
  href="/"
  className="group flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-300 hover:bg-emerald-50"
>
  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl shadow-md transition-transform duration-300 group-hover:scale-110">
    📚
  </span>

  <span className="text-xl font-extrabold tracking-tight text-slate-800">
    Book<span className="text-emerald-600">Store</span>
  </span>
</Link>

          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn btn-success">Sign In</button>
          <button className="btn btn-accent">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;