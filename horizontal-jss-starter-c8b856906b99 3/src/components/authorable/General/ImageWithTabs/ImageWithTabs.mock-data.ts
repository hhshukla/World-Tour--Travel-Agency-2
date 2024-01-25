import { ImageWithTabsProps } from './ImageWithTabs';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ImageWithTabsProps = {
  rendering: { componentName: 'CardList' },
  params: {
    FieldNames: 'Default',
    Variant: 'Default',
  },
  fields: {
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/index-3-556x382.jpeg?h=382&iar=0&w=556&hash=94424150C48EC5BBF608A4F8CFB78984',
        alt: 'tabImage',
        width: '556',
        height: '382',
      },
    },
    Title: {
      value: 'Discover New Horizons',
    },
    Tabs: [
      {
        id: '235cec9d-4d23-45cb-9195-2bd3b7ed5b53',
        url: '/Data/ImageWithTabs/Tab-1',
        name: 'Tab-1',
        displayName: 'Tab-1',
        fields: {
          Title: {
            value: 'About Us',
          },
          Description: {
            value:
              "Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.",
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          EventCTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Read More',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
        },
      },
      {
        id: 'd2cb8755-11a8-4c64-add7-ee3fbb2c834a',
        url: '/Data/ImageWithTabs/Tab-2',
        name: 'Tab-2',
        displayName: 'Tab-2',
        fields: {
          Title: {
            value: 'WHY CHOOSE US',
          },
          Description: {
            value:
              'We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          EventCTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Read More',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
        },
      },
      {
        id: 'b2af99b1-92fb-4cc1-8c28-d1cd75998cf3',
        url: '/Data/ImageWithTabs/Tab-3',
        name: 'Tab-3',
        displayName: 'Tab-3',
        fields: {
          Title: {
            value: 'OUR MISSION',
          },
          Description: {
            value:
              'Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.',
          },
          CTALink: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          EventCTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Read More',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
        },
      },
    ],
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
