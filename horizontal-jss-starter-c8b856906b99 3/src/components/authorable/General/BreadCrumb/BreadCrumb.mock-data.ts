import { BreadCrumdDataProps } from './BreadCrumb';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: BreadCrumdDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/breadcrumbs-bg.jpeg?h=412&iar=0&w=1920&hash=D319D453CC13D88C7D55203BE6B864C0',
        alt: 'BreadCrumb',
        width: '1920',
        height: '412',
      },
    },
    Title: {
      value: '',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
