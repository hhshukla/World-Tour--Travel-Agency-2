import { ServicesProps } from './Services';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ServicesProps = {
  rendering: { componentName: 'CardList' },
  params: {},
  fields: {
    ServiceCards: [
      {
        id: '939fa8b3-2f46-4287-aca3-adab3d0ab304',
        url: '/Data/ServiceCards/ServiceCardDetails-1',
        name: 'ServiceCardDetails-1',
        displayName: 'ServiceCardDetails-1',
        fields: {
          Title: {
            value: 'Personalized Matching',
          },
          Description: {
            value:
              'Our unique matching system lets you find just the tour you want for your next holiday.',
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/icons8-star-30.png?h=30&iar=0&w=30&hash=04EF1A74152E382326167DEFF640C5A6',
              alt: 'icon-1',
              width: '30',
              height: '30',
            },
          },
        },
      },
      {
        id: 'ef41202e-6e30-4765-8d09-34aaa9a070a8',
        url: '/Data/ServiceCards/ServiceCardDetails-2',
        name: 'ServiceCardDetails-2',
        displayName: 'ServiceCardDetails-2',
        fields: {
          Title: {
            value: 'Wide Variety of Tours',
          },
          Description: {
            value:
              'We offer a wide variety of personally picked tours with destinations all over the globe.',
          },
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/icons8-star-30.png?h=30&iar=0&w=30&hash=04EF1A74152E382326167DEFF640C5A6',
              alt: 'icon-2',
              width: '30',
              height: '30',
            },
          },
        },
      },
      {
        id: 'af6ffb82-dffb-488b-b9c0-5e3cd237e889',
        url: '/Data/ServiceCards/ServiceCardDetails-3',
        name: 'ServiceCardDetails-3',
        displayName: 'ServiceCardDetails-3',
        fields: {
          Title: {
            value: 'Highly Qualified Service',
          },
          Description: {
            value:
              'Our tour managers are qualified, skilled, and friendly to bring you the best service',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: 'a35aed82-7590-4f79-8ec4-84f600574edd',
        url: '/Data/ServiceCards/ServiceCardDetails-4',
        name: 'ServiceCardDetails-4',
        displayName: 'ServiceCardDetails-4',
        fields: {
          Title: {
            value: '24/7 Support',
          },
          Description: {
            value:
              'You can always get professional support from our staff 24/7 and ask any question you have',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: '68477076-371e-4254-80cc-13d9d555bfde',
        url: '/Data/ServiceCards/ServiceCardDetails-5',
        name: 'ServiceCardDetails-5',
        displayName: 'ServiceCardDetails-5',
        fields: {
          Title: {
            value: 'Handpicked Hotels',
          },
          Description: {
            value:
              'Our team offers only the best selection of affordable and luxury hotels to our clients.',
          },
          IconImage: {
            value: {},
          },
        },
      },
      {
        id: 'ad820261-5bc2-4303-b467-2a9e9e22e481',
        url: '/Data/ServiceCards/ServiceCardDetails-6',
        name: 'ServiceCardDetails-6',
        displayName: 'ServiceCardDetails-6',
        fields: {
          Title: {
            value: 'Best Price Guarantee',
          },
          Description: {
            value:
              'If you find tours that are cheaper than ours, we will compensate the difference',
          },
          IconImage: {
            value: {},
          },
        },
      },
    ],
    Title: {
      value: 'Our Services',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
