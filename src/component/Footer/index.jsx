import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Fig01 from "../../assets/img/Profile/Fig01.jpg";

import style from "./style.module.scss";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between w-full h-full py-8 px-12 lg:px-24 bg-[#121212] dark:bg-[#718096] text-[#fdfdfd] dark:text-[#fdfdfd] rounded-t-3xl ">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-32 h-32 p-2 overflow-hidden border-4 border-gray-300 rounded-full">
            <img
              className="object-cover w-full h-full transition-all duration-300 rounded-full hover:scale-110"
              src={Fig01}
              alt=""
            />
          </div>
          <div>
            <h3 className="font-bold text-md lg:text-lg text-accent">
              JUSHUA TADURAN
            </h3>
            <p className="text-sm lg:text-base">
              UI/UX Designer | Web Developer
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-medium text-md lg:text-lg text-accent">
            Socials
          </h3>
          <div className="flex flex-wrap gap-4 text-2xl lg:gap-8 lg:text-3xl">
            <Link
              className={style.socials}
              to="https://github.com/JushuaTaduran"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              className={style.socials}
              to="https://www.linkedin.com/in/jushua-steven-taduran-665a6a211/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              className={style.socials}
              to="https://www.facebook.com/PitzieLink32/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className={style.socials}
              to="https://www.instagram.com/rinilaez/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-medium text-md lg:text-lg text-accent">
            Contact Us
          </h3>
          <div>
            <p className="text-sm lg:text-base">Phone Number: +633456117249</p>
            <p className="text-sm lg:text-base">
              Location: Tarlac City, Tarlac 2300 Philippines
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
