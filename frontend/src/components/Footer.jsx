import React from "react";
import logo from "../assets/logo_actris.png";
import { motion } from "framer-motion";

// animation variants
const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#1C1C1C]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-[90%] md:w-[85%] py-20 mx-auto">
        <motion.section
          className="flex justify-between max-md:flex-col max-md:text-center gap-[4vh] md:gap-[2vw]"
          variants={container}
        >
          {/* Logo + text */}
          <motion.div className="md:space-y-8 space-y-3" variants={item}>
            <img
              src={logo}
              alt="logo"
              className="w-[200px] h-[65px] max-md:mx-auto"
            />
            <p className="text-white/70 text-lg">
              15 ans d'excellence dans la construction industrielle en Afrique
              du Nord. Spécialisés dans les secteurs pétrolier, gouvernemental
              et industriel.
            </p>
          </motion.div>

          {/* Liens Rapides */}
          <motion.div className="md:space-y-8 space-y-3" variants={item}>
            <h1 className="text-white whitespace-nowrap text-2xl">
              Liens Rapides
            </h1>
            <ul className="text-white/70 text-lg">
              <li>Accueil</li>
              <li>Secteur</li>
              <li>Projets</li>
              <li>Expertise</li>
              <li>Actualités</li>
              <li>Contact</li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="md:space-y-8 space-y-3" variants={item}>
            <h1 className="text-white text-2xl">Services</h1>
            <ul className="text-white/70 text-lg">
              <li>Construction Modulaire</li>
              <li>Charpentes Métalliques</li>
              <li>Aménagement Industriel</li>
              <li>Projets Pétroliers</li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div className="md:space-y-8 space-y-3" variants={item}>
            <h1 className="text-white text-2xl">Address</h1>
            <ul className="text-white/70 text-lg">
              <li>
                02 bis, lotissement benhaddadi said, Dar diaf, Chéraga, Alger
                16000
              </li>
              <li>+213 (0) 23 37 03 70</li>
              <li>+213 (0) 23 37 03 69</li>
              <li>contact@actaris.dz</li>
            </ul>
          </motion.div>
        </motion.section>
      </div>

      <hr className="text-white/50 w-full" />

      <motion.div
        className="w-[90%] md:w-[85%] py-18 mx-auto"
        variants={item}
      >
        <p className="text-white/70 text-xl text-center">
          © 2025 Actaris Algeria. Tous droits réservés. | Solutions industrielles
          complètes depuis 2009
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
