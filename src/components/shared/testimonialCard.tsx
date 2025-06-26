import { motion } from 'framer-motion';

type Props = {
    rating: number; // Rating out of 5
    testimony: string;
    image: string; // URL of the person's image
    name: string;
    role: string; // Role of the person, e.g., "Customer"
};

export default function TestimonialCard({ rating, testimony, image, name, role }: Props) {
    return (
        <motion.div 
            className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            whileHover={{ 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                borderColor: "rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
            }}
        >
            {/* Rating at the top */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                    <motion.span 
                        key={i} 
                        className={i < rating ? "text-yellow-400" : "text-gray-300"}
                        initial={{ opacity: 0.7 }}
                        whileHover={{ 
                            scale: 1.2, 
                            opacity: 1,
                            rotate: i < rating ? [0, -10, 10, -10, 0] : 0,
                            transition: { 
                                duration: 0.3,
                                rotate: { duration: 0.5, ease: "easeInOut" }
                            }
                        }}
                    >
                        ★
                    </motion.span>
                ))}
            </div>

            {/* Testimony below rating */}
            <p className="text-sm text-gray-700 mb-6">{testimony}</p>

            {/* Image + Name + Role section */}
            <div className="flex items-center gap-4 mt-2">
                <motion.img 
                    src={image} 
                    alt={name} 
                    className="w-12 h-12 rounded-full" 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
                <div>
                    <motion.h3 
                        className="text-lg font-semibold"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1, x: 2 }}
                        transition={{ duration: 0.2 }}
                    >
                        {name}
                    </motion.h3>
                    <motion.p 
                        className="text-sm text-gray-500"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {role}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}