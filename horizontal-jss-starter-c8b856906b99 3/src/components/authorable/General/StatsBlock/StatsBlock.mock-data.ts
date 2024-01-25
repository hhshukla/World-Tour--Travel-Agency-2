import { StatsBlockProps } from './StatsBlock';

const defaultData: StatsBlockProps = {
  rendering: { componentName: 'StatsBlock' },
  params: {
    alignment: 'right',
  },
  fields: {
    StatsBlockItems: [
      {
        id: '7039a994-0433-4c63-9259-b66ff36f6949',
        url: '/Data/StatsBlock/StatsBlockItem-1',
        name: 'StatsBlockItem-1',
        displayName: 'StatsBlockItem-1',
        fields: {
          Number: {
            value: 12,
          },
          SubText: {
            value: 'International Awards',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/thumnails-info-1-370x303.jpg?h=303&iar=0&w=370&hash=0AB8886927DB1C36481B22AE2CF32C65',
              alt: 'StatsBlockItem-1',
              width: '370',
              height: '303',
            },
          },
        },
      },
      {
        id: 'd5a469aa-9360-44ed-886e-61c09d598572',
        url: '/Data/StatsBlock/StatsBlockItem-2',
        name: 'StatsBlockItem-2',
        displayName: 'StatsBlockItem-2',
        fields: {
          Number: {
            value: 500,
          },
          SubText: {
            value: 'Happy Travelers',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/thumnails-info-1-370x303.jpg?h=303&iar=0&w=370&hash=0AB8886927DB1C36481B22AE2CF32C65',
              alt: 'StatsBlockItem-2',
              width: '370',
              height: '303',
            },
          },
        },
      },
      {
        id: '3d9de72f-c8cd-4669-8429-f4ba160139cb',
        url: '/Data/StatsBlock/StatsBlockItem-3',
        name: 'StatsBlockItem-3',
        displayName: 'StatsBlockItem-3',
        fields: {
          Number: {
            value: 42,
          },
          SubText: {
            value: 'Team Members',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/thumnails-info-1-370x303.jpg?h=303&iar=0&w=370&hash=0AB8886927DB1C36481B22AE2CF32C65',
              alt: 'StatsBlockItem-3',
              width: '370',
              height: '303',
            },
          },
        },
      },
    ],
    StatsBlockTitle: {
      value: '7 Years of Following The Dream',
    },
  },
};

export const noData = {
  rendering: {},
  params: {},
};

export default defaultData;
