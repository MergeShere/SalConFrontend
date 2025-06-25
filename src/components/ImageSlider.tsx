import Slider from 'react-slick';
import { GalleryImage } from '../types/carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';

interface ImageSliderProps {
  images: GalleryImage[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  return (
    <div className="relative max-w-md mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="h-[450px] relative overflow-hidden slick-image-slide"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />

            <div className="absolute bottom-4 w-full z-20 flex justify-center">
              <div className="flex gap-3 px-4 py-2 rounded-full">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => sliderRef.current?.slickGoTo(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === activeIndex
                        ? 'bg-white scale-125 opacity-100'
                        : 'bg-white/50 hover:opacity-80'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
