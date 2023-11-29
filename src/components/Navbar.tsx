import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="md:container mx-5 xl:mx-auto pt-3 pb-5">
      <div className="flex items-center md:justify-between">
        <NavLink to="/" id="brand" className="flex gap-3 items-center">
          <img
            src="/aexam.png"
            alt="Logo Learn"
            width={45}
            height={45}
            className="rounded w-9 h-9 xl:w-11 xl:h-11"
          />
          <h5 className="text-third font-semibold text-2xl font-lexend">
            AEXAM
          </h5>
        </NavLink>

        <button className="md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>

        <div className="hidden xl:flex flex-1 sm:ml-10 md:ml-52 xl:ml-52 2xl:ml-96  justify-between">
          <ul className="flex items-center md:gap-5 lg:gap-11">
            <li className="nav-link">
              <NavLink to="/" className="text-second text-base">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <a href="#" className="text-second text-base">
                Exams
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="text-second text-base">
                Monitors
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="text-second text-base">
                Testimonials
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="text-second text-base">
                Blogs
              </a>
            </li>
          </ul>

          <div className="flex gap-2">
            <Link
              to="/signin"
              className="py-1 lg:py-3 px-3 lg:px-12 border border-primary rounded-lg hover:bg-primary hover:text-white transition-all ease-in-out duration-100"
            >
              Log in
            </Link>
            <button className="py-1 lg:py-3 px-3 lg:px-12 border border-primary rounded-lg hover:bg-primary hover:text-white transition-all ease-in-out duration-100">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
