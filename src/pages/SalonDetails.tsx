import DetailedPageGallery from '../components/DetailedPageGallery';
import Carousel from '../components/Carousel';

const SalonDetails = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto my-8 grid gap-8 grid-cols-1 lg:grid-cols-2">
        <Carousel />
        <DetailedPageGallery />
      </div>
    </section>
  );
};

export default SalonDetails;
