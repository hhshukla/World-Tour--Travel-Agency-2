import { SubHeaderProps } from './SubHeader';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: SubHeaderProps = {
  rendering: { componentName: 'Header' },
  params: {},
  fields: {
    Icon: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/icons8-dots-30.png?h=30&iar=0&w=30&hash=EA5F2BD186B29C7F370078BFE2E1574D',
        alt: 'ToggleIcon-1',
        width: '30',
        height: '30',
      },
    },
    ImageLogo: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/logo-default-188x19.png?h=19&iar=0&w=188&hash=5BC37120ADCDCAF3211E2A61EB563605',
        alt: 'logo',
        width: '188',
        height: '19',
      },
    },
    multiMenus: [
      {
        id: '8783b8a4-90ae-4aa9-a9cc-e13aef7b4b8a',
        url: '/Data/SubHeader/SubHeaderMenu-1',
        name: 'SubHeaderMenu-1',
        displayName: 'SubHeaderMenu-1',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/icons8-clock-50.png?h=50&iar=0&w=50&hash=43B1C3DBDB704537D2E1AAB58ABE0CBF',
              alt: 'clock',
              width: '50',
              height: '50',
            },
          },
          Text: {
            value: '9:00 A.M. To 5:00 P.M.',
          },
          CTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
        },
      },
      {
        id: '865d9298-7ebd-41f4-8189-89b91e883be4',
        url: '/Data/SubHeader/SubHeaderMenu-2',
        name: 'SubHeaderMenu-2',
        displayName: 'SubHeaderMenu-2',
        fields: {
          IconImage: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/icons8-phone-48.png?h=48&iar=0&w=48&hash=F7652386AA4E80533B05D945B63DED09',
              alt: 'Phone',
              width: '48',
              height: '48',
            },
          },
          Text: {
            value: '+1 323-913-4688',
          },
          CTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
        },
      },
    ],
    CTA: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Get in Touch',
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
