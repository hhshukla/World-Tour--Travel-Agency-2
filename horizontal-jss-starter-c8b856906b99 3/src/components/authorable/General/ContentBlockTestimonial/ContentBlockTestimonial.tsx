// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface ContentBlockTestimonialFields {
  CTAbutton: LinkField;
  Description: Field<string>;
  Image: ImageField;
  Title: Field<string>;
}

export type ContentBlockTestimonialDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: ContentBlockTestimonialFields;
};

const ContentBlockTestimonial = ({ fields }: ContentBlockTestimonialDataProps) => {
  if (fields === null || fields === undefined) return <></>;
  return (
    <div
      data-component="authorable/general/ContentBlockTestimonial"
      data-testid="ContentBlockTestimonial"
      className="relative"
    >
      <Image field={fields?.Image} className="h-screen md:h-full object-cover" />
      <div className="absolute inset-0 flex justify-start items-center   p-5  z-10 ">
        <div className="container mx-auto">
          <Text
            tag="h4"
            field={fields?.Title}
            className="text-white text-center  text-xl md:text-4xl font-bold"
          />
          <RichTextA11yWrapper
            field={fields?.Description}
            className="text-white text-center  text-lg md:text-2xl font-semibold my-4"
          />
          <div className="flex justify-center  my-5">
            <LinkWrapper
              field={fields?.CTAbutton}
              className="bg-[#01b3a7] p-3 text-md font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const SecondaryContentBlockTestimonial = ({ fields }: ContentBlockTestimonialDataProps) => {
  if (fields === null || fields === undefined) return <></>;
  return (
    <div
      data-component="authorable/general/ContentBlockTestimonial"
      data-testid="ContentBlockTestimonial"
      className="relative"
    >
      <Image field={fields?.Image} className="h-screen md:h-full object-cover" />
      <div className="absolute inset-0 flex justify-start items-center   p-5  z-10 ">
        <div className="container mx-auto">
          <Text
            tag="h4"
            field={fields?.Title}
            className="text-white text-center  text-xl md:text-4xl font-bold"
          />
          <RichTextA11yWrapper
            field={fields?.Description}
            className="text-white text-center  text-lg md:text-2xl font-semibold my-4"
          />
          <div className="flex justify-center  my-5">
            <LinkWrapper
              field={fields?.CTAbutton}
              className="bg-[#01b3a7] p-3 text-md font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BannerProps>(ContentBlockTestimonial);
export default ContentBlockTestimonial;
