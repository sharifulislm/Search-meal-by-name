import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const Header = () => {

  const [open, setOpen] = useState(false);

  const routes = [
      {id:1, name: 'Home', link: '/Home'},
      {id:2, name: 'About', link: '/Shop'},

      {id:5, name: 'Contact', link: '/contact'},
  ]


    return (
        
        
       <nav className='bg-indigo-200 p-3'>
           <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
              {open? <FaTimes></FaTimes> : <HiMenu> </HiMenu>}
              
               
           </div>
           <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full  duration-500 ease-in ${open ? 'top-6':'top-[-120px]'}`}>
         
               {
                   routes.map(route => <Navbar key={route.id} route={route} ></Navbar>  )
               }
         


           </ul>
           
       </nav>
    );
};

export default Header;