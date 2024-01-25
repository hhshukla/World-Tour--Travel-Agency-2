import { HeaderProps } from './Header';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HeaderProps = {
  rendering: { componentName: 'Header' },
  params: {},
  fields: {
    NavigationLinks: [
      {
        id: '956ee933-11ee-48b8-83c4-b7fdcb2be01b',
        url: '/Data/Header/NavigationLink-1',
        name: 'NavigationLink-1',
        displayName: 'NavigationLink-1',
        fields: {
          Link: {
            value: {
              text: 'Home',
              anchor: '/',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{BDD46F02-78F4-4CFE-88C1-E4D78988D28C}',
              href: '/',
            },
          },
        },
      },
      {
        id: 'd5b4b36a-4928-4834-aceb-224a1b5bbe2c',
        url: '/Data/Header/NavigationLink-2',
        name: 'NavigationLink-2',
        displayName: 'NavigationLink-2',
        fields: {
          Link: {
            value: {
              text: 'About',
              anchor: '/about',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{991D1C04-CDE7-4846-AF27-1F3CE83D9F9C}',
              href: '/About',
            },
          },
        },
      },
      {
        id: '2526e2fd-c7ce-4856-bc6b-e22ed3ae2f9f',
        url: '/Data/Header/NavigationLink-3',
        name: 'NavigationLink-3',
        displayName: 'NavigationLink-3',
        fields: {
          Link: {
            value: {
              text: 'Our Tours',
              anchor: '/our-tours',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{2C0FEC27-5D1C-44B8-A3A5-650907947C6A}',
              href: '/Our-Tours',
            },
          },
        },
      },
      {
        id: '63be3878-95e4-42cd-9960-b6347939ef4d',
        url: '/Data/Header/NavigationLink-4',
        name: 'NavigationLink-4',
        displayName: 'NavigationLink-4',
        fields: {
          Link: {
            value: {
              text: 'Gallery',
              anchor: '/gallery',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{FF8205AD-A1B5-4E66-9E17-58D6EB0329E3}',
              href: '/Gallery',
            },
          },
        },
      },
      {
        id: 'ebcb2d0a-deb8-45bc-8ae1-a83fd39bf0b7',
        url: '/Data/Header/NavigationLink-5',
        name: 'NavigationLink-5',
        displayName: 'NavigationLink-5',
        fields: {
          Link: {
            value: {
              text: 'Blog',
              anchor: '/blog',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{F865AAE3-03D2-43E1-AC58-A34F7A0871EE}',
              href: '/Blog',
            },
          },
        },
      },
      {
        id: 'f7ed008f-23a8-4bdc-8144-318112fb50d1',
        url: '/Data/Header/NavigationLink-6',
        name: 'NavigationLink-6',
        displayName: 'NavigationLink-6',
        fields: {
          Link: {
            value: {
              text: 'Contact Us',
              anchor: '/contact',
              linktype: 'internal',
              class: '',
              title: '',
              querystring: '',
              id: '{10F55ED8-D439-45E0-9BCC-86E2E8547301}',
              href: '/Contact-Us',
            },
          },
        },
      },
    ],
    IconImage: [
      {
        id: 'b9903e92-a89a-45c8-87bc-2e641863831f',
        url: '/Data/Header/SocialMediaLink-1',
        name: 'SocialMediaLink-1',
        displayName: 'SocialMediaLink-1',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-facebook-50.png?h=50&iar=0&w=50&hash=67CF0667B743C55C45B9C58E1C0506D4',
              alt: 'facebook',
              width: '50',
              height: '50',
            },
          },
          EventCTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: '1c02534e-8e95-49b6-b18b-4ca4d579ad4c',
        url: '/Data/Header/SocialMediaLink-2',
        name: 'SocialMediaLink-2',
        displayName: 'SocialMediaLink-2',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-instagram-50.png?h=50&iar=0&w=50&hash=175E1D6D717CF4E832D25705B95FBFBC',
              alt: 'Instagram',
              width: '50',
              height: '50',
            },
          },
          EventCTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: 'f270faab-78b1-4bdc-a757-b44f61a1cff5',
        url: '/Data/Header/SocialMediaLink-3',
        name: 'SocialMediaLink-3',
        displayName: 'SocialMediaLink-3',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-linkedin-24.png?h=24&iar=0&w=24&hash=F137605AA60A613B0A2532230C11D5FE',
              alt: 'Linkedln',
              width: '24',
              height: '24',
            },
          },
          EventCTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: '05a40bfc-e25f-4d75-92cb-bd5056b982c5',
        url: '/Data/Header/SocialMediaLink-4',
        name: 'SocialMediaLink-4',
        displayName: 'SocialMediaLink-4',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/icons8-twitter-50.png?h=50&iar=0&w=50&hash=EC7EDEB94DF1F57B8635099CB5AEAF26',
              alt: 'twitter',
              width: '50',
              height: '50',
            },
          },
          EventCTA: {
            value: {
              href: '',
            },
          },
        },
      },
    ],
    Image: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-Jsslearning/Navbar-toggle.svg?iar=0&hash=9EF5737EC497B490E51A4A82B4193C7A',
        alt: 'ToggleIcon-1',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
