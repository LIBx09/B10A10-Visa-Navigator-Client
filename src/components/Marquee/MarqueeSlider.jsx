import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <div className="flex items-center w-11/12 mx-auto">
      <div className="bg-[#080F28] rounded-lg">
        <div className="flex items-center justify-start h-full">
          <h2 className="text-white font-bold text-3xl p-4">
            Dream Visa Trusted By Big Companies
          </h2>
        </div>
      </div>
      <div className="bg-neutral-200 h-[50px] bottom-0">
        <Marquee speed={50} gradient={false} pauseOnHover={false}>
          <div className="flex">
            <Fade cascade duration={2000}>
              <h2 className="text-3xl font-bold mx-20">Programing Hero</h2>
              <h2 className="text-3xl font-bold mx-20">Vercel</h2>
              <h2 className="text-3xl font-bold mx-20">MongoDB</h2>
              <h2 className="text-3xl font-bold mx-20">React</h2>
              <h2 className="text-3xl font-bold mx-20">Dream Visa</h2>
              <h2 className="text-3xl font-bold mx-20">Programing Hero</h2>
              <h2 className="text-3xl font-bold mx-20">Vercel</h2>
              <h2 className="text-3xl font-bold mx-20">MongoDB</h2>
              <h2 className="text-3xl font-bold mx-20">React</h2>
              <h2 className="text-3xl font-bold mx-20">Dream Visa</h2>
            </Fade>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSlider;
