import React, { useState } from 'react';
import { ImageField, Text, Image, Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';

interface SubHeaderDataProps {
  multiMenus: multiMenusProps[];
  ImageLogo: ImageField;
  Icon: ImageField;
  CTA: LinkField;
}
interface multiMenusProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    IconImage: ImageField;
    Text: Field<string>;
    CTA: LinkField;
  };
}
export type SubHeaderProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: SubHeaderDataProps;
};

const SubHeader = ({ fields }: SubHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      <div className="bg-white p-4  w-full ">
        <div>
          <div className="flex  justify-between items-center px-[15px]">
            <div>
              <Image className="text-4xl font-bold text-white" field={fields?.ImageLogo} />
            </div>
            {/* FOR Mobile */}
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <Image field={fields?.Icon} className="w-full" />
              </button>
            </div>
            {/* For Desktop */}
            <div className="hidden md:flex  md:items-center">
              <ul className="flex">
                {fields?.multiMenus?.map((item, index) => (
                  <li key={index} className="cursor-pointer flex justify-center items-center">
                    <Image field={item?.fields?.IconImage} className="mx-4" />

                    <Text
                      tag="h5"
                      className="text-base text-black font-bold font-mono hover:text-[#01B3A6] hover:bg-white p-2 rounded-lg"
                      field={item?.fields?.Text}
                    />
                  </li>
                ))}
              </ul>
              <LinkWrapper
                field={fields?.CTA}
                className="md:text-xl text-center mx-4 my-2 font-bold border-2  p-3  cursor-pointer  text-black border-[#01b3a7] hover:bg-[#50ba87] hover:text-white"
              />
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden w-full">
              <ul className="text-center flex flex-col mt-5">
                {fields?.multiMenus?.map((item, index) => (
                  <li key={index} className="cursor-pointer flex  items-center my-2">
                    <Image field={item?.fields?.IconImage} className="mx-4" />
                    <Text
                      tag="h5"
                      className="text-base text-black  font-bold font-mono"
                      field={item?.fields?.Text}
                    />
                  </li>
                ))}
              </ul>
              <div className="my-4">
                <LinkWrapper
                  field={fields?.CTA}
                  className="md:text-xl text-center mx-4  font-bold border-2  p-3  cursor-pointer  text-black border-[#01b3a7] hover:bg-[#50ba87] hover:text-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
