import React from "react";
import menImage from "../assets/men.png";

function DeliverInfo() {
  return (
    <>
      <div className="w-full px-2 sm:px-4 max-w-5xl mx-auto py-6 sm:py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-6">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-950 mb-2 text-center md:text-left leading-tight">
              Delivery Information
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left max-w-2xl w-full">
              <span className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>Home delivery available countrywide.</span>
            </p>
          </div>
          <img
            src={menImage}
            alt="Delivery Man"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain flex-shrink-0"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
          {/* Inside City */}
          <div className="rounded-lg border shadow-sm bg-white border-stone-200 shadow-stone-950/5 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 items-center sm:items-start min-h-[170px]">
            <h1 className="font-bold text-base sm:text-lg md:text-2xl text-green-900">Inside city Corporation</h1>
            <p className="flex flex-row gap-2 sm:gap-3 items-center text-sm sm:text-base md:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 sm:size-6 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Delivery within 6 hours
            </p>
            <p className="flex flex-row gap-2 sm:gap-3 items-center text-sm sm:text-base md:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 sm:size-6 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              Delivery charge BDT.50
            </p>
          </div>
          {/* Outside City */}
          <div className="rounded-lg border shadow-sm bg-white border-stone-200 shadow-stone-950/5 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 items-center sm:items-start min-h-[170px]">
            <h1 className="font-bold text-base sm:text-lg md:text-2xl text-green-900">Outside city Corporation</h1>
            <p className="flex flex-row gap-2 sm:gap-3 items-center text-sm sm:text-base md:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 sm:size-6 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Delivery within 24 hours
            </p>
            <p className="flex flex-row gap-2 sm:gap-3 items-center text-sm sm:text-base md:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 sm:size-6 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              Delivery charge BDT.50
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliverInfo;
