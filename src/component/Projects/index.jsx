import { useState } from "react";

import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleRight } from "@fortawesome/free-solid-svg-icons";

import Fig01 from "../../assets/img/project/Fig01.png";
import Fig02 from "../../assets/img/project/Fig02.png";
import Fig03 from "../../assets/img/project/Fig03.png";
import Fig04 from "../../assets/img/project/Fig04.png";

const Projects = () => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const projectList = [
    {
      img: Fig04,
      alt: "figure04",
      date: "2024",
      title: "Parser - Recursive Decent Parser",
      items: ["HTML", "CSS", "JS", "Git"],
      link: "https://github.com/JushuaTaduran/Parser",
    },
    {
      img: Fig03,
      alt: "figure03",
      date: "2023",
      title: "Auto Spotter - Parking Management Web App",
      items: ["HTML", "CSS", "JS", "Git"],
      link: "https://github.com/JushuaTaduran/AutoSpotter",
    },
    {
      img: Fig01,
      alt: "figure01",
      date: "2023",
      title: "Kingdoms | Fan-based Website",
      items: ["HTML", "CSS", "JS", "Git"],
      link: "https://jushuataduran.github.io/Kingdom/",
    },
    {
      img: Fig02,
      alt: "figure02",
      date: "2023",
      title: "Anime-Based Website",
      items: ["HTML", "CSS", "Git"],
      link: "https://jushuataduran.github.io/chika-fujiwara/",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8 mb-8 text-sm lg:text-base">
      <h1 className="font-bold">PROJECTS</h1>
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
              className="w-1/4 rounded-lg h-1/4"
            />
            <div className="flex flex-col w-full gap-4">
              <p>{project.date}</p>
              <h3 className="font-medium text-md lg:text-lg">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.items.map((item, index) => (
                  <div key={index} className={`${style.item}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center w-10 h-10">
              {hoveredItemIndex === index && (
                <div className="text-2xl -rotate-45 text-accent">
                  <FontAwesomeIcon icon={faCircleRight} />
                </div>
              )}
              {hoveredItemIndex !== index && (
                <div className="text-lg text-accent">
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
