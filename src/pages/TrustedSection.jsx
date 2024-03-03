import Marquee from "react-fast-marquee";

const TrustedSection = () => {
    return (
        <div className="my-14 max-h-[284px] max-w-[1440px]">
            <h1 className="text-lg text-[#050038] text-center py-10">Trusted by 45M+ users</h1>
            <div className="grid">
              <Marquee className="text-danger" speed={100}>
                <div className="card ">
                  <figure>
                    <img className="w-[117px] h-[64px] py-2" src="https://i.ibb.co/gyBDzpJ/walmart.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card  ml-28">
                  <figure>
                    <img className="w-[150px] h-[64px] py-2" src="https://i.ibb.co/Wp9ZndC/cisco.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card  ml-28">
                  <figure>
                    <img className="w-[53px] h-[64px] py-2" src="https://i.ibb.co/5Kwv3Cf/volvo.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card  ml-28">
                  <figure>
                    <img className="w-[150px] h-[64px] py-2" src="https://i.ibb.co/tYK1f27/delo-svg.png" alt="Shoes" />
                  </figure>
                </div>
                <div className="card  mx-28">
                  <figure>
                    <img className="w-[73px] h-[64px] py-2" src="https://i.ibb.co/S0PPk6b/okta.png" alt="Shoes" />
                  </figure>
                </div>
              </Marquee>
            </div>

        </div>
    )
}

export default TrustedSection;