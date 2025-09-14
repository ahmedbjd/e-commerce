import React from "react";
import bg from "../assets/Bg.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main
      className="h-[80vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[85%] m-auto py-10">
        <motion.div
          className="w-[70%]"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            className="font-bold text-[80px] leading-[95px] uppercase my-10"
            style={{ fontFamily: "VeneerClean, sans-serif" }}
          >
            <span className="whitespace-nowrap">Expertise en construction</span>{" "}
            modulaire pétrolière
          </h1>

          <p className="text-3xl text-white/80 w-[80%]">
            ACTARIS, 15 ans d'expertise en construction modulaire, charpente
            métallique et infrastructures pétrolières en Algérie.
          </p>

          <div className="text-2xl font-bold py-10 flex gap-5">
            <button className="bg-[#E1000F] p-5 hover:cursor-pointer">
              Voir nos services
            </button>
            <button className="p-5 border-[0.4px] hover:cursor-pointer">
              Prendre contact
            </button>
          </div>

          <div className="flex gap-8 divide-x divide-white">
            <div className="flex flex-col gap-2 pr-8">
              <h1 className="text-4xl font-bold">
                <CountUp end={15} duration={2} /> Ans
              </h1>
              <p>Expérience en Dz</p>
            </div>
            <div className="flex flex-col gap-2 px-8">
              <h1 className="text-4xl font-bold">
                <CountUp end={150} duration={2.5} /> +
              </h1>
              <p>Projets Réalisés</p>
            </div>
            <div className="flex flex-col gap-2 pl-8">
              <h1 className="text-4xl font-bold">Zero</h1>
              <p>Accident de Travail</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
