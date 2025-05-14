import Experience from "../Experiences";
import Projects from "../Projects";
import Thesis from "../Thesis";
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
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isCVHovered, setIsCVHovered] = useState(false);

  return (
    <>
      <section className="flex flex-wrap justify-between w-full h-full px-8 py-12 text-left lg:h-screen lg:py-24 lg:px-32">
        <div className="flex flex-col justify-between w-full h-full max-h-full mb-12 lg:w-1/2 lg:mb-0">
          <div className="flex flex-col gap-4 mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold uppercase lg:text-5xl text-accent">
              Jushua Steven Taduran
            </h1>
            <h2 className="font-medium text-md lg:text-xl">
              UI/UX Designer | Frontend Developer
            </h2>
            <p className="w-3/4 text-sm lg:w-1/2 lg:text-base">
              I build stunning Designs, and deliver satisfying output for you
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col w-3/4 gap-4 mb-8 text-sm lg:text-base">
              <p>
                I was once captivated by a website where I got trapped in a
                rabbit hole of coding and web development. Anyway, this website
                became my first work experience as a{" "}
                <span>Social Media Manager</span> at <span>GameFI</span>.
              </p>
              <p>
                Currently, I am studying <span>Computer Science</span> at{" "}
                <span>Tarlac State University</span>, where I am polishing my
                skills to become a fine Software Developer. Last year, I was
                hired as an <span>IT Intern</span> for the IT Team of{" "}
                <span>Eduksine</span> — a streaming platform fo r indie Filipino
                films. Thanks to them, I became more confident in my skills and
                got recognized. As a student, I mostly spend my time studying,
                but as a person, gaming is a must to relieve stress.
              </p>
              <p>
                I have had a promising life over these past few years, yet I am
                sure that it will be even more interesting in the future.
              </p>
            </div>

            <div className="flex gap-8">
              <div>
                <Link
                  to="resume"
                  className={`${style.link} rounded-md w-full text-sm lg:text-base`}
                  target="_blank"
                  onMouseEnter={() => setIsResumeHovered(true)}
                  onMouseLeave={() => setIsResumeHovered(false)}
                >
                  My Resume
                  <FontAwesomeIcon
                    icon={faFile}
                    className="ml-4"
                    style={{
                      color: isResumeHovered ? "#f4f4f5" : "#1e1e1e",
                    }}
                  />
                </Link>
              </div>
              <div>
                <Link
                  to="cv"
                  className={`${style.link} rounded-md w-full text-sm lg:text-base`}
                  target="_blank"
                  onMouseEnter={() => setIsCVHovered(true)}
                  onMouseLeave={() => setIsCVHovered(false)}
                >
                  My CV
                  <FontAwesomeIcon
                    icon={faFile}
                    className="ml-4"
                    style={{
                      color: isCVHovered ? "#f4f4f5" : "#1e1e1e",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8">
              <h2 className={`extra text-sm lg:text-base font-bold`}>
                GET IN TOUCH
              </h2>
              <div className="h-0.5 w-1/3 bg-text"></div>
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
          <Projects />
          <Thesis />
        </div>
      </section>
    </>
  );
};

export default Hero;
