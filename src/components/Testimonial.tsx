import { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "./Title";
import { quote, testimonialOne, testimonialTwo,testimonialThree } from "../assets";
import { FadeIn } from "./FadeIn";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CLIENTS SAY" des="Testimonial" />
        </div>
        <div className="max-w-6xl mx-auto">
          {/* ================ Slider One ================== */}
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={testimonialOne}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-2xl font-bold">Jone Duone</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl text-center lgl:text-2xl font-medium tracking-wide">
                         Gadget Galaxy Website
                        </h3>
                        <p className="text-base text-center text-gray-400 mt-3">
                          via Upwork - Ju 4, 2023
                        </p>
                      </div>
                      <div className="text-yellow-500 flex justify-center pt-2  gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base text-justify font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Outstanding MERN developer! Their MongoDB, Express, React, and Node.js expertise transformed our web apps. Clean, innovative code and seamless collaboration. A true asset to any project!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Two ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={testimonialTwo}
                    alt="testimonialTwo"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-2xl font-bold">Tom Hanks</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl text-center lgl:text-2xl font-medium tracking-wide">
                          Travel Agency Website Design
                        </h3>
                        <p className="text-base text-center  text-gray-400 mt-3">
                          via Fiverr - Mar 9, 2021 
                        </p>
                      </div>
                      <div className="text-yellow-500 flex justify-center pt-2  gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        
                      </div>
                    </div>
                    <p className="text-base text-justify font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Exceptional MERN stack developer! Their skills in MongoDB, Express, React, and Node.js are unparalleled. Our projects have flourished thanks to their clean code and creative solutions. Highly recommended for any web development needs!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Three ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#020617] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={testimonialThree}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-2xl font-bold">Duone Joe</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img
                    className="w-20 lgl:w-32 bg-[#23272b] rounded-md"
                    src={quote}
                    alt="quote"
                  />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div className="text-center ">
                        <h3 className="text-xl  lgl:text-2xl text-center font-medium tracking-wide">
                          Event Management Website
                        </h3>
                        <p className="text-base text-center  text-gray-400 mt-3">
                          via Upwork - Mar 4, 2022
                        </p>
                      </div>
                      <div className="text-yellow-500 flex justify-center pt-2  gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base text-justify font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Top-tier MERN developer! Their proficiency in MongoDB, Express, React, and Node.js is a game-changer. Our web projects have thrived, thanks to their coding finesse and ingenious solutions. A must-have for web development!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
