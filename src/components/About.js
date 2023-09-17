import React from 'react';
//intersection observer
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//Fade in effect
import { fadeIn } from '../variants';



const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });
  return <section 
  id = 'About'
  className='section'
  ref = {ref}
  >
    <div className='container mx-auto'>
      <div className='flex-1 flex-col gap-y-10 lg:gap-x-20 lg:gap-y-0 text-center lg:text-left'>
        {/*Text*/}
        <motion.div 
        variants={fadeIn('up', 0.3 )} 
        initial='hidden' whileInView={'show'} 
        viewport={{once: false, amount: 0.3}}>
          <h2 className='h2 text-accent'><span>EDUCATION</span></h2>
          <h3 className = 'h3 mb-4'>Currently studying : 12th grade in Chavara Public School. </h3>
          <p className='mb-6 text-[18px]'>I completed a majority of my school years in The Indian High School. Currently studying in a coaching center, Brilliant Pala, to prepare for the Joint Entrance Examination in India. </p>
        </motion.div>
        {/*cards for education*/}
        <div class='allcards'>
        {/*IHS*/}
        <motion.div 
        variants={fadeIn('right', 0.5)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once: false, amount: 0.3}} 
        class='cardIHS'>
          <div class='card'>
            <div class='front-ihs'>
            </div>

            <div class='back'>
            <h3 className='h3'>The Indian High School</h3>
            <h4 className='h4'>Grade 3-10</h4>
            <p className='mb-6'>A CBSE-affiliated Indian school in Dubai, United Arab Emirates.</p>
            <a href='https://www.ihsdubai.org' target='_blank'>
            <button className='btn btn-sm'>Visit School Website</button>
            </a>
            </div>
         </div>
        </motion.div>

        {/*CPS*/}
        <motion.div 
        variants={fadeIn('left', 0.5)} 
        initial='hidden' whileInView={'show'} 
        viewport={{once: false, amount: 0.3}} 
        class='cardCPS'>
          <div class='card'>
            <div class='front-cps'></div>

            <div class='back'>
            <h3 className='h3'>Chavara Public School</h3>
            <h4 className='h4'>Grade 11-12 &#40;present&#41;</h4>
            <p>A CBSE-affiliated Indian school located in Pala, Kerala, India</p>
            <a href='https://www.cps.ac.in' target='_blank'>
            <button className='btn btn-sm'>Visit School Website</button>
            </a>
            </div>
          </div>
        </motion.div>
        </div>

      </div>
    </div>
  </section>;
  
};

export default About;
