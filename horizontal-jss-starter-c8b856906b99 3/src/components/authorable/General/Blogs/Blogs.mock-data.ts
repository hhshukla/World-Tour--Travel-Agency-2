import { BlogPostDataProps } from './Blogs';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: BlogPostDataProps = {
  rendering: { componentName: 'BlogPost' },
  params: {},
  fields: {
    BlogPost: [
      {
        id: '63a0ac54-559a-4b71-84c3-e6d5bd4eb8a8',
        url: '/Data/Blogs/BlogPost-1',
        name: 'BlogPost-1',
        displayName: 'BlogPost-1',
        fields: {
          MainTitle: {
            value: 'Top 10 Hotels: Rating by Our Travel Experts',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/post-1-770x430.jpg?h=430&iar=0&w=770&hash=B219EA0103D5BDB5E74940AAC9752871',
              alt: 'post-1',
              width: '770',
              height: '430',
            },
          },
          QuoteText: {
            value:
              'Tincidunt eget nullam non nisi est sit amet facilisis magna. Imperdiet nulla malesuada pellentesque elit eget. Dictum fusce ut placerat orci nulla pellentesque.',
          },
          SubDescription: {
            value:
              'Dictum non consectetur a erat nam. Leo in vitae turpis massa sed elementum tempus egestas. Integer enim neque volutpat ac tincidunt. Imperdiet proin fermentum leo vel orci porta. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Dui ut ornare lectus sit amet est placerat in. Elementum tempus egestas sed sed. Amet luctus venenatis lectus magna fringilla urna porttitor.',
          },
          Link: {
            value: {
              href: '',
            },
          },
          SocialMediaLinks: [
            {
              id: '468a5f67-e0df-49e3-88f0-319809da2342',
              url: '/Data/Blogs/BlogPost-1/SocialMediaLink-1',
              name: 'SocialMediaLink-1',
              displayName: 'SocialMediaLink-1',
              fields: {
                IconImage: {
                  value: {},
                },
                EventCTA: {
                  value: {
                    href: '',
                  },
                },
              },
            },
            {
              id: '648af08f-b1bc-45e9-9402-714ca47d7f4c',
              url: '/Data/Blogs/BlogPost-1/SocialMediaLink-2',
              name: 'SocialMediaLink-2',
              displayName: 'SocialMediaLink-2',
              fields: {
                IconImage: {
                  value: {},
                },
                EventCTA: {
                  value: {
                    href: '',
                  },
                },
              },
            },
            {
              id: '513944cc-098b-4f85-91dc-f623975bf91e',
              url: '/Data/Blogs/BlogPost-1/SocialMediaLink-3',
              name: 'SocialMediaLink-3',
              displayName: 'SocialMediaLink-3',
              fields: {
                IconImage: {
                  value: {},
                },
                EventCTA: {
                  value: {
                    href: '',
                  },
                },
              },
            },
            {
              id: '72cd4990-4f3c-4748-9fb1-e1393db18855',
              url: '/Data/Blogs/BlogPost-1/SocialMediaLink-4',
              name: 'SocialMediaLink-4',
              displayName: 'SocialMediaLink-4',
              fields: {
                IconImage: {
                  value: {},
                },
                EventCTA: {
                  value: {
                    href: '',
                  },
                },
              },
            },
          ],
          quoteAuthorName: {
            value: '',
          },
          Date: {
            value: '0001-01-01T00:00:00Z',
          },
          Description: {
            value:
              'Facilisis gravida neque convallis a cras semper auctor neque. Morbi leo urna molestie at elementum eu facilisis sed. Duis tristique sollicitudin nibh sit amet commodo nulla. Hac habitasse platea dictumst vestibulum rhoncus est',
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
