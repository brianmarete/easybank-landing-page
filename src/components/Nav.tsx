import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.svg";
import MenuIcon from "../assets/icon-hamburger.svg";
import CloseIcon from "../assets/icon-close.svg";
import { ImFacebook2, ImTwitter } from "react-icons/im";
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
        className={`bg-white absolute top-0 left-0 right-0 z-20 transition-all duration-300 ${
          isNavbarFixed
            ? "fixed top-0 left-0 right-0 animate-slideDown shadow-md"
            : ""
        }`}
      >
        <div
          className={`md:hidden flex justify-between p-8 transition-all duration-300 ${
            isNavbarFixed
              ? "fixed top-0 left-0 right-0 animate-slideDown shadow-md"
              : ""
          }`}
        >
          <div>
            <img src={Logo} alt="" />
          </div>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <img src={MenuIcon} alt="" />
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav
          className={`fixed flex flex-col md:hidden top-0 left-0 bottom-0 w-full h-screen bg-very-dark-blue/[.9] transform transition-transform duration-200 ease-in-out z-10 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between bg-transparent p-8">
            <div>
              <img src={Logo} alt="" className="fixed" />
            </div>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <img src={CloseIcon} alt="" className="fixed right-8" />
            </button>
          </div>
          <ul className="font-normal text-white uppercase px-8 mt-8">
            <li className="text-center text-xl tracking-widest py-4 border-y border-grayish-blue">
              <a href="#">features</a>
            </li>
            <li className="text-center text-xl tracking-widest py-4 border-b border-grayish-blue">
              <a href="#">pricing</a>
            </li>
            <li className="text-center text-xl tracking-widest py-4 border-b border-grayish-blue">
              <a href="#">contact</a>
            </li>
            <li>
              <button className="bg-transparent border-white border-2 text-white w-full mt-4 px-8 py-3 uppercase tracking-widest text-xl rounded ">
                Login
              </button>
            </li>
          </ul>
          <div className="mt-auto mb-8 mx-auto w-fit">
            <ImFacebook2 className="mr-8 text-2xl text-white inline" />
            <ImTwitter className="text-2xl text-white inline" />
          </div>
        </nav>

        {/* DESKTOP MENU */}
        <nav className="max-w-6xl mx-auto z-20 hidden md:flex md:justify-between md:items-center">
          <div className="flex justify-between py-8  w-full md:max-w-fit">
            <img src={Logo} alt="" className="mr-8 text-2xl" />
          </div>
          <ul className="leading-none space-x-12 capitalize text-sm text-grayish-blue">
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
