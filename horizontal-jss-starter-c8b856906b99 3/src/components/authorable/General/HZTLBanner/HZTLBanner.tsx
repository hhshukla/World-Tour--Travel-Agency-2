import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

interface HZTLBannerProps {
  Image: ImageField;
  Title: Field<string>;
  Content: Field<string>;
  CTAButton: LinkField;
  Description: Field<string>;
}
export type HZTLBannerDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: HZTLBannerProps;
};

const HZTLBanner = ({ fields }: HZTLBannerDataProps) => {
  return (
    <div>
      <div className=" flex flex-col justify-start items-start">
        <div className="relative w-full">
          <Image field={fields?.Image} className="w-full" />
          <div className="container mx-auto">
            <div className="md:absolute inset-0 flex flex-col justify-center items-start px-5 md:px-24 ">
              <div className="bg-white bg-opacity-10  border-2 p-3 lg:p-5  rounded-xl">
                <div className="mb-[16px] block h-[2px] w-[78px] bg-gradient-to-r from-[#26D9B5] to-[#00576B]"></div>
                <Text
                  tag="h3"
                  className="text-start font-bold text-lg md:text-5xl"
                  field={fields?.Title}
                />
                <Text
                  tag="h4"
                  className="text-start font-normal text-base md:text-3xl py-2 md:py-5"
                  field={fields?.Content}
                />

                <RichTextA11yWrapper
                  className="text-start font-normal text-base md:text-3xl py-2 md:py-5 my-4"
                  field={fields?.Description}
                />
                <div className="mb-5">
                  <LinkWrapper
                    className="py-2 md:py-5 text-start font-normal text-xl px-5 bg-white text-black cursor-pointer hover:bg-green-300 hover:text-white rounded-xl"
                    field={fields?.CTAButton}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HZTLBanner;
