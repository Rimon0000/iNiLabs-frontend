const FeatureSection = () => {
  return (
    <div className="my-20 max-w-[1140px] mx-auto">
      <div className="text-center relative mt-[170px]">
        <h1 className="text-5xl text-[#050038] font-bold  text-center flex place-content-center">
          Collaborate without <br /> constraints
        </h1>
        <p className="absolute uppercase bg-[#FFD02F] transform rotate-[10deg] max-w-[172px] max-h-[23px]  text-sm top-[-35%] left-[61%]">
          Your idea starts here
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        <div className=" px-4 py-5">
          <h1 className="text-[#050038] text-2xl font-bold mb-3">
            Free forever
          </h1>
          <p className="text-lg text-[#050038] opacity-60">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our <br /> pricing plans for more
            features.
          </p>
        </div>
        <div className=" px-4 py-5">
          <h1 className="text-[#050038] text-2xl font-bold mb-3">
            Easy integrations
          </h1>
          <p className="text-lg text-[#050038] opacity-60">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our Marketplace .
          </p>
        </div>
        <div className="px-4 py-5">
          <h1 className="text-[#050038] text-2xl font-bold mb-3">
            Security first
          </h1>
          <p className="text-lg text-[#050038] opacity-60">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more our Trust Center .
          </p>
        </div>
      </div>
      <button className="mt-10 flex  mx-auto btn bg-[#4262FF] border rounded-3xl text-white">
          Sign up free
          <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  strokeWidth={1.5}  stroke="currentColor"  className="w-6 h-6">
            {" "}
            <path  strokeLinecap="round"  strokeLinejoin="round"  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
          </svg>
        </button>
    </div>
  );
};

export default FeatureSection;
