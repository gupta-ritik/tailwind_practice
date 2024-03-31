import React from 'react';
import { navLinks } from '../constants';
import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img 
                    src={headerLogo} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((e) =>(<li key={e.label}>
                    <a href ={e.href} className='font-montserat leading-normal text-lg text-slate-gray'>
                        {e.label}
                        
                    </a>
                </li>))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='hamburger' width={25}
                height={25} ></img>
            </div>
        </nav>
    </header>
  )
}

export default Nav
