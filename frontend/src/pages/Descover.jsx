import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/worker_bg.png";
import vector from "../assets/Vector.png";

const Descover = () => {
  return (
    <main
      className="relative min-h-[740px] bg-cover bg-center mt-24 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#1C1C1C66]/90" />

      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-[90%] max-lg:w-full mx-auto px-6 md:px-16 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[1px] bg-white"></span>
              <h2 className="text-lg text-white font-semibold">Accueil</h2>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white max-w-2xl">
              Découvrez notre expertise sectorielle
            </h1>
          </motion.div>

          <motion.div
            className="flex items-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <button className="bg-[#E1000F] flex items-center gap-2 p-3 whitespace-nowrap lg:px-6 lg:py-5 text-white font-semibold hover:cursor-pointer text-xl">
              En savoir plus
              <img src={vector} alt="vector" className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default Descover;
