import { bannerDataProps } from './Banner';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: bannerDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    BannerSlides: [
      {
        id: '2bd199fd-0587-4344-ac02-7f9fb40fa334',
        url: '/Data/Banner/BannerSlide-1',
        name: 'BannerSlide-1',
        displayName: 'BannerSlide-1',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/slider-4-slide-1-1920x678.jpg?h=678&iar=0&w=1920&hash=8FB0EA648632C8EF7392F29FFF913A7E',
              alt: 'slide-1',
              width: '1920',
              height: '678',
            },
          },
          Title: {
            value: 'Build your Next Holiday Trip with Us',
          },
          SubTitle: {
            value: 'Create Your Tour',
          },
          CTAbutton: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          Description: {
            value: '',
          },
        },
      },
      {
        id: '3133acc1-8f3f-496e-af38-1e9d643a8762',
        url: '/Data/Banner/BannerSlide-2',
        name: 'BannerSlide-2',
        displayName: 'BannerSlide-2',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/slider-4-slide-2-1920x678.jpg?h=678&iar=0&w=1920&hash=E00B82B0A1692DA71ABC872D013FD4ED',
              alt: '',
              width: '1920',
              height: '678',
            },
          },
          Title: {
            value: 'A team of professional Travel Experts',
          },
          SubTitle: {
            value: 'Trust  Our Experience',
          },
          CTAbutton: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          Description: {
            value: '',
          },
        },
      },
      {
        id: '6b30ff08-fad9-4ead-9b5c-1266467563b7',
        url: '/Data/Banner/BannerSlide-3',
        name: 'BannerSlide-3',
        displayName: 'BannerSlide-3',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/slider-4-slide-3-1920x678.jpg?h=678&iar=0&w=1920&hash=9D2EF29FE91196C58F6B4ED5CE31C69C',
              alt: 'slide-3',
              width: '1920',
              height: '678',
            },
          },
          Title: {
            value: 'Enjoy the Best Destinations with Our Travel Agency',
          },
          SubTitle: {
            value: 'Explore The World',
          },
          CTAbutton: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Get in Touch',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
          Description: {
            value: '',
          },
        },
      },
    ],
  },
};
export const SecondaryBannerData: bannerDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    BannerSlides: [
      {
        id: '60b824d1-b6fc-4a2c-9880-e32a90645e7b',
        url: '/Data/BannerMain/SecondaryBanner/SecondaryBannerSlide-1',
        name: 'SecondaryBannerSlide-1',
        displayName: 'SecondaryBannerSlide-1',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-16-100x100.jpg?h=100&iar=0&w=100&hash=E73F0E7AB7EBE765321005BCCB2FE56B',
              alt: '',
              width: '100',
              height: '100',
            },
          },
          Title: {
            value: 'Catherine Williams',
          },
          SubTitle: {
            value: 'Regular Client',
          },
          CTAbutton: {
            value: {
              href: '',
            },
          },
          Description: {
            value:
              'Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Diam phasellus vestibulum lorem sed risus ultricies. Aenean et tortor at risus viverra adipiscing. Aliquet enim tortor at auctor urna. Tortor aliquam nulla facilisi cras fermentum. Malesuada pellentesque elit eget gravida cum sociis natoque.',
          },
        },
      },
      {
        id: '96d96fd2-5177-41ee-8004-b08b6c4f1351',
        url: '/Data/BannerMain/SecondaryBanner/SecondaryBannerSlide-2',
        name: 'SecondaryBannerSlide-2',
        displayName: 'SecondaryBannerSlide-2',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-17-100x100.jpg?h=100&iar=0&w=100&hash=909B4B94BDC6A33B6A5D85FC35FDDED2',
              alt: 'user-2',
              width: '100',
              height: '100',
            },
          },
          Title: {
            value: 'Rupert Wood',
          },
          SubTitle: {
            value: 'Regular Client',
          },
          CTAbutton: {
            value: {
              href: '',
            },
          },
          Description: {
            value:
              'Sodales ut etiam sit amet nisl purus. Maecenas accumsan lacus vel facilisis volutpat est. Suscipit adipiscing bibendum est ultricies integer quis auctor. Viverra aliquet eget sit amet tellus cras adipiscing. Posuere ac ut consequat semper viverra nam libero justo laoreet. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.',
          },
        },
      },
      {
        id: 'dcd25ddf-4983-4eb3-8b91-592fdd35ff18',
        url: '/Data/BannerMain/SecondaryBanner/SecondaryBannerSlide-3',
        name: 'SecondaryBannerSlide-3',
        displayName: 'SecondaryBannerSlide-3',
        fields: {
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-18-100x100.jpg?h=100&iar=0&w=100&hash=F7C0BF32EAF1B2E5A4FFADBB4ADA5390',
              alt: 'user-3',
              width: '100',
              height: '100',
            },
          },
          Title: {
            value: 'Samantha Brown',
          },
          SubTitle: {
            value: 'Regular Client',
          },
          CTAbutton: {
            value: {
              href: '',
            },
          },
          Description: {
            value:
              'Lacus vestibulum sed arcu non odio euismod lacinia. Pellentesque elit ullamcorper dignissim cras. Ultrices eros in cursus turpis massa tincidunt dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Commodo odio aenean sed adipiscing diam. Sed euismod nisi porta lorem mollis aliquam',
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
