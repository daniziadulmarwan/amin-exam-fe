import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="bg-white w-screen h-screen grid grid-cols-2 overflow-x-hidden">
      <div className="flex justify-center items-center">
        <img src="/vector.svg" alt="" className="absolute left-0 bottom-16" />

        <div className="flex justify-center w-[450px]">
          <div className="w-full h-96">
            <h5 className="font-smooch text-[120px] font-bold text-[#1C1C1C] text-center -mt-12">
              Welcome
            </h5>
            <p className="text-center -mt-10 text-sm">
              We are glad to see you back with us
            </p>
            <form className="mt-6 space-y-6">
              <div className="relative">
                <input
                  type="email"
                  className="peer py-4 px-5 ps-12 block w-full bg-[#F2F2F2] border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                  placeholder="Username"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="stroke-[#1C1C1C]"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  className="peer py-4 px-5 ps-12 block w-full bg-[#F2F2F2] border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="stroke-[#1C1C1C]"
                  >
                    <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                  </svg>
                </div>
              </div>

              <div>
                <button className="uppercase bg-[#1C1C1C] rounded-lg py-4 w-full text-white">
                  Next
                </button>
              </div>
            </form>

            <div className="mt-6 text-center flex justify-between items-center gap-3">
              <div className="flex-1 bg-[#F0EDFF]" style={{ height: 1 }} />
              <p className="text-base text-[#1C1C1C]">
                <span className="font-bold">Login</span> with Others
              </p>
              <div className="flex-1 bg-[#F0EDFF]" style={{ height: 1 }} />
            </div>

            <div className="mt-6">
              <button className="w-full rounded-lg border border-[#1C1C1C] py-3 grid place-items-center">
                <div className="flex gap-2 items-center">
                  <img src="/google.png" width={30} height={30} />
                  <p className="text-sm">
                    Login with <span className="font-bold">Google</span>
                  </p>
                </div>
              </button>
            </div>

            <div className="mt-10 grid place-items-center">
              <Link to="/" className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="#1C1C1C"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                </svg>
                <span className="text-[#1C1C1C]">Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen p-9">
        <div className="bg-slate-50 overflow-hidden rounded-[40px] h-[855px]">
          <img src="/animation.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
