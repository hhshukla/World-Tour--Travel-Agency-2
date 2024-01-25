import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, Image, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

interface MarqueeData {
  Title: Field<string>;
  Content: Field<string>;
  CTAButton: LinkField;
  ImageColumns: ImageColumnsData[];
}

interface ImageColumnsData {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Lists: ListData[];
  };
}
interface ListData {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Image: ImageField;
  };
}
export type MarqueeDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: MarqueeData;
};
const Marquee = ({ fields }: MarqueeDataProps) => {
  return (
    <>
      <div className="bg-[#00232b] lg:h-[500px] ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="p-10 flex flex-col justify-start items-start">
              <div className="mb-[16px] block h-[2px] w-[78px] bg-gradient-to-r from-[#26D9B5] to-[#00576B]"></div>
              <Text tag="h4" className="text-start font-bold text-5xl" field={fields?.Title} />
              <Text
                tag="h5"
                className="text-start font-normal text-3xl py-5"
                field={fields.Content}
              />
              <LinkWrapper
                className="text-start font-normal text-xl p-3 bg-white text-black cursor-pointer hover:bg-green-300 hover:text-white rounded-full"
                field={fields?.CTAButton}
              />
            </div>
            <div className="grid grid-cols-5 overflow-hidden h-[500px] py-12  height-[700px] ">
              {fields?.ImageColumns?.map((img, index) => (
                <>
                  <div className="animate-marquee1 px-2 md:px-5" key={index}>
                    <div key={index}>
                      <Image
                        field={img?.fields?.Lists[0]?.fields?.Image}
                        className="w-full md:w-[200px] h-[200px]  rounded-xl my-4"
                      />
                    </div>
                  </div>
                  <div className="animate-marquee2 px-2 md:px-5" key={index}>
                    <div key={index}>
                      <Image
                        field={img?.fields?.Lists[1]?.fields?.Image}
                        className="w-full md:w-[200px] h-[200px]  rounded-xl my-4"
                      />
                    </div>
                  </div>
                  <div className="animate-marquee3 px-2 md:px-5" key={index}>
                    <div key={index}>
                      <Image
                        field={img?.fields?.Lists[2]?.fields?.Image}
                        className="w-full md:w-[200px] h-[200px]  rounded-xl my-4"
                      />
                    </div>
                  </div>
                  <div className="animate-marquee4 px-2 md:px-5" key={index}>
                    <div key={index}>
                      <Image
                        field={img?.fields?.Lists[3]?.fields?.Image}
                        className="w-full md:w-[200px] h-[200px]  rounded-xl my-4"
                      />
                    </div>
                  </div>
                  <div className="animate-marquee5 px-2 md:px-5" key={index}>
                    <div key={index}>
                      <Image
                        field={img?.fields?.Lists[4]?.fields?.Image}
                        className="w-full md:w-[200px] h-[200px]  rounded-xl my-4"
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
