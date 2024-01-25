import { ImageField, Image, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { enableRipple } from '@syncfusion/ej2-base';
import { BreadcrumbComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
enableRipple(true);

interface BreadCrumdData {
  Image: ImageField;
  Title: Field<string>;
}

export type BreadCrumdDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: BreadCrumdData;
};
const BreadCrumb = ({ fields }: BreadCrumdDataProps) => {
  return (
    <>
      <div className="bg-white">
        <div className="relative container mx-auto py-12">
          <Image field={fields?.Image} className="h-full" />
          <div className="absolute inset-0 flex justify-center items-center">
            <BreadcrumbComponent enableNavigation={false}></BreadcrumbComponent>
          </div>
        </div>
      </div>
    </>
  );
};
export default BreadCrumb;
