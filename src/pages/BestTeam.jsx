const BestTeam = () => {
  return (
    <div className="my-20 max-w-[1120px] mx-auto">
      <h1 className="text-[#050038] text-5xl font-bold text-center">
        Loved by the world's best teams
      </h1>
      <button className="my-8 px-8 py-2 flex mx-auto text-[#4262FF] text-lg border border-[#4262FF] text-center rounded-full">
        See all customer stories →
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className=" p-5 h-[460px]">
          <img className="text-[#050038] mt-1" src="https://i.ibb.co/Ldc97kD/vmware-svg.png" alt=""/>
          <p className="my-8 text-[#050038] opacity-60 text-lg">
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          <div className="flex gap-4 items-center mb-1 mt-[60px]">
            <div>
              <img src="https://i.ibb.co/bzJ40yG/Mask-group-1-png.png" alt="" />
            </div>
            <div className="text-[#050038] opacity-60 text-sm">
              <h4>Roxanne Mustafa</h4>
              <p>Design Team Lead at VMware</p>
            </div>
          </div>
        </div>
        <div className=" p-5 h-[460px]">
          <img className="text-[#050038] mt-1" src="https://i.ibb.co/DVh7FK3/Vector-7.png" alt=""/>
          <p className="my-8 text-[#050038] opacity-60 text-lg">
            “Miro helps solve one of the major gaps in product design: how to manage
            tasks across product designers whose projects are in different tools.”
          </p>
          <div className="flex gap-4 items-center mb-1 mt-[135px]">
            <div>
              <img src="https://i.ibb.co/XZ3RZx7/Jane-Docusign-Testimonials-2x-png.png" alt="" />
            </div>
            <div className="text-[#050038] opacity-60 text-sm">
              <h4>Jane Ashley</h4>
              <p>Head of Design at DocuSign</p>
            </div>
          </div>
        </div>
        <div className=" p-5 h-[460px]">
          <img className="text-[#050038] mt-1" src="https://i.ibb.co/zbfqtHh/Vector-6.png" alt=""/>
          <p className="my-8 text-[#050038] opacity-60 text-lg max-w-[27ch]">
            “As we used Miro we moved from skepticism to belief to innovation, 
            and now we have a tool that’s at the core of what we do and will continue
            to extend into the future.”
          </p>
          <div className="flex gap-4 items-center mb-1 mt-[120px]">
            <div>
              <img src="https://i.ibb.co/G5sytPk/Mask-group-png.png" alt="" />
            </div>
            <div className="text-[#050038] opacity-60 text-sm">
              <h4>Laura Baird</h4>
              <p className="mt-2">Associate Design Director at frog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTeam;
