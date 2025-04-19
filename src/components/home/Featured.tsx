import { motion } from 'framer-motion';
import FeaturedCard from '../shared/FeaturedCard';
import featured_img_1 from '../../assets/images/featured-img-1.png';
import featured_img_2 from '../../assets/images/featured-img-2.png';
import featured_img_3 from '../../assets/images/featured-img-3.png';

const Featured = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <section className="my-16 pt-10 pb-20" id="featured">
      <div className="custom-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-center text-text-dark-clr text-4xl font-bold">
            Featured Hair{' '}
            <span className="font-dancing italic text-3xl relative">Stylists</span>
          </h1>
        </motion.div>

        <motion.div 
          className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredUsers.map((user, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <FeaturedCard
                name={user.name}
                title={user.title}
                image={user.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;

const featuredUsers = [
  {
    name: 'Ellen DeGraft',
    title: 'Hair Stylist',
    image: featured_img_1,
  },
  {
    name: 'George Koomson',
    title: 'Barber',
    image: featured_img_2,
  },
  {
    name: 'Karen McCarthy',
    title: 'Makeup Artist',
    image: featured_img_3,
  },
  {
    name: 'Lisa Adu',
    title: 'Nail Technician',
    image: featured_img_1,
  },
  {
    name: 'Kwame Osei',
    title: 'Hair Colorist',
    image: featured_img_2,
  },
  {
    name: 'Naomi Boateng',
    title: 'Lash Technician',
    image: featured_img_3,
  },
];