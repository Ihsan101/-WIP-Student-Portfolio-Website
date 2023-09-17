import React from 'react';
import introtoai from '../assets/certificates/Elements of AI Certificate.png';
import aiapp from '../assets/certificates/Ihsan Hashir_AI_APPRECIATE_CERTIFICATE.png';
import ai900 from '../assets/certificates/AI-900.png';
import ffc from '../assets/certificates/ffc.png';
import googledig from '../assets/certificates/Google Digital Marketing.png';
import p2e from '../assets/certificates/P2E.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Services = () => {
  return <section 
  id = 'Services'
  className='section'>
    <div className='container mx-auto padding'>
      <div>
        <h2 className='h2 text-accent mb-6 centering'>Certifications</h2>
        <h4 className='mb-6 text-[18px] centering'>Over the years I was able to aquire multiple certifications from different universities and companies after completing courses to proove my knowledge in certain fields. Here are a list of a few of them. </h4>
        <section class = 'imgbox'>
          <div class = 'slider-wrapper'>
            <div class = 'slider'>
              <img id = 'slide-1' src = {introtoai} alt = 'Introduction to Artificial Intelligence Course'/>
              <img id = 'slide-2' src = {aiapp} alt = 'AI Appreciation'/>
              <img id = 'slide-3' src = {ai900} alt = 'Microsoft AI-900'/>
              <img id = 'slide-4' src = {ffc} alt= 'FreeCodeCamp Machine Learning with Python'/>
              <img id = 'slide-5' src = {p2e} alt = 'Passport to earning, Digital Productivity'/>
              <img id = 'slide-6' src = {googledig} alt = 'Foundations of Digital Marketing'/>
            </div>
            <div class = 'slider-nav'>
              <a href = '#slide-1'></a>
              <a href = '#slide-2'></a>
              <a href = '#slide-3'></a>
              <a href = '#slide-4'></a>
              <a href = '#slide-5'></a>
              <a href = '#slide-6'></a>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  </section>;
};

export default Services;
