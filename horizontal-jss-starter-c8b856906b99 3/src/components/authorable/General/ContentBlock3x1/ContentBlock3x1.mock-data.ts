import { ContentBlock3x1Props } from './ContentBlock3x1';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentBlock3x1Props = {
  rendering: { componentName: 'ContentBlock' },
  params: {},
  fields: {
    ContentBlock3x1Items: [
      {
        id: 'cde56018-96d5-49d3-beca-59736f86f6cf',
        url: '/Data/ContentBlock3x1/ContentBlockItems3x1-1',
        name: 'ContentBlockItems3x1-1',
        displayName: 'ContentBlockItems3x1-1',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-5-87x87.jpg?h=87&iar=0&w=87&hash=38BA77C123C672EB3583F61C5E6D682E',
              alt: 'user-1',
              width: '87',
              height: '87',
            },
          },
          Description: {
            value:
              'Just wanted to say many, many thanks for helping me set up an amazing Costa Rican adventure! My nephew and I had a great time! All of the accommodations were perfect, thank you!',
          },
          Title: {
            value: 'Rupert Wood',
          },
        },
      },
      {
        id: '584991a8-f398-4efb-999e-e0e5729db03c',
        url: '/Data/ContentBlock3x1/ContentBlockItems3x1-2',
        name: 'ContentBlockItems3x1-2',
        displayName: 'ContentBlockItems3x1-2',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-6-87x87.jpg?h=87&iar=0&w=87&hash=1D189780DDC820069FE0C4F8A0EF37F1',
              alt: 'user-2',
              width: '87',
              height: '87',
            },
          },
          Description: {
            value:
              'I wanted to thank you very much for planning the trip to France for my sister and me. It was amazing and exceeded my expectations! We had a wonderful time and were very pleased.',
          },
          Title: {
            value: 'Catherine Williams',
          },
        },
      },
      {
        id: 'd615ff89-36e5-45a9-81bc-9b73cd02f60d',
        url: '/Data/ContentBlock3x1/ContentBlockItems3x1-3',
        name: 'ContentBlockItems3x1-3',
        displayName: 'ContentBlockItems3x1-3',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-7-87x87.jpg?h=87&iar=0&w=87&hash=D8D689FD32A16C7FCEC0A0BAFFE93234',
              alt: 'user-3',
              width: '87',
              height: '87',
            },
          },
          Description: {
            value:
              'We had a marvelous time in our travels to Madagascar, Zimbabwe, and Botswana, we had just wonderful experiences. Your service was amazing and everyone was very attentive!',
          },
          Title: {
            value: 'Sam Peterson',
          },
        },
      },
    ],
    Title: {
      value: 'What People say',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
