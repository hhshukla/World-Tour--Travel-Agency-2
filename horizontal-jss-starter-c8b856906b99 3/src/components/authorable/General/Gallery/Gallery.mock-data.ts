import { GalleryProps } from './Gallery';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: GalleryProps = {
  rendering: { componentName: 'Gallery' },
  params: {},
  fields: {
    GalleryItems: [
      {
        id: '297ab243-f351-49a6-8b59-9cc84f387859',
        url: '/Data/Gallery/GalleryItem-1',
        name: 'GalleryItem-1',
        displayName: 'GalleryItem-1',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-11-420x308.jpg?h=308&iar=0&w=420&hash=50238265FE9278B693C1A0778C28B272',
              alt: 'Image-1',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: '',
          },
        },
      },
      {
        id: 'bff945eb-8bce-4ced-936d-0d8f14dc7285',
        url: '/Data/Gallery/GalleryItem-2',
        name: 'GalleryItem-2',
        displayName: 'GalleryItem-2',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-12-420x308.jpg?h=308&iar=0&w=420&hash=DFE6A4F6DAAE2FD32D9841C48EA5271D',
              alt: 'Image-2',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: '',
          },
        },
      },
      {
        id: 'bd0faa7c-7326-4e0d-b03d-1bd496b61499',
        url: '/Data/Gallery/GalleryItem-3',
        name: 'GalleryItem-3',
        displayName: 'GalleryItem-3',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-1-270x195-(1).jpg?h=195&iar=0&w=270&hash=3C6E91D4E697EA1A8AA24129EA6E0249',
              alt: 'image-3',
              width: '270',
              height: '195',
            },
          },
          Title: {
            value: '',
          },
        },
      },
      {
        id: '58d3e86c-24e6-41c9-8bbe-f96e2d931818',
        url: '/Data/Gallery/GalleryItem-4',
        name: 'GalleryItem-4',
        displayName: 'GalleryItem-4',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-13-420x308.jpg?h=308&iar=0&w=420&hash=775E90E6C6A06815990494AA0FE88482',
              alt: 'Image-4',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: '',
          },
        },
      },
      {
        id: '9c1b874c-c9cb-4607-bd58-e3158c4d18e6',
        url: '/Data/Gallery/GalleryItem-5',
        name: 'GalleryItem-5',
        displayName: 'GalleryItem-5',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-15-420x308.jpg?h=308&iar=0&w=420&hash=4992CF156C4BFECA4707E80F5478367D',
              alt: 'Image-5',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: '',
          },
        },
      },
      {
        id: 'f4af33ee-b4f4-4a46-958c-d8cec18c2edd',
        url: '/Data/Gallery/GalleryItem-6',
        name: 'GalleryItem-6',
        displayName: 'GalleryItem-6',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-2-270x195.jpg?h=195&iar=0&w=270&hash=1DED1EE421902E08F3B72BF70445F268',
              alt: '',
              width: '270',
              height: '195',
            },
          },
          Title: {
            value: '',
          },
        },
      },
    ],
    Title: {
      value: 'Gallery',
    },
  },
};
export const AboutGalleryData = {
  fields: {
    GalleryItems: [
      {
        id: 'a28bb4d8-1dfb-4976-b3db-b8ae62715bc2',
        url: '/Data/GalleryFolder/AboutGallery/GalleryItem-1',
        name: 'GalleryItem-1',
        displayName: 'GalleryItem-1',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-11-420x308.jpg?h=308&iar=0&w=420&hash=50238265FE9278B693C1A0778C28B272',
              alt: 'gallery-1',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: 'France',
          },
        },
      },
      {
        id: '0cb92d87-05f0-47b8-84e6-7194479a8370',
        url: '/Data/GalleryFolder/AboutGallery/GalleryItem-2',
        name: 'GalleryItem-2',
        displayName: 'GalleryItem-2',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-12-420x308.jpg?h=308&iar=0&w=420&hash=DFE6A4F6DAAE2FD32D9841C48EA5271D',
              alt: 'gallery-2',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: 'Italy',
          },
        },
      },
      {
        id: 'd6cf01b2-cac6-45b8-883e-c163ae4c87cc',
        url: '/Data/GalleryFolder/AboutGallery/GalleryItem-3',
        name: 'GalleryItem-3',
        displayName: 'GalleryItem-3',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-13-420x308.jpg?h=308&iar=0&w=420&hash=775E90E6C6A06815990494AA0FE88482',
              alt: 'gallery-3',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: 'Dubai',
          },
        },
      },
      {
        id: 'd6072e7c-ce00-46a8-95ed-1dde3049ebc7',
        url: '/Data/GalleryFolder/AboutGallery/GalleryItem-4',
        name: 'GalleryItem-4',
        displayName: 'GalleryItem-4',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-14-420x308.jpg?h=308&iar=0&w=420&hash=3C4137C117397D0DF00F3CEFFC9238FB',
              alt: 'gallery-4',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: 'Dubai',
          },
        },
      },
      {
        id: '71507986-8683-4199-95f4-9a20f2362d63',
        url: '/Data/GalleryFolder/AboutGallery/GalleryItem-5',
        name: 'GalleryItem-5',
        displayName: 'GalleryItem-5',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-15-420x308.jpg?h=308&iar=0&w=420&hash=4992CF156C4BFECA4707E80F5478367D',
              alt: 'gallery-5',
              width: '420',
              height: '308',
            },
          },
          Title: {
            value: 'Benidorm',
          },
        },
      },
      {
        id: '6fae6091-e86d-4c4c-bf5c-67952eee6586',
        url: '/Data/GalleryFolder/AboutGallery/GalleryItem-6',
        name: 'GalleryItem-6',
        displayName: 'GalleryItem-6',
        fields: {
          Images: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/gallery-image-1-270x195-(1).jpg?h=195&iar=0&w=270&hash=3C6E91D4E697EA1A8AA24129EA6E0249',
              alt: 'gallery-6',
              width: '270',
              height: '195',
            },
          },
          Title: {
            value: 'Africa',
          },
        },
      },
    ],
    Title: {
      value: '',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
