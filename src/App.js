import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <div>&nbsp; <br/> </div>
      <Banner />
      <div>&nbsp; <br/> <br/> <br/>  </div>
      <About />
      <div>&nbsp; <br/> <br/> <br/> <br/> <br/>  </div>
      <Services />
      <div>&nbsp; <br/> </div>
      <Work />
      
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
