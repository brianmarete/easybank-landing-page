import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.svg";
import MenuIcon from "../assets/icon-hamburger.svg";
import CloseIcon from "../assets/icon-close.svg";
import InviteButton from "./Invite-Button";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const observerRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navbarHeight = navbar?.offsetHeight || 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarFixed(!entry.isIntersecting);
      },
      {
        threshold: 1,
        rootMargin: `${navbarHeight}px 0px 0px 0px`,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className={`bg-white fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
          isNavbarFixed ? "animate-slideDown shadow-md" : ""
        }`}
      >
        <div className="md:hidden flex justify-between p-8">
          <img src={Logo} alt="" />
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <img src={CloseIcon} alt="" />
            ) : (
              <img src={MenuIcon} alt="" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav
          className={`fixed flex flex-col md:hidden top-16 w-full transform transition-transform duration-200 ease-in-out z-20 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-96"
          }`}
        >
          <ul className="font-normal capitalize px-8 m-8 bg-very-light-gray shadow-xl rounded-md z-10">
            <li className="text-center text-lg py-2">
              <a href="#">home</a>
            </li>
            <li className="text-center text-lg py-2">
              <a href="#">about</a>
            </li>
            <li className="text-center text-lg py-2">
              <a href="#">contact</a>
            </li>
            <li className="text-center text-lg py-2">
              <a href="#">blog</a>
            </li>
            <li className="text-center text-lg py-2">
              <a href="#">careers</a>
            </li>
          </ul>
        </nav>

        {/* DESKTOP MENU */}
        <nav className="max-w-6xl mx-auto px-4 z-20 hidden md:flex md:justify-between md:items-center">
          <div className="py-8">
            <img src={Logo} alt="" className="mr-8 text-2xl" />
          </div>
          <ul className="flex justify-around w-96 leading-none capitalize text-sm text-grayish-blue">
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                Home
              </a>
            </li>
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                About
              </a>
            </li>
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                Contact
              </a>
            </li>
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                Blog
              </a>
            </li>
            <li className="inline">
              <a href="#" className="hover:text-soft-red">
                Careers
              </a>
            </li>
          </ul>
          <InviteButton />
        </nav>
      </header>
      {/* Observer target - positioned just below the navbar */}
      <div ref={observerRef} className="h-1" />

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isNavbarFixed && (
        <div style={{ height: navbarRef.current?.offsetHeight }} />
      )}
    </>
  );
};

export default Nav;
