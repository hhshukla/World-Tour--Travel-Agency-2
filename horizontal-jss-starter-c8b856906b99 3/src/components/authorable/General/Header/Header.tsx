import React, { useState } from 'react';
import { ImageField, LinkField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import clsx from 'clsx';

interface HeaderDataProps {
  NavigationLinks: multiMenusProps[];
  IconImage: SocialMediaProps[];
  Image: ImageField;
}
interface multiMenusProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Link: LinkField;
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
export type HeaderProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: HeaderDataProps;
};

const Header = ({ fields }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<number>();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="relative">
        <div className=" bg-[#162e44]  flex p-4 z-20 w-full">
          {/*For Desktop*/}
          <div className="hidden lg:flex">
            <ul className="flex">
              {fields?.NavigationLinks?.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer flex  items-center my-2"
                  onClick={() => setSelectedMenu(index)}
                >
                  <LinkWrapper
                    field={link?.fields?.Link}
                    className={clsx(
                      'mx-4 p-4 text-lg font-semibold cursor-pointer ',
                      index === selectedMenu
                        ? 'text-[#01b3a7] border-t-[#f3faf9] border-x-0 bg-white bg-opacity-10'
                        : 'text-white'
                    )}
                  />
                </li>
              ))}
            </ul>
            <ul className="flex">
              {fields?.IconImage?.map((icon, index) => (
                <li key={index} className="cursor-pointer flex  items-center my-2">
                  <Image
                    field={icon?.fields?.IconImage}
                    className="mx-4 p-4 text-lg font-semibold cursor-pointer hover:bg-[#01b3a7] rounded-md  w-16 h-16"
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* FOR Mobile */}

          <button onClick={toggleMenu} className=" lg:hidden flex justify-start">
            <Image field={fields?.Image} className="w-16 h-16" />
          </button>

          {isMenuOpen && (
            <div className="lg:hidden w-full">
              <ul className="text-center flex flex-col mt-5">
                {fields?.NavigationLinks?.map((link, index) => (
                  <li key={index} className="cursor-pointer flex  items-center my-2">
                    <LinkWrapper
                      field={link?.fields?.Link}
                      className={clsx(
                        'mx-4 p-4 text-lg font-semibold cursor-pointer hover:text-[#01b3a7] hover:border-4 hover:border-t-[#01b3a7] hover:border-b-0 hover:border-x-0 hover:bg-white hover:bg-opacity-10'
                      )}
                    />
                  </li>
                ))}
              </ul>
              <ul className="flex">
                {fields?.IconImage?.map((icon, index) => (
                  <li key={index} className="cursor-pointer flex  items-center my-2">
                    <Image
                      field={icon?.fields?.IconImage}
                      className="mx-4 p-4 text-lg font-semibold cursor-pointer hover:bg-[#01b3a7] rounded-md  w-16 h-16"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
