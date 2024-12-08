import { useLoaderData } from "react-router-dom";
import LatestVisa from "../../components/LatestVisa/LatestVisa";
import Banner from "../../components/Banner/Banner";
import MarqueeSlider from "../../components/Marquee/MarqueeSlider";
import Review from "../../components/Review/Review";
import AboutSection from "../../components/About/AboutSection";
import QustionSec from "../../components/Qustion/QustionSec";

const Home = () => {
  const visas = useLoaderData();

  return (
    <main className="dark:bg-neutral-200 bg-neutral-800">
      <section>
        <Banner />
      </section>
      <section className="py-20 ">
        <MarqueeSlider />
      </section>
      <section>
        <LatestVisa visas={visas} />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <AboutSection />
      </section>
      <section className="py-20">
        <QustionSec />
      </section>
    </main>
  );
};

export default Home;
