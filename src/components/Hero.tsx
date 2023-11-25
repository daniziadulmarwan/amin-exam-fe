import CorakSvg from "/corak.svg";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#F9F7FF] h-[875px] relative overflow-hidden">
        <img src={CorakSvg} alt="Corak Svg" className="absolute right-0" />

        <div className="container mx-auto">
          <div className="w-[872px] flex flex-col mt-16">
            <div className="flex justify-center">
              <img src="/lamp.png" alt="Lamp Image" width={87} />
            </div>
            <h5 className="text-[90px] font-semibold font-lexend z-20">
              Start{" "}
              <span className="bg-gradient-to-r from-primary via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                learning
              </span>{" "}
              skill From your beloved teacher
            </h5>

            <p className="mt-8 text-[22px] text-second w-[721px]">
              Always remember and never forget to say Alhamdulillah for
              everything Allah has blessed us with.
            </p>

            <button className="mt-8 w-[202px] h-[60px] bg-primary rounded-lg font-semibold text-white">
              Explore Exams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
