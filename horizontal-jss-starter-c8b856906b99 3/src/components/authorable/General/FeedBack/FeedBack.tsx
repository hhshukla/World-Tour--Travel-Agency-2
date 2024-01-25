import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';

interface BlogPostPropsFields {
  Title: Field<string>;
  FeedBackList: FeedBackListProps[];
}
interface FeedBackListProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Image: ImageField;
    Name: Field<string>;
    Description: Field<string>;
    Link: LinkField;
  };
}

export type BlogPostDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: BlogPostPropsFields;
};

const Banner = ({ fields }: BlogPostDataProps) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <Text
          tag="h3"
          field={fields?.Title}
          className="text-base md:text-4xl mx-4 my-4 font-semibold text-black text-center"
        />
        {fields?.FeedBackList?.map((list, index) => (
          <div key={index}>
            <div className="md:flex justify-start items-start p-[25px]">
              <Image field={list?.fields?.Image} className="my-2 " />

              <div className="flex flex-col justify-center items-start md:px-5 border-b-2 border-gray-200">
                <Text
                  tag="h4"
                  field={list?.fields?.Name}
                  className="text-base md:text-2xl   font-semibold text-black cursor-pointer hover:text-brand-primary"
                />
                <RichTextA11yWrapper
                  field={list?.fields?.Description}
                  className="text-base md:text-lg my-4 font-normal font-mono text-gray-500"
                />
                <LinkWrapper
                  field={list?.fields?.Link}
                  className="text-base md:text-lg my-4 font-normal font-mono text-black rounded-3xl border-[1px] border-black hover:text-brand-primary hover:bg-black p-2 bg-brand-primary"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
