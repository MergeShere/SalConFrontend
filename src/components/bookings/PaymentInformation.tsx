import Button from "../shared/Button"

function PaymentInformation() {
  return (
  <div>
    <div className="p-5 rounded-md  w-full lg:w-[70%] sm:place-self-end lg:place-self-end bg-[#fafafa]">
        <h1 className="capitalize font-jarkataBold">booking details</h1>
        <div className="mt-10">
            <p className="font-jarkataLight capitalize text-[#52525B]">no services selected</p>
            <div className="mt-3 bg-[#ccc] h-[1px] w-full"/>
        </div>
        
        <div>
            <div className="mt-3 font-jarkataBold flex items-center justify-between">
            <p className=" capitalize ">total</p>
            <p className="uppercase">ghs 0</p>
         </div>
          <div className="mt-1 bg-[#ccc] h-[1px] w-full"/>
        </div>


        <Button text="continue"
         className="w-full
          font-jarkataBold
          bg-[#eaeaea]
          text-center 
          sm:text-[12px]
          lg:text-[18px]
          justify-center mt-[10rem] md:mt-[15rem] lg:mt-[20rem]"/>

    </div>
    </div>

  )
}

export default PaymentInformation