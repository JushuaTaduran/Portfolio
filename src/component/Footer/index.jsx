import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import style from "./style.module.scss";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between w-full h-full py-8 px-12 lg:px-24 bg-[#121212] dark:bg-[#718096] text-[#fdfdfd] dark:text-[#fdfdfd] rounded-t-3xl ">
        <div className="flex justify-center items-center mb-4 gap-4">
          <img
            className="rounded-full h-32 w-32 border-4 p-2"
            src="https://media.licdn.com/dms/image/C5603AQHUegJz1Ka6GA/profile-displayphoto-shrink_800_800/0/1660819830526?e=1712793600&v=beta&t=DdkDVywwBLd9ilRfmSBKt9HPxHP8KboHKkXoBrSakJw"
            alt=""
          />
          <div>
            <h3 className="text-md lg:text-lg font-medium">JUSHUA TADURAN</h3>
            <p className="text-sm lg:text-base">
              UI/UX Designer | Web Developer
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-md lg:text-lg font-medium mb-2">Socials</h3>
          <div className="flex gap-4 lg:gap-8 flex-wrap text-2xl lg:text-3xl">
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
          <h3 className="mb-2 text-md lg:text-lg   font-medium">Contact Us</h3>
          <div>
            <p className="text-sm lg:text-base">Phone Number: +63912390823</p>
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
