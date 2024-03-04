import Marquee from "react-fast-marquee";

const TrustedSection = () => {
    return (
        <div className="my-14 max-h-[284px] max-w-[1440px]">
            <h1 className="text-lg text-[#050038] text-center py-10">Trusted by 45M+ users</h1>
            <div className="grid border">
              <Marquee className="text-danger" speed={100}>
                <div className="card ">
                  <figure>
                    <img  src="https://i.ibb.co/4NxW9T2/Walmart-Index-Only-svg.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card ml-28">
                  <figure>
                    <img  src="https://i.ibb.co/HLc3p5t/cisco-svg.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card  ml-28">
                  <figure>
                    <img  src="https://i.ibb.co/2sFVV1f/Volvo-Index-Only-svg.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card  ml-28">
                  <figure>
                    <img  src="https://i.ibb.co/xsTGVTJ/deloitte-svg.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card  mx-28">
                  <figure>
                    <img  src="https://i.ibb.co/gV3KHhH/okta-svg.png" alt="Shoes" />
                  </figure>
                </div>
              </Marquee>
            </div>
        </div>
    )
}

export default TrustedSection;