import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import Slider from 'react-slick';
import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import FontAwesomeIcon from '@/components/helpers/FontAwesomeIcon/FontAwesomeIcon';

interface BannerFields {
  BannerSlides: BannerSlidesProps[];
}
interface BannerSlidesProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Image: ImageField;
    Title: Field<string>;
    SubTitle: Field<string>;
    CTAbutton: LinkField;
    Description: Field<string>;
  };
}
export type bannerDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: BannerFields;
};

const Banner = ({ fields }: bannerDataProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,

    beforeChange: function (currentSlide: unknown, nextSlide: unknown) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: unknown) {
      console.log('after change', currentSlide);
    },
  };
  return (
    <div>
      <Slider {...settings}>
        {fields?.BannerSlides?.map((slide, index) => (
          <div key={index}>
            <div>
              <div>
                <div className="relative top-0">
                  <Image field={slide?.fields?.Image} className="w-full  overflow-hidden" />
                  <div className="absolute  inset-0 flex justify-start items-center container mx-auto">
                    <div className="flex flex-col justify-center items-start p-5">
                      <Text
                        tag="h4"
                        field={slide?.fields?.Title}
                        className="text-base md:text-2xl mx-4 my-2 font-semibold"
                      />
                      <Text
                        tag="h4"
                        field={slide?.fields?.SubTitle}
                        className="text-lg md:text-5xl mx-4 my-2 font-bold"
                      />
                      <LinkWrapper
                        field={slide?.fields?.CTAbutton}
                        className="md:text-xl mx-4 my-2 font-bold border-2 border-white p-2 mt-2 md:mt-5 cursor-pointer hover:bg-white hover:text-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export const SecondaryBanner = ({ fields }: bannerDataProps) => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-white py-20">
      <div className="shadow-lg shadow-black container mx-auto p-6">
        <Slider {...settings}>
          {fields?.BannerSlides?.map((slide, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <Image field={slide?.fields?.Image} className="rounded-full" />
              </div>

              <div className="flex flex-col justify-center items-center p-5 relative select-text ">
                <div className="absolute left-0 -top-3">
                  <FontAwesomeIcon icon="quote-left" className="w-10 h-10 text-[#01b3a7]" />
                </div>

                <RichTextA11yWrapper
                  field={slide?.fields?.Description}
                  className="text-lg md:text-2xl mx-4 my-2 font-normal text-black text-center select-all "
                />
                <div className="absolute right-0 bottom-1">
                  <FontAwesomeIcon icon="quote-right" className="w-10 h-10 text-[#01b3a7]" />
                </div>
                <Text
                  tag="h4"
                  field={slide?.fields?.Title}
                  className="text-base md:text-xl w-full text-center  p-2 font-medium cursor-pointer text-black hover:text-[#50ba87] select-all"
                />

                <Text
                  tag="h4"
                  field={slide?.fields?.SubTitle}
                  className="text-lg  mx-4 my-2 font-normal text-[#01b3a7] select-all"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
