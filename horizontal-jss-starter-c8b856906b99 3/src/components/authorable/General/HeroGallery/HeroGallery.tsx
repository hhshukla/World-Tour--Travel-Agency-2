import { Image, Text, ImageField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  HeroGalleryList: HeroGalleryListProps[];
}
interface HeroGalleryItemsProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Image: ImageField;
    Title: Field<string>;
    SubTitle: Field<string>;
  };
}
interface HeroGalleryListProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    ListTitle: Field<string>;
    HeroGalleryItems: HeroGalleryItemsProps[];
  };
}

export type HeroGalleryProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const HeroGallery = ({ fields }: HeroGalleryProps): JSX.Element => {
  const [selectedListIndex, setSelectedListIndex] = useState<number>(0);

  return (
    <div className="bg-[#f7f7f7] pb-12">
      <div className="container mx-auto">
        <div className="flex py-12 justify-center">
          {fields?.HeroGalleryList?.map((list, index) => (
            <div key={index}>
              <Text
                tag="li"
                field={list?.fields?.ListTitle}
                className={`px-5 text-xl font-medium list-none cursor-pointer border-r-2   ${
                  index === selectedListIndex ? ' text-[#50ba87]' : 'text-gray-400 '
                }`}
                onClick={() => setSelectedListIndex(index)}
              />
            </div>
          ))}
        </div>

        <div>
          {selectedListIndex !== null && (
            <div>
              <Text field={fields?.HeroGalleryList[selectedListIndex]?.fields?.ListTitle} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {fields?.HeroGalleryList[selectedListIndex]?.fields?.HeroGalleryItems?.map(
                  (subitem, index) => (
                    <div className="my-5 text-start" key={index}>
                      <a className="cursor-pointer">
                        <Image field={subitem?.fields?.Image} />
                      </a>
                      <div className="my-5">
                        <Text
                          tag="h4"
                          field={subitem?.fields?.Title}
                          className="text-black  text-xl font-medium cursor-pointer hover:text-[#50ba87] "
                        />
                        <Text
                          tag="h5"
                          field={subitem?.fields?.SubTitle}
                          className="text-black  text-xl font-light "
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroGallery;
