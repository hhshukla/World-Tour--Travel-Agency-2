import { Image, Text, ImageField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  GalleryItems: GalleryItemsProps[];
  Title: Field<string>;
}
interface GalleryItemsProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Images: ImageField;
    Title: Field<string>;
  };
}

export type GalleryProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Gallery = ({ fields }: GalleryProps): JSX.Element => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f7f7f7] pb-12">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <Text
          field={fields?.Title}
          tag="h3"
          className="text-center text-lg font-bold text-black bg-white p-3 w-1/4"
        />
      </div>
      <div className="my-8">
        <Slider {...settings}>
          {fields?.GalleryItems?.map((data, index) => (
            <>
              <Image field={data?.fields?.Images} key={index} className="w-full h-full p-3" />
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export const AboutGallery = ({ fields }: GalleryProps): JSX.Element => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f7f7f7] pb-12">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <Text
          field={fields?.Title}
          tag="h3"
          className="text-center text-lg font-bold text-black bg-white p-3 w-1/4"
        />
      </div>
      <div className="my-8">
        <Slider {...settings}>
          {fields?.GalleryItems?.map((data, index) => (
            <>
              <Image field={data?.fields?.Images} key={index} className="w-full h-full p-3" />
              <Text
                tag="h3"
                field={data?.fields?.Title}
                className="text-center text-lg font-bold text-black p-3 "
              />
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
