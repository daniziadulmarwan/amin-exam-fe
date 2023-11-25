import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto pt-3 pb-5">
      <div className="flex items-center justify-between">
        <NavLink to="/" id="brand" className="flex gap-3 items-center">
          <img
            src="/aexam.png"
            alt="Logo Learn"
            width={45}
            height={45}
            className="rounded"
          />
          <h5 className="text-third font-semibold text-2xl font-lexend">
            AEXAM
          </h5>
        </NavLink>

        <div className="flex flex-1 ml-96 justify-between">
          <ul className="flex items-center gap-11">
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
            <button className="py-3 px-12 border border-primary rounded-lg hover:bg-primary hover:text-white transition-all ease-in-out duration-100">
              Log in
            </button>
            <button className="py-3 px-12 border border-primary rounded-lg hover:bg-primary hover:text-white transition-all ease-in-out duration-100">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
