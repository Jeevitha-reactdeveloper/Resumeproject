import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'



function Header() {
    const[togglemenu,setTogglemenu]= useState(false);
  return (
    <header className='flex justify-between px-5 py-2 bg-primary '>
        <a href='#contact' className='text-2xl  md:text-3xl font-bold' >Jeevitha N</a>
            <nav className='hidden md:block'> 
                <ul className="flex font-bold md:text-xl text-white">
                   <li> <a href='/'>Home </a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#resume'>Resume</a></li>
                    <li><a href='#contacts'>Contacts</a></li>
                </ul>
            </nav>

            <button className='block md:hidden  right-10 text-white font-bold size-10'onClick={()=> setTogglemenu(!togglemenu)}>
               <Bars3Icon className='text-white h-5 w-7 '/>
            </button>
            {togglemenu &&
                <nav className='block md:hidden '>
                    <ul onClick={()=>setTogglemenu(!togglemenu)}    className="flex flex-col text-white mobile-nav">
                        <li> <a href='/'>Home </a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#resume'>Resume</a></li>
                        <li><a href='#contacts'>Contacts</a></li>
                    </ul>
                </nav> 
            }
    </header>
  )
}

export default Header 