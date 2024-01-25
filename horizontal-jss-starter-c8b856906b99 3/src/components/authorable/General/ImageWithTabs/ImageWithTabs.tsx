// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, ImageField, Text, Image, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  Tabs: TabsDataProps[];
  Title: Field<string>;
  Image: ImageField;
}
interface TabsDataProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: Field<string>;
    EventCTA: LinkField;
    Description: Field<string>;
    CTALink: LinkField;
  };
}

export type ImageWithTabsProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

export const ImageWithTabs = ({ fields }: ImageWithTabsProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div
      className="py-12 bg-[#f7f7f7]"
      data-component="authorable/general/ImageWithTabs"
      data-testid="ImageWithTabs"
    >
      <div className="container mx-auto">
        <div className="mt-12 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-8 items-start">
          <div className="">
            <Image field={fields?.Image} className="px-2 lg:mx-2 w-full" />
          </div>
          <div className="m-4 ">
            <Text
              field={fields?.Title}
              tag="h4"
              className="text-black mb-4 text-4xl font-bold font-sans cursor-pointer text-start mx-4"
            />
            <div className="lg:flex items-center justify-center mx-4 lg:border-2 lg:border-b-gray-300 lg:border-x-0 lg:border-t-0">
              {fields?.Tabs?.map((tab, index) => (
                <div
                  key={index}
                  className="mx-4  mt-2 border-2 border-y-gray-300 lg:border-y-0 border-x-0  hover:border-x-0 hover:border-y-[#01b3a7] hover:border-2 lg:hover:border-y-0"
                >
                  <div className="cursor-pointer" onClick={() => setSelectedTab(index)}>
                    <div className="text-center w-full px-4">
                      <Text
                        tag="h3"
                        field={tab?.fields?.Title}
                        className={`text-xl font-medium font-mono hover:text-[#01b3a7] ${
                          selectedTab === index
                            ? 'border-t-0 border-x-0 lg:border-b-[#01b3a7] border-2 text-[#01b3a7]'
                            : 'text-gray-400 '
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedTab !== null && (
              <div className="px-4 mt-4">
                <Text
                  tag="p"
                  field={fields?.Tabs[selectedTab]?.fields?.Description}
                  className="text-black text-sm font-sans my-6 text-center lg:text-start"
                />
                <div className="flex justify-center lg:justify-start">
                  <LinkWrapper
                    field={fields?.Tabs[selectedTab]?.fields?.CTALink}
                    className="text-white font-semibold text-base font-sans bg-[#01b3a7] hover:text-[#01b3a7] hover:bg-white p-4 border-2 border-white mx-2"
                  />
                  <LinkWrapper
                    field={fields?.Tabs[selectedTab]?.fields?.EventCTA}
                    className="text-white font-semibold text-base font-sans bg-[#01b3a7] hover:text-[#01b3a7] hover:bg-white p-4 border-2 border-white mx-2"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<CardListProps>(ImageWithTabs);
export default ImageWithTabs;
