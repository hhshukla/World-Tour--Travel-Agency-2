import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import FontAwesomeIcon from 'components/helpers/FontAwesomeIcon/FontAwesomeIcon';

import React from 'react';
interface Fields {
  InformationLinks: InformationLinksProps[];
  NavigationLinks: NavigationProps[];
  PopularNews: PopularNewsProps[];
  NavigationLinksTitle: Field<string>;
  PopularNewsTitle: Field<string>;
  CTAbutton: LinkField;
  Title: Field<string>;
}
interface InformationLinksProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    IconImage: ImageField;
    Text: Field<string>;
  };
}
interface NavigationProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Link: LinkField;
  };
}
interface PopularNewsProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    SubText: Field<string>;
    Date: Field<string>;
  };
}
export type FooterProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Footer = ({ fields }: FooterProps) => {
  return (
    <div className="bg-[#14183e] relative  py-[120px]">
      <div className="container mx-auto px-[25px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
          <div>
            <Text
              tag="h3"
              className="text-4xl font-bold text-white mb-4 font-mono"
              field={fields?.Title}
            />
            <div>
              {fields?.InformationLinks?.map((information, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    field={information?.fields?.IconImage}
                    className="mx-2 w-[50px] h-[50px]"
                  />
                  <Text
                    tag="h5"
                    field={information?.fields?.Text}
                    className="text-base text-white hover:text-[#01b3a7] cursor-pointer m-4"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Text
              tag="h3"
              field={fields?.PopularNewsTitle}
              className="text-white text-[28px] font-bold leading-[34px] mb-6 font-mono"
            />
            {fields?.PopularNews?.map((news, index) => (
              <div key={index}>
                <Text
                  tag="h5"
                  field={news?.fields?.SubText}
                  className="text-base text-[#01b3a7] hover:text-[#50ba87] cursor-pointer mb-4"
                />
                <Text tag="h5" field={news?.fields?.Date} className="text-base text-white mb-4" />
              </div>
            ))}
          </div>

          <div>
            <Text
              tag="h3"
              field={fields?.NavigationLinksTitle}
              className="text-white text-[28px] font-bold leading-[34px] mb-6 font-mono"
            />
            {fields?.NavigationLinks?.map((services, index) => (
              <div
                key={index}
                className="flex text-center items-center cursor-pointer hover:text-[#50ba87]"
              >
                <FontAwesomeIcon icon="angle-right" className="w-[20px] h-[20px] " />
                <LinkWrapper
                  field={services?.fields?.Link}
                  className="text-base text-white hover:text-[#50ba87]  my-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
