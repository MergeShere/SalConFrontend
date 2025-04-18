import { navLinks } from "../lib/data"
import {Link, useLocation} from "react-router-dom"
import { RiLockUnlockLine } from "react-icons/ri";

import Button from "./shared/Button"
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { CgMenuOreos } from "react-icons/cg";
import { useState } from "react";



function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const [showToggle, setShowToggle] = useState(false)

    function handleToggleShow(){
        setShowToggle((prev)=>!prev)
    }

  return (
  <div className="relative">
    <nav className="p-2 flex items-center justify-between mx-5 lg:mx-10 pb-10 lg:pb-20">
        <div className="flex items-center">

        <div className="flex items-center justify-center">
              <img 
                src="/src/assets/images/Salon Connect-02 1.png" 
                alt="SalonConnect Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:h-20 object-contain" 
              />
        </div>

        <div className="hidden lg:block">
        {navLinks.map((items,index)=>(
                <Link 
                  to={items.href}
                className={clsx(`py-5 px-10  border-zinc-800
                 first:border-zinc-800 `,{
                    'bg-softBlend uppercase':pathname===items.href
                 })} key={index}>
                    {items.name}
                </Link>
             ))}

        </div>

        </div>

        <div className="hidden lg:flex items-center space-x-10">
            <Button text="sign in" icon={<RiLockUnlockLine/>} iconPosition="left" className="bg-transparent text-black text-[16px] hover:bg-transparent"/>
                <img src="/src/assets/images/vertical-line.jpg" alt="pad-bar"/>
            <Button text="sign up " icon={<ArrowRight/>} iconPosition="right" className="bg-transparent text-black text-[16ox] border-4 border-black hover:bg-transparent "/>
            
        </div>

        <div className=" block lg:hidden">
            <CgMenuOreos className="text-3xl" onClick={handleToggleShow}/>
        </div>
    </nav>
    
    {showToggle && (
         <div className='fixed h-[100vh]  bg-[#fff] w-[50%] z-50 top-0 border border-t-0 border-l-0 border-zinc-800'>

        <div className='flex flex-col items-center text-[18px]  capitalize'>
            
            {navLinks.map((items,index)=>(
                <Link 
                  to={items.href}
                className={clsx(`py-5 px-10  border-zinc-800
                 first:border-zinc-800 `,{
                    'bg-softBlend uppercase':pathname===items.href
                 })} key={index}>
                    {items.name}
                </Link>
             ))}

             <div className="space-y-5">
                <Button text="sign in" icon={<RiLockUnlockLine/>} iconPosition="left" className="bg-transparent text-black text-[20px] hover:bg-transparent"/>
                <Button text="sign up " icon={<ArrowRight/>} iconPosition="right" className="bg-transparent text-black text-[15px] lg:text-[20px] border-4 border-black hover:bg-transparent "/>
            
             </div>

             </div>

        </div>
    )}

    </div>
  )
}

export default Navbar