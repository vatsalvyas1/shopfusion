import AnimatedComponent from "../animatedComponent/AnimatedComponent";
import React from "react";
import svg from "../img/svg1.svg"
const Track = () => {
  return (
    <section>
      <AnimatedComponent>
        <div className=" container mx-auto px-5 py-10 md:py-14">
          {/* main  */}
          <div className="flex flex-wrap -m-4 text-center">
            {/* Track 1 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                <svg
                  className="text-blue-800 w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <h2 className="title-font font-medium text-lg text-gray-900">
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed">
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>

            {/* Track 2 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                <svg
                  className="text-blue-400 w-12 h-12 mb-3 inline-block"
                  fill="#0000FF"
                //   width="50px"
                //   height="50px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Shopping_Tag" data-name="Shopping Tag">
                    <g>
                      <path d="M20.605,5.988a2.8,2.8,0,0,0-2.6-2.59l-4.56-.32a2.842,2.842,0,0,0-2.17.81L3.9,11.278a2.794,2.794,0,0,0,0,3.95l4.87,4.88a2.8,2.8,0,0,0,3.96,0l7.38-7.39a2.779,2.779,0,0,0,.81-2.17ZM12.015,19.4a1.8,1.8,0,0,1-2.54,0l-4.87-4.87a1.793,1.793,0,0,1,0-2.55l1.17-1.17,7.42,7.42Zm7.38-7.38-5.5,5.5L6.485,10.1l5.5-5.5a1.786,1.786,0,0,1,1.27-.53c.04,0,.08.01.12.01l4.56.32a1.8,1.8,0,0,1,1.67,1.66l.32,4.56A1.829,1.829,0,0,1,19.4,12.018Z" />
                      <circle cx="17" cy="6.999" r="0.862" />
                    </g>
                  </g>
                </svg>

                <h2 className="title-font font-medium text-lg text-gray-900">
                Best Discounts
                </h2>
                <p className="leading-relaxed">
                  Upto 70% off on selected items.
                </p>
              </div>
            </div>

            {/* Track 3  */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
              <img src={svg} alt="" className="w-12 h-12 mb-3 inline-block" />


                <h2 className="title-font font-medium text-lg text-gray-900">
                    EMI Available
                </h2>
                <p className="leading-relaxed">
                  No-Cost EMI approved within 2 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
};

export default Track;
