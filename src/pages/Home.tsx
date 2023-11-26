import axios from "axios";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { ClassType } from "../types/class";
import { Link } from "react-router-dom";

function Home() {
  const [classes, setClasses] = useState([]);

  const fetchAllClass = () => {
    axios
      .get("https://exambro.alaminpuloerang.sch.id/api/class")
      .then((data) => {
        setClasses(data.data.datas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllClass();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <section className="mt-40 container mx-auto">
        <h5 className="text-third font-lexend text-4xl md:text-6xl font-bold text-center">
          Our Explore Exams
        </h5>
        <div className="flex justify-center mx-8">
          <p className="mt-8 text-md md:text-[22px] text-second text-center w-[684px]">
            Life may not be perfect, but I’m thankful for everything Allah
            blessed me with
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-3 md:mx-0">
            {classes.map((item: ClassType) => {
              return (
                <div className="card" key={item.id}>
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
                      {item.exams.length} soal
                    </p>
                    <Link
                      to={`/class/${item.id}`}
                      className="mt-8 py-3 px-10 bg-primary rounded-lg font-semibold text-white"
                    >
                      Pilih Kelas
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="pt-32 pb-10 text-center">
        <p className="text-sm text-second mx-20 md:mx-0">
          Copyright © Amin Exam 2023, Made with ❤️ by{" "}
          <a href="https://daniziadulmarwan.github.io">Dani Ziadul Marwan</a>
        </p>
      </footer>
    </main>
  );
}

export default Home;
