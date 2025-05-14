import Fig01 from "../../assets/img/Contact/Fig01.png";

const Contact = () => {
  return (
    <>
      <div className="px-8 py-4 mb-8 lg:py-24 lg:px-32">
        <div className="rounded-lg border-4 shadow-dark dark:shadow-light border-[#121212] dark:border-[#fdfdfd] px-12 py-8 flex flex-col-reverse lg:flex-row items-center gap-4">
          <div className="flex flex-col gap-4 lg:pl-24 text-[#121212] dark:text-[#fdfdfd]">
            <h2 className="text-lg font-bold lg:text-xl">
              Let's makes things happen
            </h2>
            <p className="w-full text-sm lg:w-3/4 lg:text-base">
              Any questions, comment, or have you got interested with my
              projects? Contact me and let&apos;s have a coffee!
            </p>
            <a
              className="px-8 py-2 font-medium transition-all ease-in-out border-2 rounded-lg border-primary hover:bg-background hover:text-text text-background bg-primary hover:translate-x-5 w-fit"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=taduranjushua2@gmail.com&su=Chat%20about%20a%20Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
