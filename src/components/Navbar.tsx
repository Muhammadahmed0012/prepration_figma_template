
import React from 'react'
import { Heart } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Sheet1 from './Sheet';
export default function Navbar() {
  return (
    <div>
    <div className='lg:flex lg:justify-around lg:items-center lg:h-16  md:flex md:justify-around md:items-center md:h-16  sm:flex sm:justify-around sm:items-center sm:h-16 flex justify-around items-center h-16 bg-black text-white '>
        <span className='lg:text-xl lg:font-extralight md:text-sm md:font-extralight  sm:text-sm sm:font-extralight text-sm font-extralight'>Summer Sale - OFF 50%! <span className='lg:text-xl lg:font-extralight md:text-sm max-md:hidden '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span> <button className='lg:pl-5 lg:text-xl lg:font-extralight underline md:pl-5 md:text-sm md:font-extralight sm:pl-5 sm:text-sm sm:font-extralight  text-sm font-extralight'>ShopNow</button></span>
    
    <div  className=''>
    <select className='bg-black lg:flex lg:flex-col lg:items-center  lg:text-xl lg:font-extralight md:flex md:flex-col md:items-center  md:text-sm md:font-extralight sm:flex sm:flex-col sm:items-center  sm:text-sm sm:font-extralight flex flex-col items-center  text-sm font-extralight'>
          <option value="English">English</option>
          <option value="Africans">Africans</option>
          <option value="English Uk">English Uk</option>
          <option value="Arabic">Arabic</option>
          <option value="Urdu">Urdu</option>
        </select>
    </div>
    </div>
    <div className=' lg:flex lg:justify-around lg:items-center lg:pt-5 md:flex md:justify-around md:items-center md:pt-5  sm:flex sm:justify-between sm:items-center sm:pt-2 flex justify-between items-center pt-2'>
        <h2 className='lg:text-5xl lg:font-semibold md:text-4xl md:font-semibold  sm:text-5xl sm:font-bold sm:pl-2 text-4xl font-bold pl-2 '>Exclusive</h2>
        <div className='lg:flex lg:justify-center lg:items-center lg:text-lg lg:font-extralight lg:space-x-16 md:flex md:justify-center md:items-center md:text-lg md:font-extralight md:space-x-10 sm:hidden hidden'>
            <a href="">Home</a>
            <a href="">contact</a>
            <a href="">About</a>
            <a href="">Sign Up</a>
            
        </div>
        <div className='lg:flex  lg:items-center md:flex  md:items-center sm:flex  sm:items-center flex  items-center  '>
        <div className='lg:flex lg:items-center md:flex md:items-center'>
  <input type="search" placeholder='What are you looking for?'  className='lg:flex lg:items-center lg:pl-2 lg:text-sm lg:font-semibold lg:w-56 lg:h-8 lg:rounded-l-md md:flex md:items-center md:pl-2 md:text-sm md:font-semibold md:w-44 md:h-8 md:rounded-l-md sm:hidden hidden bg-[#E5E7EB]'/>
  <Search className='lg:block md:block lg:h-8 lg:w-7 bg-[#E5E7EB] rounded-r-md md:h-8 md:w-7 sm:hidden hidden'/>
        </div>
    <div className='lg:flex lg:space-x-3 lg:pl-5 md:flex md:space-x-3 md:pl-2  sm:flex sm:space-x-3 sm:pr-2  flex space-x-3 pr-2'>
    <Heart />
    <ShoppingCart/>
    <span className='lg:hidden md:hidden sm:block block'> <Sheet1 /></span>
   
    </div>
       
        </div>
    </div>
    </div>
  )
}
