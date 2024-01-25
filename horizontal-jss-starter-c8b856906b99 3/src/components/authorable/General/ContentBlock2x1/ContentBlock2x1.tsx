import { Field, Image, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import Slider from 'react-slick';
// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  ContentBlockItems2x1: contentBlockItemProps[];
  Title: Field<string>;
}
interface contentBlockItemProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Image: ImageField;
    Title: Field<string>;
    SubTitle: Field<string>;
    IconImage: IconImageProps[];
  };
}
interface IconImageProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    IconImage: ImageField;
  };
}

export type ContentBlock2x1Props = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};
const ContentBlock2x1 = ({ fields }: ContentBlock2x1Props): JSX.Element => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <Slider {...settings}>
          {fields?.ContentBlockItems2x1?.map((item) => (
            <div key={item?.id} className="bg-white p-4">
              <div className="relative">
                <Image field={item?.fields?.Image} className="w-full h-full" />
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="absolute -bottom-4 bg-white shadow-md shadow-gray-300 p-8 mx-2 ">
                    <Text
                      tag="h3"
                      className="text-xl font-bold text-black py-5"
                      field={item.fields.Title}
                    />
                    <Text tag="h3" className="text-green-400" field={item.fields.SubTitle} />
                    {/* <div className="flex my-4 justify-center items-center">
                      {item?.fields?.IconImage?.map((icon) => (
                        <Image
                          key={icon.id}
                          field={icon?.fields?.IconImage}
                          className="w-5 bg-black mx-2 rounded-xl  z-10"
                        />
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ContentBlock2x1;
