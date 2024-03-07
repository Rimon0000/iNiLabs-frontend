const BuiltWork = () => {
  const navOptions = (
    <>
      <li className="border rounded-full border-[#F2F2F2] bg-[#F1F3FD]">
        <a>Brainstorming</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Diagramming</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Meetings & Workshops</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Scrum Events</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Mapping</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Research & Design</a>
      </li>
      <li className="border rounded-full border-[#F2F2F2]">
        <a>Strategic Planning</a>
      </li>
    </>
  );

  return (
    <div className="my-20 max-w-[1120px] mx-auto p-7">
      <h1 className="text-[#050038] text-5xl font-bold">
        Built for the way you work
      </h1>

      <div className="my-5 max-w-[1060px] mx-auto">
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

      <div className="max-w-[1060px] mx-auto lg:flex md:flex justify-between">
        <div className="p-2 w-[360px]">
          <h1 className="text-[#050038] text-lg mt-5">Brainstorming</h1>
          <p className="text-[#050038] opacity-70 text-lg my-10">Unleash creative ideas and build on them with the help of sticky notes, 
            images, mind maps, videos, drawing capabilities — the list goes on. 
          </p>
          <button className="flex items-center justify-center text-[#4262FF] text-lg">
            Learn more →
          </button>
        </div>
        <div className="max-w-[700px]">
          <img src="https://i.ibb.co/5GLRscd/Brainstormwithoutshadow-jpg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BuiltWork;
