import React from 'react';
//logo
import Logo from '../assets/logo.png'

const Header = () => {
  return <header 
  py = '8'>
  {/*  className='bg-slate-950'*/}
    <div className ='container mx-auto'>
      <div className = 'flex justify-between items-center'>
        {/* Main logo on header (name) */}
        <a href='#'>
          <img src ={Logo} alt ='' width={'75px'} height={'75px'} />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Contact me!</button>
      </div>
    </div>
    </header>;
};

export default Header;
