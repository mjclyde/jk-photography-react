import React from "react";
import Brand from "./assets/brand.svg";
import Facebook from "./assets/facebook-icon.png";
import Instagram from "./assets/instagram-icon.png";

function Link({ children, className }) {
  return (
    <div
      className={`mx-3 px-3 py-1 text-gray-600 font-light hover:text-stone-600 hover:rounded hover:bg-white text-lg md:text-base cursor-pointer md:mx-0 lg:mx-3 ${className}`}
    >
      {children}
    </div>
  );
}

function MenuButton({ open, onClick, className }) {
  return (
    <svg
      onClick={onClick}
      className={`fill-gray-600 mx-5 scale-150 cursor-pointer ${className}`}
      width="18px"
      height="14px"
      viewBox="0 0 18 14"
    >
      {open ? (
        <g transform="translate(-3, -5.000000)">
          <path d="M7.05025253,5.63603897 L11.9991458,10.5851458 L16.9497475,5.63603897 C17.3402718,5.24551468 17.9734367,5.24551468 18.363961,5.63603897 C18.7544853,6.02656326 18.7544853,6.65972824 18.363961,7.05025253 L13.4141458,11.9991458 L18.363961,16.9497475 C18.7544853,17.3402718 18.7544853,17.9734367 18.363961,18.363961 C17.9734367,18.7544853 17.3402718,18.7544853 16.9497475,18.363961 L11.9991458,13.4141458 L7.05025253,18.363961 C6.65972824,18.7544853 6.02656326,18.7544853 5.63603897,18.363961 C5.24551468,17.9734367 5.24551468,17.3402718 5.63603897,16.9497475 L10.5851458,11.9991458 L5.63603897,7.05025253 C5.24551468,6.65972824 5.24551468,6.02656326 5.63603897,5.63603897 C6.02656326,5.24551468 6.65972824,5.24551468 7.05025253,5.63603897 Z"></path>
        </g>
      ) : (
        <g transform="translate(-3, -5.000000)">
          <path d="M20,17 C20.5522847,17 21,17.4477153 21,18 C21,18.5522847 20.5522847,19 20,19 L4,19 C3.44771525,19 3,18.5522847 3,18 C3,17.4477153 3.44771525,17 4,17 L20,17 Z M20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5522847 20.5522847,13 20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4477153 3.44771525,11 4,11 L20,11 Z M20,5 C20.5522847,5 21,5.44771525 21,6 C21,6.55228475 20.5522847,7 20,7 L4,7 C3.44771525,7 3,6.55228475 3,6 C3,5.44771525 3.44771525,5 4,5 L20,5 Z"></path>
        </g>
      )}
    </svg>
  );
}

function Header({ maxWidth = "5xl" }) {
  const isAtTop = () => window.scrollY < 100;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [atTop, setAtTop] = React.useState(isAtTop);

  React.useEffect(() => {
    window.addEventListener("scroll", () => setAtTop(isAtTop()));
  }, []);

  const menuClicked = () => setMenuOpen(!menuOpen);

  // const mainContainerClass = `backdrop-blur-md bg-white/80 fixed inset-0 transition-height duration-300 ease-in-out ${
  //   atTop ? "h-20 md:h-28" : "h-14 md:h-16"
  // }`;

  console.log('At Top', atTop);

  return (
    <div
      className={`backdrop-blur-md bg-white/80 fixed top-0 left-0 right-0`}
    >
      <div className={`mx-auto w-full max-w-${maxWidth} md:flex md:items-center md:justify-between`}>
        <div className="flex items-center justify-between">
          <img
            className={`m-4 w-72 transition-all duration-300 ease-in-out ${atTop ? 'translate-x-0 h-12 md:h-20' : 'h-8 -translate-x-12 md:h-12 md:-translate-x-0'}`}
            src={Brand}
            alt="Jamie Kay Photography"
          />
          <MenuButton
            className="md:hidden"
            open={menuOpen}
            onClick={menuClicked}
          />
        </div>
        <div
          className={` ${
            menuOpen ? "block" : "hidden"
          } pb-4 md:flex md:items-center md:pb-0 md:px-2`}
        >
          <Link>About</Link>
          <Link>Pricing</Link>
          <Link>Testimonials</Link>
          <Link>Contact</Link>
          <Link className="flex items-center px-1">
            <img className="hover:bg-stone-100 w-8 p-1 rounded mr-1" src={Facebook} alt="Facebook" />
            <img className="hover:bg-stone-100 w-8 p-1 rounded" src={Instagram} alt="Facebook" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
