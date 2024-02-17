import { useState } from "react";

import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleRight } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const experienceList = [
    {
      img: "https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg",
      alt: "",
      date: "July 2023 - Present",
      title: "Software Developer | Eduksine",
      description:
        "I utilize React, TypeScript, Tailwind, Sass, and MySQL to innovate and enhance our Software, ensuring a seamless and immersive experience for our users.",
      items: ["React", "TypeScript", "Tailwind", "Sass", "MySQL"],
      link: "https://app.eduksine.com/browse",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png",
      alt: "",
      date: "May 2021 - Oct 2022",
      title: "Social Media Manager | GameFi.io",
      description:
        "I adeptly manage Discord, Telegram, and Facebook platforms, crafting engaging content and fostering vibrant communities to drive brand awareness and user engagement.",
      items: ["Discord", "Telegram", "Facebook"],
      link: "https://www.game-fi.io/",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8 mb-8 text-sm lg:text-base">
      {experienceList.map((experience, index) => (
        <div key={index}>
          <a
            className={`${style.box} w-full flex flex-wrap lg:flex-nowrap relative`}
            onMouseEnter={() => setHoveredItemIndex(index)}
            onMouseLeave={() => setHoveredItemIndex(null)}
            href={experience.link}
            target="_blank"
            rel="noreferrer"
          >
            <p className="w-full lg:w-1/2">{experience.date}</p>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex gap-4 items-center">
                <h3 className="font-medium text-md lg:text-lg ">
                  {experience.title}
                </h3>
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  src={experience.img}
                  alt={experience.alt}
                />
              </div>
              <p>{experience.description}</p>
              <div className="flex gap-4 flex-wrap">
                {experience.items.map((item, index) => (
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

export default Experience;
