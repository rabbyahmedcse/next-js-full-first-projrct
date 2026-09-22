
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/books"
          className={pathname === "/books" ? "text-pink-400 font-bold" : ""}
        >
          Books
        </Link>
      </li>

      <li>
        <Link
          href="/listedBooks"
          className={
            pathname === "/listedBooks" ? "text-pink-400 font-bold" : ""
          }
        >
          Listed Books
        </Link>
      </li>

      <li>
        <Link
          href="/readBookChart"
          className={
            pathname === "/readBookChart" ? "text-pink-400 font-bold" : ""
          }
        >
          Read Books
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-3">

        {/* Left Side */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-48 p-3 shadow-lg"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl px-2 py-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg shadow-md transition-transform duration-300 group-hover:scale-110">
              📚
            </span>

            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-800">
              Book<span className="text-emerald-600">Store</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-1 sm:gap-2">

          <Link
            href="/signin"
            className="btn btn-success btn-xs sm:btn-sm lg:btn-md"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="btn btn-accent btn-xs sm:btn-sm lg:btn-md"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default NavbarPage;

