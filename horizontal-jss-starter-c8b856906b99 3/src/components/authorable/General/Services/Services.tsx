// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  ServiceCards: ServiceCardDataProps[];
  Title: Field<string>;
}
interface ServiceCardDataProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    IconImage: ImageField;
  };
}

export type ServicesProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const ServiceCards = ({ fields }: ServicesProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className="py-12 bg-[#f7f7f7]"
      data-component="authorable/general/ServiceCards"
      data-testid="ServiceCards"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <Text
            tag="h4"
            field={fields?.Title}
            className="text-black my-4 font-bold text-4xl mb-5 "
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {fields?.ServiceCards?.map((item, index) => (
            <div
              className="flex justify-center  m-4 border-gray-200 border-[8px] p-4 w-full  md:w-[300px] hover:shadow-black hover:shadow-lg hover:border-0"
              key={index}
            >
              <div className="m-4 flex items-start justify-start">
                <Image field={item?.fields?.IconImage} className="w-28  my-2" />
              </div>
              <div className="mx-4">
                <Text
                  tag="h3"
                  field={item?.fields?.Title}
                  className="text-black my-4 font-bold text-xl hover:text-[#01b3a7] hover:cursor-pointer"
                />
                <RichTextA11yWrapper
                  field={item?.fields?.Description}
                  className="text-gray-400 my-4 font-medium text-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<CardListProps>(Card);
export default ServiceCards;
