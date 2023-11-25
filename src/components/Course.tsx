/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassType } from "../types/class";

const Course = (props: any) => {
  console.log(props);
  return (
    <section className="mt-40 container mx-auto">
      <h5 className="text-third font-lexend text-6xl font-bold text-center">
        Our Explore Exams
      </h5>
      <div className="flex justify-center">
        <p className="mt-8 text-[22px] text-second text-center w-[684px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-3 gap-8">
          {props?.datas.map((item: ClassType) => {
            return (
              <div className="card">
                <div className="bg-slate-100 m-3 rounded-2xl">
                  <img
                    src="/fayha.png"
                    alt="Fayha Book"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h5 className="text-2xl font-lexend text-third">
                    {item.title}
                  </h5>
                  <p className="text-base text-second text-center">
                    {item.exams} soal
                  </p>
                  <a
                    href=""
                    className="mt-8 py-3 px-10 bg-primary rounded-lg font-semibold text-white"
                  >
                    Pilih Kelas
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Course;
