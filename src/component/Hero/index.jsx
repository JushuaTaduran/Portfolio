import Experience from "../Experiences";
import Projects from "../Projects";
import style from "./style.module.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="h-full lg:h-screen w-full text-left flex flex-wrap py-12 lg:py-24 justify-between px-8 lg:px-32">
        <div className="max-h-full w-full h-full lg:w-1/2 flex flex-col justify-between mb-12 lg:mb-0">
          <div className="flex flex-col gap-4 mb-4 lg:mb-0">
            <h1 className="font-bold text-2xl lg:text-5xl uppercase dark:text-[#fff]">
              Jushua Steven Taduran
            </h1>
            <h2 className="font-medium text-md lg:text-xl dark:text-[#fff]">
              UI/UX Designer | Frontend Developer
            </h2>
            <p className="w-3/4 lg:w-1/2 text-sm lg:text-base">
              I build stunning Designs, and deliver satisfying output for you
            </p>
          </div>

          <div className="w-3/4 flex flex-col gap-4 mb-8 text-sm lg:text-base">
            <p>
              I was once captivated by a website where I got trapped in a rabbit
              hole of coding and web development. Anyway, this website became my
              first work experience as a <span>Social Media Manager</span> at{" "}
              {""}
              <span>GameFI</span>.
            </p>
            <p>
              Currently, I am studying <span>Computer Science</span> at{" "}
              <span>Tarlac State University</span>, where I am polishing my
              skills to become a fine Software Developer. Last year, I was hired
              as an {""}
              <span>IT Intern</span> for the IT Team of <span>Eduksine</span> —
              a streaming platform fo r indie Filipino films. Thanks to them, I
              became more confident in my skills and got recognized. As a
              student, I mostly spend my time studying, but as a person, gaming
              is a must to relieve stress.
            </p>
            <p>
              I have had a promising life over these past few years, yet I am
              sure that it will be even more interesting in the future.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8">
              <h2 className="dark:text-[#fff] text-sm lg:text-base">
                Follow me
              </h2>
              <div className="h-0.5 w-1/3 bg-black dark:bg-white"></div>
            </div>

            <div className="flex gap-10 text-3xl">
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
        </div>
        <div
          className={`w-full h-full lg:w-1/2 overflow-y-auto scrollbar-thin scrollbar-webkit lg:px-24`}
        >
          <Experience />
          <div className="mb-8 ">
            <Link
              to="resume"
              className={`${style.link} rounded-md w-full text-sm lg:text-base`}
              target="_blank"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              View my Resume
              <FontAwesomeIcon
                icon={isHovered ? faFile : faFile}
                className={`ml-4 ${
                  isHovered
                    ? "dark:text-[#121212] text-[#fdfdfd]"
                    : "text-[#121212] dark:text-[#fdfdfd]"
                }`}
              />
            </Link>
          </div>
          <Projects />
        </div>
      </section>
    </>
  );
};

export default Hero;
