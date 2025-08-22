import { motion } from 'framer-motion';
import SalonCard from '../shared/SalonCard';
import { featuredSalons } from '../../data/featuredSalons';

interface FeaturedSalonsProps {
  onSalonClick: (salonId: string) => void;
}

const FeaturedSalons = ({ onSalonClick }: FeaturedSalonsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring' as const, 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="featured-salons">
      <div className="custom-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured{' '}
            <span className="font-dancing italic text-gray-700 relative">
              Salons
            </span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredSalons.map((salon) => (
            <motion.div
              key={salon.id}
              variants={itemVariants}
            >
              <SalonCard
                id={salon.id}
                name={salon.name}
                rating={salon.rating}
                reviewCount={salon.reviewCount}
                location={salon.location}
                image={salon.image}
                description={salon.description}
                onClick={onSalonClick}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSalons;
