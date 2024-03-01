
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <details>
          <summary>Product</summary>
        </details>
      </li>
      <li>
        <details>
          <summary>Solutions</summary>
        </details>
      </li>
      <li>
        <details>
          <summary>Resources</summary>
        </details>
      </li>
      <li>
        <a>Enterprise</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
    </>
  );

  return (
    <div className="max-w-[1380px] max-h-[90px] navbar flex justify-between">
      <div>
        <div className="flex items-center justify-center">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#050038] text-base"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-semibold text-[#050038]">
            miro
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#050038] text-base">
            {navOptions}
          </ul>
        </div>
      </div>

      <div className="">
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
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#050038] text-base"
          >
            <div className="flex gap-1">
              <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  strokeWidth={1.5}  stroke="currentColor"  className="w-6 h-6 text-[#050038]">
                <path  strokeLinecap="round"  strokeLinejoin="round"  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
              </svg>
              <a className="text-base">EN</a>
            </div>
            <div className="navbar-center">
              <ul className="menu  px-1 text-[#050038] text-base">
                <li>
                  <a>Contact Sales</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:flex hidden gap-1">
          <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  strokeWidth={1.5}  stroke="currentColor"  className="w-6 h-6 text-[#050038]">
            <path  strokeLinecap="round"  strokeLinejoin="round"  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
          </svg>
          <a className="text-base">EN</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#050038] text-base">
            <li>
              <a>Contact Sales</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <button className="btn bg-[#4262FF] border rounded-3xl text-white px-5 py-4">
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
