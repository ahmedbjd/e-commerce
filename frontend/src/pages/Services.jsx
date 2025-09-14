import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/logo11.png";
import logo2 from "../assets/logo22.png";
import logo3 from "../assets/logo33.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";

const cards = [
  {
    id: 1,
    icon: logo1,
    background: bg1,
    title: "Charpente Métallique",
    color: "#77726E",
  },
  {
    id: 2,
    icon: logo2,
    background: bg2,
    title: "Construction Modulaire",
    color: "#384152",
  },
  {
    id: 3,
    icon: logo3,
    background: bg3,
    title: "Aménagement",
    color: "#28456F",
  },
];

const Services = () => {
  return (
    <main className="w-[90%] md:w-[85%] m-auto my-24">
      <motion.section
        className="flex flex-col lg:flex-row gap-10 items-start lg:items-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="font-bold"
          style={{ fontFamily: "VeneerClean, sans-serif" }}
        >
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] bg-[#E1000F]"></span>
            <h2 className="text-[#E1000F] text-[20px] uppercase">Services</h2>
          </div>
          <h1 className="text-[#1C1C1C] text-[32px] md:text-[40px] uppercase">
            Ce que nous proposons
          </h1>
        </div>
        <p className="text-black/80 text-[18px] md:text-[20px] max-w-2xl">
          Nous offrons des solutions complètes en aménagement, construction
          modulaire et structures métalliques, adaptées à divers secteurs
          d'activité.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative overflow-hidden shadow-md rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.3, 
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >

            <img
              src={card.background}
              alt={card.title}
              className="w-full h-[500px] object-cover"
            />

            <div
              className="absolute bottom-0 left-0 w-[87%] h-[197px] rounded-xl flex flex-col justify-center gap-4 py-4 px-9"
              style={{ backgroundColor: card.color }}
            >
              <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
                <img src={card.icon} alt={card.title} className="object-contain" />
              </div>
              <h2
                className="text-white text-2xl font-bold uppercase"
                style={{ fontFamily: "VeneerClean, sans-serif" }}
              >
                {card.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Services;
