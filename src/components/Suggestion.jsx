import React from "react";
import carrotImage from "../assets/carrot.png";
import kheeraImage from "../assets/kheera.png";
import tomatoImage from "../assets/tomato.png";
function Suggestion() {
  return (
    <>
      <div className="flex flex-col bg-green-600 gap-4 p-4 ">
        <div>

        <h1 className="font-bold  text-2xl md:text-3xl lg:text-4xl text-center text-green-950 px-2">Suggested for you</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div class="w-full rounded-lg pt-3  border shadow-sm  bg-white border-stone-200 shadow-stone-950/5 max-w-[10rem] overflow-hidden">
            <img src={tomatoImage} alt="" />
            {/* <img src="https://images.unsplash.com/photo-1701275970002-abadaf927969?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ui/ux review check" class="w-[calc(100%-16px)] h-max rounded m-2" /> */}

            <div class="w-full px-2 pt-2 pb-3.5 rounded mt-4 flex items-center justify-between">
              <div class="w-full h-max rounded px-2 py-2.5">
                <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
                  Carrots
                </h6>
                <p class="font-sans antialiased text-base mt-1 text-green-600">
                  BDT.22/kg
                </p>
              </div>
              <small class="font-sans antialiased text-sm text-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </small>
            </div>
          </div>

          {/* 2 card */}
          <div class="w-full rounded-lg pt-10 border shadow-sm bg-white border-stone-200 shadow-stone-950/5 max-w-[10rem] overflow-hidden">
            <img src={carrotImage} alt="" />
            {/* <img src="https://images.unsplash.com/photo-1701275970002-abadaf927969?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ui/ux review check" class="w-[calc(100%-16px)] h-max rounded m-2" /> */}

            <div class="w-full px-2 pt-2 pb-3.5 rounded mt-4 flex items-center justify-between">
              <div class="w-full h-max rounded px-2 py-2.5">
                <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
                  Carrots
                </h6>
                <p class="font-sans antialiased text-base mt-1 text-green-600">
                  BDT.22/kg
                </p>
              </div>
              <small class="font-sans antialiased text-sm text-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </small>
            </div>
          </div>
          {/* 3 card */}

          <div class="w-full rounded-lg pt-5 border shadow-sm bg-white border-stone-200 shadow-stone-950/5 max-w-[10rem] overflow-hidden">
            <img src={kheeraImage} alt="" />
            {/* <img src="https://images.unsplash.com/photo-1701275970002-abadaf927969?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ui/ux review check" class="w-[calc(100%-16px)] h-max rounded m-2" /> */}

            <div class="w-full px-2 pt-2 pb-3.5 rounded mt-4 flex items-center justify-between">
              <div class="w-full h-max rounded px-2 py-2.5">
                <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
                  Carrots
                </h6>
                <p class="font-sans antialiased text-base mt-1 text-green-600">
                  BDT.22/kg
                </p>
              </div>
              <small class="font-sans antialiased text-sm text-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </small>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 pb-4 ">
            <button className="flex items-center justify-center bg-green-950 text-white  py-4 px-8 text-2xl rounded-full hover:bg-green-800 transition duration-300">
                
                    View All
                
            </button>
        </div>
      </div>
    </>
  );
}

export default Suggestion;
