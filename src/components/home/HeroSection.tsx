import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../shared/Button";



function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <motion.div 
        className="max-w-[80%] flex flex-col lg:flex-row items-center gap-16 lg:gap-32"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="w-full lg:w-[45%] space-y-6 text-center lg:text-left"
          variants={fadeIn}
        >
          <motion.h1 
            className="capitalize text-3xl md:text-4xl lg:text-5xl leading-[1.3em] font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            a smooth salon experience near you always
          </motion.h1>
          
          <motion.p 
            className="font-extralight md:text-[20px] lg:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              text="Get Started"
              icon={<ArrowRight className="text-white" size={16} />}
              iconPosition="right"
              onClick={() => console.log("Button clicked")}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-full lg:w-[55%]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.img
            src="/src/assets/images/barber-img.png"
            alt="barber-img"
            className="w-full max-w-[200px] md:max-w-[500px] lg:max-w-[350px] mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.img
            src="/src/assets/images/crown.png"
            className="absolute top-[10%] right-[10%] md:right-[10%] md:w-20 md:h-20 lg:right-[19%]"
            alt="crown"
            animate={floatingAnimation}
          />
          
          <motion.img
            className="absolute top-[35%] left-[10%] md:top-[30%] md:w-20 md:h-20 md:left-[15%] lg:left-[20%]"
            src="/src/assets/images/arrow-curve.png"
            alt="curve-arrow"
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.5 }}
          />

          <motion.img
            className="absolute top-[40%] -right-[5%] md:right-[5%] md:w-20 md:h-20 lg:right-[10%] lg:w-[80px]"
            src="/src/assets/images/wriggle-line.png"
            alt="wriggle-line"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
              transition: { duration: 5, repeat: Infinity }
            }}
          />
          
          <motion.div 
            className="absolute -right-0 md:right-2 lg:-right-10 top-[95%]"
            animate={{ 
              x: [0, 10, 0],
              transition: { duration: 3, repeat: Infinity }
            }}typescript-eslint
          >
            <p className="font-delight text-[15px] md:text-[25px] lg:text-2xl capitalize">salon connect</p>
          </motion.div>
        </motion.div>
      </motion.div>
        
    </section>
  );
}

export default HeroSection;