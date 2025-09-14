import React from "react";
import bg from "../assets/Bg.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Vector from '../assets/Vector.png'

const Home = () => {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[90%] md:w-[85%] m-auto py-10">
        <motion.div
          className="w-full md:w-[70%]"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            className="
              font-bold uppercase my-6
              text-[32px] leading-[40px]     
              sm:text-[40px] sm:leading-[50px]
              md:text-[60px] md:leading-[75px]
              lg:text-[80px] lg:leading-[95px]
            "
            style={{ fontFamily: "VeneerClean, sans-serif" }}
          >
            Expertise en construction modulaire pétrolière
          </h1>

          <p
            className="
              text-base sm:text-lg md:text-2xl 
              text-white/80 w-full md:w-[80%] mb-6
            "
          >
            ACTARIS, 15 ans d'expertise en construction modulaire, charpente
            métallique et infrastructures pétrolières en Algérie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-lg md:text-2xl font-bold py-6">
            <button
              className="
                bg-[#E1000F] text-white 
                p-3 md:p-5 
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:cursor-pointer
              "
            >
              Voir nos services
            </button>

            <button
              className="
                flex items-center gap-4 border border-white text-white
                p-3 md:p-5 max-sm:justify-center
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:cursor-pointer
              "
            >
              Prendre contact 
            <img src={Vector} alt="vector" className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>


          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white mt-6">
            <div className="flex flex-col gap-1 sm:gap-2 sm:pr-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <CountUp end={15} duration={2} /> Ans
              </h1>
              <p className="text-sm sm:text-base">Expérience en Dz</p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 sm:px-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <CountUp end={150} duration={2.5} /> +
              </h1>
              <p className="text-sm sm:text-base">Projets Réalisés</p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 sm:pl-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Zero
              </h1>
              <p className="text-sm sm:text-base">Accident de Travail</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
