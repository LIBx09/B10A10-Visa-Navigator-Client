import { useEffect } from "react";
import { Fade } from "react-awesome-reveal"; // For React Reveal
import AOS from "aos"; // For AOS scroll animations
import "aos/dist/aos.css"; // Import AOS styles
import qusImg from "../../assets/qusetionsection.png"; // Your image

const QustionSec = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl w-10/12 mx-auto ">
          <div className="card-body">
            {/* Accordion Sections */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How can i apply for the Student visa?
                </div>
                <div className="collapse-content">
                  <p>You should go for PH team</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  How long does it teke for a Tourist Visa to Process?
                </div>
                <div className="collapse-content">
                  <p>You should go for PH team</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  What is the fee structure for visa submission?
                </div>
                <div className="collapse-content">
                  <p>You should go for PH team</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  What payment options do you offer?
                </div>
                <div className="collapse-content">
                  <p>You should go for PH team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <Fade right duration={1000}>
            <figure>
              <img src={qusImg} alt="Album" className="h-[400px] px-20" />
            </figure>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default QustionSec;
