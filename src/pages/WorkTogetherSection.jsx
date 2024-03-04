const WorkTogetherSection = () => {
  return (
    <div className="relative">
      <div className="my-20 px-2 max-w-[1140px] max-h-[535px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
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
          <div className="lg:h-[530px] grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col  place-content-center">
              <div>
                <img
                  className="rounded-lg lg:h-[335px] w-full "
                  src="https://i.ibb.co/sHwJBcg/working.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col  place-content-center lg:mb-16">
              <div>
                <img
                  className="rounded-lg lg:h-[335px] w-full "
                  src="https://i.ibb.co/VYjpktH/phone.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col  place-content-center">
              <div>
                <img
                  className="rounded-lg lg:h-[335px] w-full "
                  src="https://i.ibb.co/zPHMPkg/tab.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex absolute lg:bottom-[80px] md:bottom-[20px] bottom-[-7%] right-[43%] lg:right-[26%] md:right-[21%] rounded-full">
        <img
          className="w-[30px] rounded-full border-2 border-blue-500"
          src="https://i.ibb.co/D5ns9Yc/women.jpg"
          alt=""
        />
        <img
          className="w-[30px] rounded-full border-2 border-blue-500 ml-[-10px]"
          src="https://i.ibb.co/pjmnHdP/men.jpg"
          alt=""
        />
        <p className="border-2 border-blue-500 rounded-full font-bold text-sm flex items-center ml-[-5px]">
          +98
        </p>
      </div>
    </div>
  );
};

export default WorkTogetherSection;
