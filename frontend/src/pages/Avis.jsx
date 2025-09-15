import React from 'react'
import avatar from '../assets/Avatar.png'
import star from '../assets/Star.png'
import avis_logo from '../assets/avis_logo.png'
import { motion } from "framer-motion";

const card = [
  {
    id: 1,
    text: '15 ans de partenariat avec ACTARIS. Ils ont construit nos 3 centres administratifs gouvernementaux avec une qualité irréprochable et dans le respect total du budget.',
    avarat: avatar,
    star: 5,
    name: 'Fatima Hadji',
    description: 'Responsable Infrastructure',
    projet: 'Centres Administratifs - Alger'
  },
  {
    id: 2,
    text: '15 ans de partenariat avec ACTARIS. Ils ont construit nos 3 centres administratifs gouvernementaux avec une qualité irréprochable et dans le respect total du budget.',
    avarat: avatar,
    star: 5,
    name: 'Fatima Hadji',
    description: 'Responsable Infrastructure',
    projet: 'Centres Administratifs - Alger'
  },
  {
    id: 3,
    text: '15 ans de partenariat avec ACTARIS. Ils ont construit nos 3 centres administratifs gouvernementaux avec une qualité irréprochable et dans le respect total du budget.',
    avarat: avatar,
    star: 5,
    name: 'Fatima Hadji',
    description: 'Responsable Infrastructure',
    projet: 'Centres Administratifs - Alger'
  }
]

const Avis = () => {
  return (
    <main className="w-[90%] md:w-[85%] mx-auto py-10">
      <motion.div 
        className='flex flex-col items-center gap-3 w-2/3 text-center mx-auto mb-9 max-md:w-[80%]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={avis_logo} alt="logo" className='h-[30px] w-[110px]' />
        <h1 
          className='text-4xl max-md:text-3xl text-[#1C1C1C] font-bold uppercase'
          style={{ fontFamily: "VeneerClean, sans-serif" }}
        >
          Témoignages de clients
        </h1>
        <p className='text-xl max-md:text-lg text-black/70'>
          Découvrez ce que nos partenaires industriels disent de nos réalisations 
          et de notre expertise dans la construction industrielle en Algerie
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {card.map((item, i) => (
          <motion.div
            key={item.id}
            className="p-6 bg-[rgba(225,0,15,0.05)] rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: item.star || 0 }).map((_, index) => (
                <motion.img
                  key={index}
                  src={star}
                  alt="star"
                  className="w-[30px] h-[30px]"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                />
              ))}
            </div>

            <p className="text-[#1C1C1C] italic mb-4 text-xl">"{item.text}"</p>

            <div className="flex items-center gap-3 mb-3 mt-14">
              <img
                src={item.avarat}
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className='text-[#1C1C1C]'>
                <h2 className="font-semibold text-xl">{item.name}</h2>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>

            <h2 className='text-[#1C1C1C] mb-4 mt-7'>
              <span className="text-[#E1000F] font-semibold text-xl">Projet: </span>
              {item.projet}
            </h2>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default Avis
