import { useState } from "react";

import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleRight } from "@fortawesome/free-solid-svg-icons";

import Fig01 from "../../assets/img/project/Fig01.png";
import Fig02 from "../../assets/img/project/Fig02.png";

const Projects = () => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const projectList = [
    {
      img: Fig01,
      alt: "figure01",
      date: "Oct 2023 - Published",
      title: "Kingdoms | Fan-based Website",
      items: ["HTML", "CSS", "JS", "Git"],
      link: "https://jushuataduran.github.io/Kingdom/",
    },
    {
      img: Fig02,
      alt: "figure02",
      date: "Apr 2023 - Published",
      title: "First Project",
      items: ["HTML", "CSS", "Git"],
      link: "https://jushuataduran.github.io/chika-fujiwara/",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8 mb-8  text-sm lg:text-base">
      {projectList.map((project, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredItemIndex(index)}
          onMouseLeave={() => setHoveredItemIndex(null)}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`${style.box} flex gap-12 flex-wrap lg:flex-nowrap items-center relative`}
          >
            <img
              src={project.img}
              alt={project.alt}
              className="w-1/4 h-1/4 rounded-lg"
            />
            <div className="flex flex-col gap-2 w-full">
              <p>{project.date}</p>
              <h3 className="font-medium text-md lg:text-lg">
                {project.title}
              </h3>
              <div className="flex gap-4 flex-wrap">
                {project.items.map((item, index) => (
                  <div key={index} className={`${style.item}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center absolute top-0 right-0">
              {hoveredItemIndex === index && (
                <div className="text-2xl -rotate-45 text-[#718096] dark:text-[#B6FC63]">
                  <FontAwesomeIcon icon={faCircleRight} />
                </div>
              )}
              {hoveredItemIndex !== index && (
                <div className="text-lg text-[#718096] dark:text-[#B6FC63]">
                  <FontAwesomeIcon icon={faCircle} />
                </div>
              )}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
