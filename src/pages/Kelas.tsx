import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";
import { ExamType } from "../types/exam";
import ReactLoading from "react-loading";

moment.locale("id");

function Kelas() {
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const { id } = params;

  const fetchDataExams = () => {
    setIsLoading(true);
    axios
      .get(`https://exambro.alaminpuloerang.sch.id/api/exams/${id}`)
      .then((data) => {
        setExams(data.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setExams([]);
      });
  };

  useEffect(() => {
    fetchDataExams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <main>
      <Navbar />

      <div className="container mx-auto mt-32 mb-20">
        {/* START: Card */}
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ReactLoading
              type="spokes"
              color="#29A354"
              height={200}
              width={200}
            />
          </div>
        ) : exams.length > 0 ? (
          <div className="grid grid-cols-2 gap-5">
            {exams.map((ex: ExamType) => {
              return (
                <div
                  className="bg-white shadow-xl rounded-3xl border-t border-slate-50 p-3 flex gap-5"
                  key={ex.id}
                >
                  <div className="bg-slate-300 rounded-3xl w-2/3 h-80 grid place-items-center">
                    <img src="/hasan.png" alt="Hasan Book" />
                  </div>

                  <div className="pt-3 flex flex-col justify-between w-full">
                    <div className="space-y-2">
                      <h5 className="text-4xl font-lexend text-third font-semibold">
                        {ex.mapel}
                      </h5>
                      <div>
                        <p className="text-lg text-second">
                          {moment(ex.start_time).format("LL")}
                        </p>
                        <p className="text-lg text-second">
                          {moment(ex.start_time).format("LT")} -{" "}
                          {moment(ex.end_time).format("LT")}
                        </p>
                      </div>
                    </div>

                    {ex.status === "active" ? (
                      <a
                        href={ex.url}
                        className="py-3 px-10 bg-primary rounded-lg font-medium text-white text-center"
                      >
                        Active
                      </a>
                    ) : (
                      <button
                        disabled
                        className="block py-3 px-10 bg-[#CDCDCD] rounded-lg font-medium text-white text-center"
                      >
                        Non Active
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center mt-52 w-full text-4xl font-semibold text-third underline">
            <p>Data empty</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Kelas;
