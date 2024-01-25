import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, Image, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  ContentBlock3x1Items: ContentBlockItems3x1Props[];
  Title: Field<string>;
}
interface ContentBlockItems3x1Props {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Image: ImageField;
    Title: Field<string>;
    Description: Field<string>;
  };
}

export type ContentBlock3x1Props = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};
const ContentBlock3x1 = ({ fields }: ContentBlock3x1Props): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="py-12 bg-[#f7f7f7]">
      <div data-component="authorable/general/ContentBlock3x1" data-testid="ContentBlock3x1">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <Text
              field={fields?.Title}
              tag="h4"
              className="text-black my-6 text-4xl font-bold font-sans cursor-pointer"
            />
          </div>
          <div className="mt-12 lg:flex md:justify-between items-center px-6 mx-4">
            {fields?.ContentBlock3x1Items?.map((item, index) => (
              <div
                key={index}
                className="bg-white m-7 p-5  cursor-pointer shadow-gray-400 shadow-md"
              >
                <div className="flex justify-center items-center ">
                  <Image
                    field={item?.fields?.Image}
                    className="w-50 h-full bg-white  rounded-full p-3  -mt-10  border-white  shadow-gray-400 shadow-md"
                  />
                </div>
                <div className="m-4 text-center relative">
                  <RichTextA11yWrapper
                    field={item?.fields?.Description}
                    className="text-black font-sans font-medium"
                  />
                  <Text tag="h6" field={item?.fields?.Title} className="text-green-400 my-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock3x1;
