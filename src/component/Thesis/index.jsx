import { useState } from "react";

import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleRight } from "@fortawesome/free-solid-svg-icons";

import Fig01 from "../../assets/img/Thesis/Fig01.png";

const Thesis = () => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const projectList = [
    {
      img: Fig01,
      alt: "figure01",
      date: "April 2025",
      title:
        "Infinite Descent: A 2D Game With Enhanced Procedural Dungeon Map Generation Through Wave Function Collapse (WFC) And Assets Generation Using Generative Adversarial Networks (GANs)",
      items: ["C#", "Python", "Pytorch", "Google Colab", "Unity", "Git"],
      link: "https://github.com/JushuaTaduran/Infinite-Descent",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8 mb-8 text-sm lg:text-base">
      <h1 className="font-bold">THESIS</h1>
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

export default Thesis;
