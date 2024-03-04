const WorkTogetherSection = () => {
  return (
    <div>
      <div className="my-20 px-2 max-w-[1140px] lg:max-h-[535px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="flex flex-col place-content-center">
          <div>
            <h1 className="text-[#050038] font-bold text-5xl mb-5">
              Work together, wherever you work
            </h1>
            <p className="text-lg text-[#050038] opacity-60 max-w-[42ch]">
              Whether you want to edit your Google Docs, resolve Jira issues, 
              or collaborate over Zoom, Miro has 100+ integrations with tools 
              you already use and love.
            </p>
            <button className="mt-10 flex gap-2 items-center justify-center text-[#4262FF] text-lg underline">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <img className="max-h-[530px]" src="https://i.ibb.co/Jy6Mv8n/hybridwork-png.png" alt="" />
        </div>
      </div>

      
    </div>
  );
};

export default WorkTogetherSection;
