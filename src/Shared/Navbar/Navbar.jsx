import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import { useTheme } from "../../Providers/ThemeProviders";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/visa">Visa</Link>
      </li>
      <li>
        <Link to="/myVisa">My visa</Link>
      </li>
      <li>
        <Link to="/addVisa">Add Visa</Link>
      </li>
      <li>
        <Link to="/applied">Applied Visa</Link>
      </li>
    </>
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="dark:bg-black bg-white">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:text-white "
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl dark:text-white">Dream Visa</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 dark:text-white">{nav}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <input
              type="checkbox"
              onClick={toggleTheme}
              value="synthwave"
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)] mr-5"
            />
          </div>
          {user ? (
            <button className="btn btn-outline btn-error" onClick={logOut}>
              SignOut
            </button>
          ) : (
            <>
              <Link to="/signIn" className="btn btn-outline btn-success">
                Log
              </Link>
              <Link to="/signUp" className="btn btn-outline btn-warning">
                Regis
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
