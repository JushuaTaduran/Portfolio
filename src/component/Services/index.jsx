import {
  faCode,
  faMobileScreen,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.scss";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  const servicesList1 = [
    {
      title: "UI/UX Designing.",
      description:
        "Dive into user-centric design with me as your guide. I craft interfaces and experiences that reflect your brand's soul and connect effortlessly with your audience's desires",
      icon: faFigma,
    },
    {
      title: "Graphic Designing.",
      description:
        "Unleash your brand's visual identity with my artistic flair. From logos to graphics, I'll infuse your personality into every pixel, making your brand unforgettable",
      icon: faSwatchbook,
    },
  ];
  const servicesList2 = [
    {
      title: "Web Development.",
      description:
        "Let's build your digital home together. From concept to code, I ensure your website not only looks stunning but also functions flawlessly, reflecting your vision at every click",
      icon: faCode,
    },
    {
      title: "Mobile App UI/UX.",
      description:
        "Step into the world of mobile innovation by my side. I'll design an app that feels like an extension of your brand, delighting users with every swipe and tap",
      icon: faMobileScreen,
    },
  ];
  return (
    <>
      <div className="w-full h-full px-8 lg:px-32 py-4 lg:py-12">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-24 w-full h-full mb-12">
          {servicesList1.map((service, index) => (
            <div
              key={index}
              className={`${style.item1} w-full rounded-lg flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap px-8  lg:px-24 py-8 lg:py-12 gap-8 lg:gap-24 justify-between`}
            >
              <div className="flex flex-col gap-12 lg:gap-0 justify-between ">
                <div className=" w-10/12">
                  <h3 className="text-md font-semibold lg:text-lg mb-2 w-fit px-1">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base">{service.description}</p>
                </div>
              </div>
              <div
                className={`${style.icon} text-6xl flex justify-center items-center`}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-24 w-full h-full">
          {servicesList2.map((service, index) => (
            <div
              key={index}
              className={`${style.item2} w-full rounded-lg flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap px-8  lg:px-24 py-8 lg:py-12 gap-8 lg:gap-24 justify-between`}
            >
              <div className="flex flex-col gap-12 lg:gap-0 justify-between">
                <div className=" w-10/12">
                  <h3 className="text-md font-semibold lg:text-lg mb-2 w-fit px-1">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base">{service.description}</p>
                </div>
              </div>
              <div
                className={`${style.icon} text-6xl flex justify-center items-center`}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
