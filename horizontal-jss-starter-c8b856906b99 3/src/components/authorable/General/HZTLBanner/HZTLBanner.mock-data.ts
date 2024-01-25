import { HZTLBannerDataProps } from './HZTLBanner';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: HZTLBannerDataProps = {
  rendering: { componentName: 'HZTLBanner' },
  params: {},
  fields: {
    CTAButton: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read More',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '',
      },
    },
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/HZTL/Love-That-Design-Horizontal-Digital-Office-Dubai-12-1728x1152.jpeg?iar=0&hash=CC642DA502C5152E3AE563E0281652FC',
        alt: 'HZTLBanner',
      },
    },
    Title: {
      value: 'HZTL DX+ On-Demand',
    },
    Content: {
      value: 'Missed the insights from the HZTL DX+ Conference?',
    },
    Description: {
      value:
        'Check out our library of sessions covering everything from XM Cloud and OrderCloud to AI and Content Hub. All presented as bite-sized, easily digestible learning opportunities.',
    },
  },
};
export const SecondaryBannerData: HZTLBannerDataProps = {
  rendering: { componentName: 'HZTLBanner' },
  params: {},
  fields: {
    CTAButton: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read More',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '',
      },
    },
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/HZTL/Love-That-Design-Horizontal-Digital-Office-Dubai-12-1728x1152.jpeg?iar=0&hash=CC642DA502C5152E3AE563E0281652FC',
        alt: 'HZTLBanner',
      },
    },
    Title: {
      value: 'HZTL DX+ On-Demand',
    },
    Content: {
      value: 'Missed the insights from the HZTL DX+ Conference?',
    },
    Description: {
      value:
        'Check out our library of sessions covering everything from XM Cloud and OrderCloud to AI and Content Hub. All presented as bite-sized, easily digestible learning opportunities.',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
