import Fig01 from "../../assets/img/Contact/Fig01.png";

const Contact = () => {
  return (
    <>
      <div className="py-4 lg:py-24 px-8 lg:px-32 mb-8">
        <div className="rounded-lg border-4 shadow-dark dark:shadow-light border-[#121212] dark:border-[#fdfdfd] px-12 py-8 flex flex-col-reverse lg:flex-row items-center gap-4">
          <div className="flex flex-col gap-4 lg:pl-24 text-[#121212] dark:text-[#fdfdfd]">
            <h2 className="text-lg lg:text-xl font-bold">
              Let's makes things happen
            </h2>
            <p className="w-full lg:w-3/4 text-sm lg:text-base">
              Any questions, comment, or have you got interested with my
              projects? Contact me and let's have a coffee!
            </p>
            <a
              className="text-[#121212] bg-[#b6fc63] dark:text-[#fdfdfd] dark:bg-[#718096] font-medium hover:translate-x-5 transition-all ease-in-out rounded-lg px-8 py-2 w-fit"
              href=""
            >
              Chat me
            </a>
          </div>
          <div className="flex justify-center lg:justify-end w-full lg:pr-32">
            <img
              src={Fig01}
              alt="Figure01"
              className="lg:w-fit h-1/4 lg:h-52 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
