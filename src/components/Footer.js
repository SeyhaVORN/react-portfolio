import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            {/*<img src={Logo} alt='' />*/}
              {/*<h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>Seyha VORN</h1>*/}
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 <a href="https://www.linkedin.com/in/seyha-vorn/">Seyha VORN</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
