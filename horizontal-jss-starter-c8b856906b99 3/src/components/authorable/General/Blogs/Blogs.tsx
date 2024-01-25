import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import FontAwesomeIcon from '@/components/helpers/FontAwesomeIcon/FontAwesomeIcon';

interface BlogPostPropsFields {
  BlogPost: BlogPostProps[];
}
interface BlogPostProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Image: ImageField;
    MainTitle: Field<string>;
    QuoteText: Field<string>;
    Link: LinkField;
    Description: Field<string>;
    SubDescription: Field<string>;
    SocialMediaLinks: SocialMediaProps[];
    quoteAuthorName: Field<string>;
    Date: Field<string>;
  };
}
interface SocialMediaProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    IconImage: ImageField;
    EventCTA: LinkField;
  };
}
export type BlogPostDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: BlogPostPropsFields;
};

const Blog = ({ fields }: BlogPostDataProps) => {
  return (
    <div className="bg-white">
      {fields?.BlogPost?.map((post, index) => (
        <div key={index}>
          <div>
            <div className="flex justify-start items-center container mx-auto">
              <div className="flex flex-col justify-center items-start p-5">
                <Text
                  tag="h4"
                  field={post?.fields?.MainTitle}
                  className="text-base md:text-2xl mx-4 my-4 font-semibold text-black"
                />
                <RichTextA11yWrapper
                  field={post?.fields?.Description}
                  className="text-base md:text-lg mx-4 my-4 font-normal font-mono text-gray-500"
                />
                <Image field={post?.fields?.Image} className="w-full  overflow-hidden" />

                <div className="relative py-5">
                  <div className="absolute -left-5 md:-left-10 top-8">
                    <FontAwesomeIcon icon="quote-left" className="w-10 h-10 text-[#01b3a7]" />
                  </div>
                  <Text
                    tag="h3"
                    field={post?.fields?.QuoteText}
                    className="text-base md:text-2xl mx-4 my-5 font-normal text-black"
                  />
                  <div className="absolute right-0 bottom-0">
                    <FontAwesomeIcon icon="quote-right" className="w-10 h-10 text-[#01b3a7]" />
                  </div>
                </div>
                <RichTextA11yWrapper
                  field={post?.fields?.SubDescription}
                  className="text-base md:text-xl mx-4 my-4 font-normal text-gray-500 font-mono"
                />
                <div className="flex">
                  {post?.fields?.SocialMediaLinks?.map((link, index) => (
                    <div key={index}>
                      <Image
                        field={link?.fields?.IconImage}
                        className="mx-4 p-4 text-lg font-semibold cursor-pointer bg-black hover:bg-[#01b3a7] rounded-md  w-16 h-16"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
