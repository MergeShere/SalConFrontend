import { ArrowRight } from "lucide-react";
import Button from "../shared/Button";

function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="max-w-[80%] flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ">
        
   
        <div className="w-full lg:w-[45%] space-y-6 text-center lg:text-left">
          <h1 className="capitalize text-3xl lg:text-5xl leading-[1.3em]  font-poppins">
            a smooth salon experience near you always
          </h1>
          <p className="font-extralight md:text-base lg:text-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          </p>

          <Button
        text="Get Started"
         icon={<ArrowRight className="text-white" size={16} />}
        iconPosition="right"
       onClick={() => console.log("Button clicked")}
    />
        </div>


        <div className="relative w-full lg:w-[55%]">
          <img
            src="/src/assets/images/barber-img.png"
            alt="barber-img"
            className="w-full max-w-[200px]  md:max-w-[300px] lg:max-w-[350px] mx-auto"
          />
          
          <img
            src="/src/assets/images/crown.png"
            className="absolute top-[10%] right-[10%] md:right-[25%] lg:right-[19%] "
            alt="crown"
          />
          
          <img
            className="absolute top-[35%] left-[10%] md:top-[40%] md:left-[25%] lg:left-[20%]"
            src="/src/assets/images/arrow-curve.png"
            alt="curve-arrow"
          />

          <img
            className="absolute  top-[40%] -right-[5%] md:right-[20%] lg:right-[10%] lg:w-[80px]"
            src="/src/assets/images/wriggle-line.png"
            alt="wriggle-line"
          />
          
          <div className="absolute -right-0  md:right-20  lg:-right-10 top-[95%] ">
            <p className="font-delight text-[15px] md:text-[20px]  lg:text-2xl  capitalize">salon connect</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
