import { useState } from "react";

import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import Fig01 from "../../assets/img/Experiences/Fig01.png";
import Fig02 from "../../assets/img/Experiences/Fig02.png";
import Fig03 from "../../assets/img/Experiences/Fig03.jpg";

const Experience = () => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const experienceList = [
    {
      img: Fig01,
      alt: "Fig01",
      date: "July 2023 - Present",
      title: "Software Developer | Eduksine Studios",
      description:
        "I utilize React, TypeScript, Tailwind, Sass, and MySQL to innovate and enhance our Software, ensuring a seamless and immersive experience for our users.",
      items: [
        "React",
        "TypeScript",
        "Tailwind",
        "Sass",
        "MySQL",
        "GraphQL",
        "Git",
      ],
      link: "https://app.eduksine.com/browse",
    },
    {
      img: Fig02,
      alt: "Fig02",
      date: "July 2024 - August 2024",
      title: "Summer Web Developer Intern | Wireless Access for Health (WAH)",
      description:
        "As a summer intern at Wireless Access for Health, I spent two monthsdeveloping payroll and receipt functionalities for their website using Laravel, MySQL, and learning to utilize GitHub for version control.",
      items: ["Laravel", "PHP", "MySQL", "Git"],
      link: "https://wah.ph/",
    },
    {
      img: Fig03,
      alt: "Fig03",
      date: "May 2021 - Oct 2022",
      title: "Social Media Manager | GameFi.io",
      description:
        "I adeptly manage Discord, Telegram, and Facebook platforms, crafting engaging content and fostering vibrant communities to drive brand awareness and user engagement.",
      items: ["Discord", "Telegram", "Facebook"],
      link: "https://www.game-fi.io/",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8 mb-8 text-sm lg:text-base">
      <h1 className="font-bold">WORK EXPERIENCES</h1>
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
            <div className="flex flex-col w-full gap-4">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-md lg:text-lg ">
                  {experience.title}
                </h3>
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src={experience.img}
                  alt={experience.alt}
                />
              </div>
              <p>{experience.description}</p>
              <div className="flex flex-wrap gap-4">
                {experience.items.map((item, index) => (
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

export default Experience;
