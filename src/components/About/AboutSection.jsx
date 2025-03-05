import { Fade } from "react-awesome-reveal"; // Importing Fade animation from React Reveal
import "animate.css"; // Import Animate.css for additional animations
import about from "../../assets/about.png";

const AboutSection = () => {
  return (
    <section className="about-section bg-gray-100 py-16">
      <div className="w-10/12 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-x-12 ">
          <Fade left duration={1000}>
            <div className="">
              <img
                src={about}
                alt="About Us"
                className="rounded-lg shadow-lg w animate__animated animate__fadeInLeft"
              />
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a company that specializes in providing the best visa
                solutions for individuals and businesses alike. Our goal is to
                make the visa application process as seamless and stress-free as
                possible. With years of experience in the industry, we have
                built strong relationships with various embassies, ensuring
                quick and reliable service for our clients.
              </p>
              <p className="text-lg text-gray-600">
                Join us on your journey to your next adventure or business
                expansion! We&apos;re here to help every step of the way.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
