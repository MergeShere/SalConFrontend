import { motion } from 'framer-motion';
import TestimonialCard from "../shared/testimonialCard";
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 100 }
        }
    };

    return (
        <section className="py-24 bg-gray-50" id="testimonials">
            <div className="custom-container px-4 md:px-8 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-center text-text-dark-clr font-poppins font-medium text-4xl leading-none tracking-normal">
                        What our{" "}
                        <span className="text-primary text-2xl font-light font-dancing relative top-[-6px] italic">
                            Clients
                        </span>{" "}
                        say
                    </h1>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <TestimonialCard
                                rating={testimonial.rating}
                                testimony={testimonial.testimony}
                                image={testimonial.image}
                                name={testimonial.name}
                                role={testimonial.role}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
