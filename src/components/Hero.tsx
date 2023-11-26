import CorakSvg from "/corak.svg";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#F9F7FF] h-[675px] md:h-[875px] relative overflow-hidden">
        <img
          src={CorakSvg}
          alt="Corak Svg"
          className="absolute right-0 hidden md:block"
        />

        <div className="container mx-5 md:mx-auto">
          <div className="w-full md:w-[872px] flex flex-col mt-5 md:mt-16">
            <div className="flex justify-start md:justify-center">
              <img
                src="/lamp.png"
                alt="Lamp Image"
                className="w-20 md:w-[87px]"
                width={87}
              />
            </div>

            <h5
              className="text-5xl md:text-[90px] font-semibold font-lexend z-20 mt-3"
              style={{ lineHeight: 1.2 }}
            >
              Start{" "}
              <span className="bg-gradient-to-r from-primary via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                learning
              </span>{" "}
              skill From your beloved teacher
            </h5>

            <p className="mt-8 text-lg md:text-[22px] text-second w-[721px]">
              Always remember and never forget to say Alhamdulillah for
              everything Allah has blessed us with.
            </p>

            <button className="mt-8 w-[152px] md:w-[202px] h-[50px] md:h-[60px] bg-primary rounded-lg font-semibold text-white">
              Explore Exams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
