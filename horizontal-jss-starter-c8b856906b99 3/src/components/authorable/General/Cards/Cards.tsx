// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, Text, Image, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  Cards: CardDataProps[];
  Title: Field<string>;
  IconImage: ImageField;
}
interface CardDataProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: Field<string>;
    Image: ImageField;
    SubTitle: Field<string>;
    Description: Field<string>;
    Number: Field<string>;
    CTA: LinkField;
  };
}

export type CardListProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

export const Cards = ({ fields }: CardListProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className="py-12 bg-[#f7f7f7]"
      data-component="authorable/general/Cards"
      data-testid="Cards"
    >
      <div className="container mx-auto">
        <div>
          <div className="mt-12 md:flex justify-between items-center px-6">
            {fields?.Cards?.map((card, index) => (
              <div key={index} className="flex items-center justify-center mx-4">
                <div className="bg-gradient-to-t from-black to-white  cursor-pointer transition-[0.5s] shadow-lg shadow-black mt-6 rounded-xl">
                  <div className="relative">
                    <a>
                      <Image
                        field={card?.fields?.Image}
                        className="hover:scale-105  transition-all	ease-[.35s] duration-500 cursor-pointer"
                      />
                    </a>

                    <div className="text-center w-full absolute bottom-0 p-4 ">
                      <Text
                        tag="h3"
                        field={card?.fields?.Title}
                        className="text-white mb-4 text-2xl font-bold font-mono "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Text
              field={fields?.Title}
              tag="h4"
              className="text-black my-6 text-2xl font-bold font-sans cursor-pointer"
            />
            <div>
              <Image
                field={fields?.IconImage}
                className="mx-2 flex items-center justify-center  cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Cards4x1 = ({ fields }: CardListProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="py-12 bg-white">
      <div data-component="authorable/general/Cards4x1" data-testid="Cards4x1">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <Text
              field={fields?.Title}
              tag="h4"
              className="text-black my-6 text-4xl font-bold font-sans cursor-pointer"
            />
          </div>
          <div className="mt-12 flex flex-col lg:flex-row  justify-center items-center px-6 mx-4">
            {fields?.Cards?.map((item, index) => (
              <div key={index} className="bg-[#f7f7f7] m-7 p-5  cursor-pointer w-full">
                <div className="flex justify-center items-center ">
                  <Image
                    field={item?.fields?.Image}
                    className="w-50 h-full rounded-full p-3  -mt-20 bg-white"
                  />
                </div>
                <div className="m-4 text-center relative">
                  <Text
                    tag="h6"
                    field={item?.fields?.Title}
                    className="text-black font-bold font-sans text-xl my-4"
                  />
                  <Text
                    tag="h6"
                    field={item?.fields?.SubTitle}
                    className="text-[#01b3a7] font-medium font-mono text-base my-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export const HorizontalCards = ({ fields }: CardListProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="py-12 bg-white">
      <div data-component="authorable/general/HorizontalCards" data-testid="HorizontalCards">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <Text
              field={fields?.Title}
              tag="h4"
              className="text-black my-6 text-4xl font-bold font-sans cursor-pointer"
            />
          </div>
          <div className="mt-12  px-6 mx-4">
            {fields?.Cards?.map((item, index) => (
              <div className="lg:flex lg:border-2 lg:border-gray-200 my-4" key={index}>
                <Image field={item?.fields?.Image} />
                <div className="lg:m-6 rounded-3xl bg-white z-10">
                  <Text
                    tag="h6"
                    field={item?.fields?.Title}
                    className="text-black font-bold font-sans text-xl my-4"
                  />
                  <RichTextA11yWrapper
                    field={item?.fields?.Description}
                    className="text-gray-400 font-medium font-mono text-base my-4"
                  />

                  <div className="py-4">
                    <LinkWrapper
                      field={item?.fields?.CTA}
                      className="text-black font-medium font-mono text-base  p-4 border-2 border-black cursor-pointer hover:bg-[#01b3a7] hover:border-[#01b3a7] hover:text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<CardListProps>(Card);
export default Cards;
