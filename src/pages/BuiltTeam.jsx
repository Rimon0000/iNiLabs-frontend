const BuiltTeam = () => {
  const navOptions = (
    <>
      <li className="border rounded-full border-[#F2F2F2] bg-[#F1F3FD]">
        <a>UX & Design</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Marketing</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Product Management</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Engineering</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Consultants</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Agile Coaches</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Sales</a>
      </li>
    </>
  );

  return (
    <div className="my-20 max-w-[1120px] mx-auto px-[30px]">
      <h1 className="text-[#050038] text-5xl font-bold">
        Built for all kinds of teams
      </h1>

      <div className="my-5 max-w-[1060px]">
        <div className="lg:flex items-center justify-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#050038] text-sm"
            >
              {navOptions}
            </ul>
          </div>
        </div>
        <ul className="menu menu-horizontal text-sm hidden lg:flex justify-between text-[#050038]">
          {navOptions}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="p-4 col-span-1 md:col-span-1 lg:col-span-1">
          <div>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[24px] h-[25px] text-[#050038]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <p className="text-lg text-[#050038] opacity-60">
                Build low-fi wireframes
              </p>
            </div>
            <div className="flex gap-3 items-center my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[24px] h-[25px] text-[#050038]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <p className="text-lg text-[#050038] opacity-60">
                Involve stakeholders in the design process
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[24px] h-[25px] text-[#050038]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <p className="text-lg text-[#050038] opacity-60">
                Run engaging design workshops
              </p>
            </div>
          </div>
          <button className="my-8 pb-4 flex gap-2 items-center justify-center text-[#4262FF] text-lg">
            Learn more
            <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  strokeWidth={1.5}  stroke="currentColor"  className="w-6 h-6">  {" "}  <path    strokeLinecap="round"    strokeLinejoin="round"    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"  /></svg>
          </button>
          <div>
            <h1 className="text-[#050038] opacity-60 text-lg">
              Integrate your favorite tools
            </h1>
            <div className="flex gap-9 mt-5">
              <img src="https://i.ibb.co/hdvmmkY/Vector.png" alt="" />
              <img className="w-[26px] h-[26px]" src="https://i.ibb.co/GxLPmcZ/adobe-xd-icon-256x256-ounqix35.png" alt="" />
              <img src="https://i.ibb.co/55WGsyw/Vector-2.png" alt="" />
              <img src="https://i.ibb.co/LzzbgKq/Vector-3.png" alt="" />
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <img
            src="https://i.ibb.co/88rKWc2/uxdesignwithoutshadow-jpg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BuiltTeam;
