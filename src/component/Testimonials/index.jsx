import React from "react";

const Testimonials = () => {
  const testimonyList = [
    {
      img: "https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg",
      alt: "",
      name: "Name Something",
      position: "position daw",
      testimony:
        "Outstanding software development expertise and dedication. Highly recommended!",
    },
    {
      img: "https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg",
      alt: "",
      name: "Name Something",
      position: "position daw",
      testimony:
        "Outstanding software development expertise and dedication. Highly recommended!",
    },
    {
      img: "https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg",
      alt: "",
      name: "Name Something",
      position: "position daw",
      testimony:
        "Outstanding software development expertise and dedication. Highly recommended!",
    },
  ];
  return (
    <>
      <section className=" h-full px-8 lg:px-24 py-12 w-full flex flex-col items-center gap-8">
        <div className="flex gap-8 flex-wrap lg:flex-nowrap">
          {testimonyList.map((t, index) => (
            <div
              className="px-12 py-8 bg-[#222222] text-white rounded-lg flex flex-col gap-4"
              key={index}
            >
              <p className="text-sm lg:text-base">{t.testimony}</p>
              <div className="flex gap-4">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src={t.img}
                  alt={t.alt}
                />
                <div>
                  <h3 className="text-md lg:text-base font-medium">{t.name}</h3>
                  <p className="text-sm lg:text-base">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
