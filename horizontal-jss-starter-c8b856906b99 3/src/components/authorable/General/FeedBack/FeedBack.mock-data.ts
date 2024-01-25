import { BlogPostDataProps } from './FeedBack';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: BlogPostDataProps = {
  rendering: { componentName: 'BlogPost' },
  params: {},
  fields: {
    Title: {
      value: 'Comments',
    },
    FeedBackList: [
      {
        id: '325d0402-be68-4b1c-b81a-a25995c3e04e',
        url: '/Data/FeedBack/FeedBackList-1',
        name: 'FeedBackList-1',
        displayName: 'FeedBackList-1',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-1-119x119.jpg?h=119&iar=0&w=119&hash=0FB6956F562DB8718D6C69CBB828F16E',
              alt: 'feedback-1',
              width: '119',
              height: '119',
            },
          },
          Name: {
            value: 'John Doe',
          },
          Description: {
            value:
              'Accumsan lacus vel facilisis volutpat est. Vulputate mi sit amet mauris commodo quis imperdiet. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Mauris pharetra et ultrices neque ornare aenean.',
          },
          Link: {
            value: {
              href: 'http://',
              text: 'Reply',
              linktype: 'external',
              url: '',
              anchor: '',
              target: '',
            },
          },
        },
      },
      {
        id: 'ea24f1f9-0857-4947-bd20-5e393c12a5ff',
        url: '/Data/FeedBack/FeedBackList-2',
        name: 'FeedBackList-2',
        displayName: 'FeedBackList-2',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-2-119x119.jpg?h=119&iar=0&w=119&hash=74E5859B04891FEA1133B941527BE0F3',
              alt: 'feedback-2',
              width: '119',
              height: '119',
            },
          },
          Name: {
            value: 'Jessica Brown',
          },
          Description: {
            value:
              '<span style="color: #151515; background-color: #ffffff;">Ut tristique et egestas quis ipsum suspendisse. Id leo in vitae turpis massa sed elementum tempus. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.</span>',
          },
          Link: {
            value: {
              href: 'http://',
              text: 'Reply',
              linktype: 'external',
              url: '',
              anchor: '',
              target: '',
            },
          },
        },
      },
      {
        id: 'eff7df94-1b53-4eba-b2a3-2f2c0987938d',
        url: '/Data/FeedBack/FeedBackList-3',
        name: 'FeedBackList-3',
        displayName: 'FeedBackList-3',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-3-119x119.jpg?h=119&iar=0&w=119&hash=0EF0756E3FAE12957C09B633469ED43F',
              alt: 'feedback-3',
              width: '119',
              height: '119',
            },
          },
          Name: {
            value: 'Nick Stevens',
          },
          Description: {
            value:
              '<span style="color: #151515; background-color: #ffffff;">Risus nullam eget felis eget nunc lobortis mattis. Vel pretium lectus quam id leo in. Amet est placerat in egestas. Donec ultrices tincidunt arcu non sodales. Amet volutpat consequat mauris nunc congue nisi vitae .</span>',
          },
          Link: {
            value: {
              href: 'http://',
              text: 'Reply',
              linktype: 'external',
              url: '',
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
