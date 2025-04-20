import FeaturedCard from '../shared/FeaturedCard';
import featured_img_1 from '../../assets/images/featured-img-1.png';
import featured_img_2 from '../../assets/images/featured-img-2.png';
import featured_img_3 from '../../assets/images/featured-img-3.png';

const Featured = () => {
  return (
    <section className="my-8">
      <div className="custom-container">
        <h1 className="text-center text-text-dark-clr text-3xl font-bold">
          Featured Hair <i>Styles</i>
        </h1>

        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredUsers.map((user, index) => (
            <FeaturedCard
              key={index}
              name={user.name}
              title={user.title}
              image={user.image}
            />
          ))}
        </div>
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
