import { GalleryImage } from '../types/carousel';
import ImageSlider from './ImageSlider';

interface CarouselProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Hair styling session',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Beauty salon interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Hair cutting process',
  },
  {
    src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Styling tools',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Hair color treatment',
  },
];

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const gallery = images || defaultImages;

  return (
    <div className="w-full mx-auto relative">
      <div className="absolute bottom-0 w-full h-32 bg-red-600"></div>
      <ImageSlider images={gallery} />
    </div>
  );
};

export default Carousel;
