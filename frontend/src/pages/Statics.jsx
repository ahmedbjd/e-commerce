import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import bg from "../assets/bg_statics.png";

const stats = [
  { number: 15, suffix: " Ans", label: "Expérience en Dz" },
  { number: 12, suffix: "", label: "Wilayas couvertes" },
  { number: 150, suffix: "+", label: "Projets Réalisés" },
  { number: 98, suffix: "%", label: "Satisfaction Client" },
  { number: 0, suffix: "ISO", label: "Certifications" },
];

const Statics = () => {
  return (
    <main
      className="relative min-h-[400px] bg-cover bg-center flex justify-center my-24 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#E1000F]/70"></div>

      <div className="relative z-10 text-white space-y-12 mt-14 w-full max-w-7xl">
        <motion.div
          className="font-bold uppercase text-center px-2"
          style={{ fontFamily: "VeneerClean, sans-serif" }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl">Statics</h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl mt-2">
            Pourquoi nous faire confiance
          </h1>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center text-center">
            {stats.map((item, index, arr) => (
                <motion.div
                key={index}
                className="flex flex-col items-center justify-between relative min-w-[140px] px-6 py-4"
                style={{ minHeight: "120px" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.2,
                }}
                viewport={{ once: true }}
                >
                <h1 className="text-xl sm:text-2xl md:text-[40px] font-bold leading-tight">
                    {item.number > 0 ? (
                    <CountUp end={item.number} duration={2} suffix={item.suffix} />
                    ) : (
                    item.suffix
                    )}
                </h1>

                <p className="text-base sm:text-lg md:text-2xl mt-1">{item.label}</p>

                {index !== arr.length - 1 && (
                    <span className="hidden sm:block absolute right-0 top-0 bottom-0 my-auto w-[1px] h-[60%] bg-white"></span>
                )}
                </motion.div>
            ))}
            </div>

      </div>
    </main>
  );
};

export default Statics;
