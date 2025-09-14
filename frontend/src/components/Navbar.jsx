import React from 'react'
import { Clock4 } from 'lucide-react';
import logo from '../assets/logo.png'
import ion_cart from '../assets/ion_cart.png'
import Vector from '../assets/Vector.png'
import phone from '../assets/phone.png'
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.main
      className='font-semibold'
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section className='bg-black'>
        <div className='w-[85%] m-auto text-white h-[56px] flex items-center justify-between'>
          <div>
            <h2>15 ans d'expertise au service de l'industrie</h2>
          </div>
          <div className='flex gap-14'>
            <h2 className='flex gap-3 items-center'>
              <img src={phone} alt='phone' className='w-4 h-4' /> 
              +213 (0) 23 37 03 70
            </h2>
            <h2 className='flex gap-3 items-center'>
              <Clock4 className='w-5 h-5' /> Disponible 24/7
            </h2>
          </div>
        </div>
      </section>

      <nav className='flex justify-between w-[85%] m-auto my-8 items-center'>
        <div>
          <img src={logo} alt='logo' className='hover:cursor-pointer' />
        </div>

        <div>
          <ul className='flex gap-12 hover:cursor-pointer text-[#1C1C1C]'>
            <li>Accueil</li>
            <li>Solutions</li>
            <li>Secteurs</li>
            <li>Projets</li>
            <li>Expertise</li>
            <li>Recrutement</li>
            <li>News</li>
          </ul>
        </div>

        <div>
          <img src={ion_cart} alt='cart' className='hover:cursor-pointer' />
        </div>

        <div>
          <button className='bg-[#E1000F] flex items-center text-white p-5 gap-3 text-xl hover:cursor-pointer'>
            Contact 
            <img src={Vector} alt='vector' className='w-5 h-5' />
          </button>
        </div>
      </nav>
    </motion.main>
  )
}

export default Navbar
