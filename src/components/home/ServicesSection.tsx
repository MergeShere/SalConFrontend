import React from "react";  
import service_img_1 from '../../assets/images/service-img-1.png';
import service_img_2 from '../../assets/images/service-img-2.png';
import service_img_3 from '../../assets/images/service-img-3.png';
import service_img_4 from '../../assets/images/service-img-4.png';
import service_img_5 from '../../assets/images/service-img-5.png';

const services = [
  {
    title: "Salon Discovery",
    description: "View all salons connected in near you",
    icon: <img src={service_img_1} alt="Salon Discovery Icon" />,
  },
  {
    title: "Booking System",
    description: "Schedule appointments with ease",
    icon: <img src={service_img_2} alt="Salon Discovery Icon" />,
  },
  {
    title: "Payment Feature",
    description: "Secure, fast and convenient transactions",
    icon: <img src={service_img_3} alt="Salon Discovery Icon" />,
  },
  {
    title: "Multiple Shops & Ratings",
    description: "Compare salons based on services and customer reviews",
    icon: <img src={service_img_4} alt="Salon Discovery Icon" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#1E1E1E] text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="font-poppins text-3xl md:text-4xl font-semibold">
          Providing Customers with <span className="font-dancing italic">Premium</span> Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-white/80 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
