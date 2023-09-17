import React from 'react';
//avatar import
import Avatar from '../assets/Avatar.png';
//icons import
import {BsDiscord} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
//importing animations
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
//fade in animation (local)
import {fadeIn} from '../variants.js';

const Banner = () => {
  return <section 
  id = 'Home'
  className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
      {/*text*/}
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up', 0.3)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          IHSAN <span> HASHIR</span>
        </motion.h1>
        <motion.div
        variants={fadeIn('up', 0.4)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='mb-6 text-[36px] lg:text-60[px] font-secondary font-semibold uppercase leading-[1]'>
          
          <TypeAnimation sequence={[
            'High School Student',
            2000,
            'Artificial Intelligence Aspirant',
            2000,
            'Growing and Learning Developer',
            2000,
          ]} 
          speed={50}
          className= 'text-accent'
          wrapper='span'
          repeat={Infinity}
          />
        </motion.div>
        <motion.p 
        variants={fadeIn('up', 0.5)} 
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className= 'mb-8 max-w-lg mx-auto text-[18px] lg:mx-0'>
          Hello there! Welcome to my website, which shows projects I'm working on, courses I've completed, my current education, and anything else regarding my professional life. Have fun browsing.
        </motion.p>
        <motion.div 
        variants={fadeIn('up', 0.6)} 
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <a href='#' className = 'text-gradient btn-link text-[18px]'>
            Contact me! 
          </a>
        </motion.div>
        {/*socials*/}
        <motion.div 
        variants={fadeIn('up', 0.7)} 
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href= '#'>
            <BsDiscord href = 'https://discordapp.com/users/452870267522514945' title='IhsanRocks' />
          </a>
          <a href= 'https://www.instagram.com/ih._.an/' target='_blank' >
            <AiFillInstagram title='@ih._.an'/>
          </a>
          <a href= 'https://www.linkedin.com/in/ihsan-hashir-ab4312213/' target='_blank'>
            <AiFillLinkedin title='Ihsan Hashir'/>
          </a>
        </motion.div>
      </div>
      {/*image*/}
      <motion.div 
      variants={fadeIn('down', 0.5)} 
      initial='hidden' 
      whileInView={'show'} 
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>

        <img src ={Avatar} alt = "" />
      </motion.div>
    </div>
    </div>
  </section>;
};

export default Banner;
