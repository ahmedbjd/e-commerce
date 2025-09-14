import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/avantage.png"; 
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const cards = [
  {
    id: 1,
    icon: logo1,
    title: "Déploiement Rapide",
    content:
      "Solutions Rapides et Flexibles- Bâtiments préfabriqués sur mesure- Cabines sahariennes pour conditions extrêmes- Solutions modulaires pour logement, bureaux, écoles et cliniques- Déploiement rapide avec qualité garantie",
  },
  {
    id: 2,
    icon: logo2,
    title: "Solutions Complètes",
    content:
      "Solutions Rapides et Flexibles- Bâtiments préfabriqués sur mesure- Cabines sahariennes pour conditions extrêmes- Solutions modulaires pour logement, bureaux, écoles et cliniques- Déploiement rapide avec qualité garantie",
  },
  {
    id: 3,
    icon: logo3,
    title: "Expertise Pétro-Gazière Modulaire",
    content:
      "Solutions Rapides et Flexibles- Bâtiments préfabriqués sur mesure- Cabines sahariennes pour conditions extrêmes- Solutions modulaires pour logement, bureaux, écoles et cliniques- Déploiement rapide avec qualité garantie",
  },
  {
    id: 4,
    icon: logo4,
    title: "Projets Gouvernementaux",
    content:
      "Solutions Rapides et Flexibles- Bâtiments préfabriqués sur mesure- Cabines sahariennes pour conditions extrêmes- Solutions modulaires pour logement, bureaux, écoles et cliniques- Déploiement rapide avec qualité garantie",
  },
];

const Avantage = () => {
  return (
    <main className="w-[90%] md:w-[85%] m-auto my-14">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={logo} alt="logo" className="mx-auto mb-2" />
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Veneer Clean Soft, sans-serif" }}
        >
          CLÉS DE NOTRE SUCCÈS
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="flex flex-col bg-black/5 rounded-lg p-7 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.3,
            }}
            viewport={{ once: true }}
          >
            <div className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center">
              <img
                src={card.icon}
                alt={card.title}
                className="w-[30px] h-[30px]"
              />
            </div>
            <h2
              className="text-[28px] md:text-[32px] font-semibold mb-2 mt-9 uppercase"
              style={{ fontFamily: "VeneerClean, sans-serif" }}
            >
              {card.title}
            </h2>
            <p className="text-black/80 text-[18px] md:text-[20px] leading-relaxed">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Avantage;
