import React, { useState } from "react";
import { Clock4, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import ion_cart from "../assets/ion_cart.png";
import Vector from "../assets/Vector.png";
import phone from "../assets/phone.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.main
      className="font-semibold"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section className="bg-black">
        <div className="w-[90%] md:w-[85%] m-auto text-white h-auto md:h-[56px] flex flex-col md:flex-row items-center justify-between py-2 md:py-0 gap-2 md:gap-0 text-sm md:text-base">
          <div>
            <h2 className="text-center md:text-left">
              15 ans d'expertise au service de l'industrie
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-14 text-center md:text-left">
            <h2 className="flex gap-2 md:gap-3 items-center justify-center">
              <img src={phone} alt="phone" className="w-4 h-4" /> 
              +213 (0) 23 37 03 70
            </h2>
            <h2 className="flex gap-2 md:gap-3 items-center justify-center">
              <Clock4 className="w-5 h-5" /> Disponible 24/7
            </h2>
          </div>
        </div>
      </section>

      <nav className="flex justify-between w-[90%] md:w-[85%] m-auto my-4 md:my-8 items-center relative">
        <div>
          <img src={logo} alt="logo" className="hover:cursor-pointer w-28 md:w-auto" />
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-6 lg:gap-12 hover:cursor-pointer text-[#1C1C1C] text-sm lg:text-base">
            <li>Accueil</li>
            <li>Solutions</li>
            <li>Secteurs</li>
            <li>Projets</li>
            <li>Expertise</li>
            <li>Recrutement</li>
            <li>News</li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <img src={ion_cart} alt="cart" className="hover:cursor-pointer w-6 h-6" />
          <button className="bg-[#E1000F] flex items-center text-white px-4 py-3 gap-2 text-sm lg:text-xl hover:cursor-pointer">
            Contact 
            <img src={Vector} alt="vector" className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>

        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col gap-4 p-6 text-[#1C1C1C]">
              <li>Accueil</li>
              <li>Solutions</li>
              <li>Secteurs</li>
              <li>Projets</li>
              <li>Expertise</li>
              <li>Recrutement</li>
              <li>News</li>
              <li>
                <img src={ion_cart} alt="cart" className="w-6 h-6 inline mr-2" />
                Panier
              </li>
              <li>
                <button className="bg-[#E1000F] flex items-center text-white px-4 py-2 gap-2 text-sm hover:cursor-pointer">
                  Contact 
                  <img src={Vector} alt="vector" className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </motion.main>
  );
};

export default Navbar;
