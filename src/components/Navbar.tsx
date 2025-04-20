import { navLinks } from "../lib/data"
import { useLocation, useNavigate } from "react-router-dom"
import { RiLockUnlockLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Button from "./shared/Button"
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { CgMenuOreos } from "react-icons/cg";
import { useState, useEffect } from "react";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    const [showToggle, setShowToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleToggleShow() {
        setShowToggle((prev) => !prev);
    }

    const scrollToSection = (sectionId: string) => {
        setShowToggle(false);

        if (sectionId === 'services') {
            // Services not implemented yet, just close the menu
            return;
        }
        
        sectionId = sectionId.replace('/', '');
        
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <motion.nav 
                className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 py-2 px-4 sm:px-8 ${
                    scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <motion.div 
                            className="flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img 
                                src="/src/assets/images/Salon Connect-02 1.png" 
                                alt="SalonConnect Logo" 
                                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 object-contain" 
                            />
                        </motion.div>

                        <div className="hidden lg:block ml-4">
                            {navLinks.map((item, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className={clsx(`py-3 px-6 border-zinc-800 first:border-zinc-800 cursor-pointer`, {
                                        'bg-softBlend uppercase': pathname === item.href
                                    })}
                                    whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button 
                                text="sign in" 
                                icon={<RiLockUnlockLine/>} 
                                onClick={() => navigate('/login')}
                                iconPosition="left" 
                                className="bg-transparent text-black text-[16px] hover:bg-transparent"
                            />
                        </motion.div>
                        <img src="/src/assets/images/vertical-line.jpg" alt="pad-bar"/>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button 
                                text="sign up" 
                                icon={<ArrowRight/>} 
                                iconPosition="right" 
                                className="bg-transparent text-black text-[16px] border-4 border-black hover:bg-transparent"
                                onClick={() => navigate('/signup')}
                            />
                        </motion.div>
                    </div>

                    <motion.div 
                        className="block lg:hidden"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CgMenuOreos className="text-3xl cursor-pointer" onClick={handleToggleShow}/>
                    </motion.div>
                </div>
            </motion.nav>
            
            {/* Mobile menu */}
            {showToggle && (
                <motion.div 
                    className='fixed h-[100vh] bg-[#fff] w-[50%] z-50 top-0 border border-t-0 border-l-0 border-zinc-800'
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                >
                    <div className='flex flex-col items-center text-[18px] capitalize mt-20'>
                        {navLinks.map((item, index) => (
                            <motion.button
                                onClick={() => scrollToSection(item.href)}
                                className={clsx(`py-3 px-6 border-zinc-800 first:border-zinc-800 w-full`, {
                                    'bg-softBlend uppercase': pathname === item.href
                                })}
                                key={index}
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}

                        <div className="space-y-5 mt-6">
                            <Button 
                                text="sign in" 
                                icon={<RiLockUnlockLine/>}
                                onClick={() => navigate('/login')}                                 
                                iconPosition="left" 
                                className="bg-transparent text-black text-[20px] hover:bg-transparent"
                            />
                            <Button 
                                text="sign up" 
                                icon={<ArrowRight/>} 
                                iconPosition="right" 
                                className="bg-transparent text-black text-[15px] lg:text-[20px] border-4 border-black hover:bg-transparent"
                                onClick={() => navigate('/signup')}
                            />
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Empty div to push content down to compensate for fixed navbar */}
            <div className="h-20"></div>
        </div>
    );
}

export default Navbar;