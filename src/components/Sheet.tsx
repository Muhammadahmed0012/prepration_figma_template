import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu, Search } from "lucide-react"

  import React from 'react'
  
  export default function Sheet1() {
    return (
        
      <Sheet>
      <SheetTrigger> <Menu/></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <ul className="sm:flex sm:flex-col sm:items-center sm:text-xl sm:font-extralight sm:mt-14 space-y-10 flex flex-col items-center text-xl font-extralight mt-14 text-white">
         <li><a href="">Home</a></li> 
          <li><a href="">contact</a></li> 
          <li><a href="">About</a></li> 
          <li><a href="">Sign Up</a></li>
          <div className='sm:flex sm:items-center flex items-center'>
           <input type="search" placeholder='What are you looking for?'  className='sm:flex sm:items-center sm:pl-2 lg:text-sm sm:font-semibold sm:w-60 sm:h-8 sm:rounded-l-md flex items-center pl-2 text-sm font-semibold w-56 h-8 rounded-l-md  bg-[#E5E7EB]'/>
           <Search className='sm:h-8 sm:w-7 bg-[#E5E7EB] text-black rounded-r-md h-8 w-7 '/>
           </div>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    
    )
  }
