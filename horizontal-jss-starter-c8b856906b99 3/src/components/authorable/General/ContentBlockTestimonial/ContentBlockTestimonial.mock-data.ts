import { ContentBlockTestimonialDataProps } from './ContentBlockTestimonial';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: ContentBlockTestimonialDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/parallax-1-1920x850-(1).jpg?h=850&iar=0&w=1920&hash=F0D1957D3C9648D4D7D91F87F1ED9AE8',
        alt: '',
        width: '1920',
        height: '850',
      },
    },
    Title: {
      value: 'First-class Impressions  are Waiting for You!',
    },
    Description: {
      value:
        'Our agency offers travelers various tours and excursions with destinations all over the world. Browse our website to find your dream tour!',
    },
    CTAbutton: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Book a Tour Now',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '',
      },
    },
  },
};
export const SecondaryContentBlockTestimonialData: ContentBlockTestimonialDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/parallax-2-1920x850.jpg?h=850&iar=0&w=1920&hash=3A5354707686C44413B19D306532E15A',
        alt: 'parallaxImage',
        width: '1920',
        height: '850',
      },
    },
    Title: {
      value: 'Sign Up for 25% Discount',
    },
    Description: {
      value:
        'Want to get an instant discount for your next tour? Leave your email and sign up for our newsletter with 25% off all our offers.',
    },
    CTAbutton: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Subscribe',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
