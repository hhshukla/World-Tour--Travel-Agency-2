import { HeroGalleryProps } from './HeroGallery';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HeroGalleryProps = {
  rendering: { componentName: 'Gallery' },
  params: {},
  fields: {
    HeroGalleryList: [
      {
        id: '42077b57-b22a-4a30-870d-66853b3b4a61',
        url: '/Data/HeroGallery/HeroGalleryList-1',
        name: 'HeroGalleryList-1',
        displayName: 'HeroGalleryList-1',
        fields: {
          ListTitle: {
            value: 'All',
          },

          HeroGalleryItems: [
            {
              id: '753c1318-9676-4246-8bab-3d4030a67c5c',
              url: '/Data/HeroGallery/HeroGalleryList-1/HeroGalleryItem-1',
              name: 'HeroGalleryItem-1',
              displayName: 'HeroGalleryItem-1',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-1-420x350.jpg?h=350&iar=0&w=420&hash=D7E9EFC5901E1F9793CBC7292E9581BF',
                    alt: 'HeroImage-1',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Peyto Lake Tour',
                },
                SubTitle: {
                  value: 'Canada',
                },
              },
            },
            {
              id: '6c41503b-ebbb-44fa-8925-a4ddc4f8fd37',
              url: '/Data/HeroGallery/HeroGalleryList-1/HeroGalleryItem-2',
              name: 'HeroGalleryItem-2',
              displayName: 'HeroGalleryItem-2',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-2-420x350.jpg?h=350&iar=0&w=420&hash=CB18BB87E444ABE83471FBEDDD49947F',
                    alt: 'HeroImage-2',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Maldives Adventure Tour',
                },
                SubTitle: {
                  value: 'Maldives',
                },
              },
            },
            {
              id: '52be2980-91fe-4910-a8f9-e3c9c1be6cbd',
              url: '/Data/HeroGallery/HeroGalleryList-1/HeroGalleryItem-3',
              name: 'HeroGalleryItem-3',
              displayName: 'HeroGalleryItem-3',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-3-420x350.jpg?h=350&iar=0&w=420&hash=BF90B5714CFA21CBA8193706AACE54D0',
                    alt: 'HeroImage-3',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Lake Como Family Tour',
                },
                SubTitle: {
                  value: 'Italy',
                },
              },
            },
            {
              id: '19ec7b75-7697-4ce6-807c-2d3a83620ba5',
              url: '/Data/HeroGallery/HeroGalleryList-1/HeroGalleryItem-4',
              name: 'HeroGalleryItem-4',
              displayName: 'HeroGalleryItem-4',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-4-420x350.jpg?h=350&iar=0&w=420&hash=83768AE86CE15FC3ACCFE6C457832FCB',
                    alt: 'HeroImage-4',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Private Charters for Surfers',
                },
                SubTitle: {
                  value: 'USA',
                },
              },
            },
            {
              id: '273cf2c1-a6c1-4aeb-8485-d7b650b7d156',
              url: '/Data/HeroGallery/HeroGalleryList-1/HeroGalleryItem-5',
              name: 'HeroGalleryItem-5',
              displayName: 'HeroGalleryItem-5',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-5-420x350.jpg?h=350&iar=0&w=420&hash=6D956E62B698B0D0536F78B3EF1743A9',
                    alt: 'HeroImage-5',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Discover Costa Rica',
                },
                SubTitle: {
                  value: 'Costa Rica',
                },
              },
            },
            {
              id: '2e87974e-09c5-4ef1-a034-354310bd5df7',
              url: '/Data/HeroGallery/HeroGalleryList-1/HeroGalleryItem-6',
              name: 'HeroGalleryItem-6',
              displayName: 'HeroGalleryItem-6',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-6-420x350.jpg?h=350&iar=0&w=420&hash=DB3BDCCB49AEE0F306A4FA2F28CF3B3D',
                    alt: 'HeroImage-6',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'India Sightseeing Tour',
                },
                SubTitle: {
                  value: 'India',
                },
              },
            },
          ],
        },
      },
      {
        id: 'da7b27a4-e9dc-42d6-9080-a2d4386e62d6',
        url: '/Data/HeroGallery/HeroGalleryList-2',
        name: 'HeroGalleryList-2',
        displayName: 'HeroGalleryList-2',
        fields: {
          ListTitle: {
            value: 'Destinations',
          },

          HeroGalleryItems: [
            {
              id: '4515bcdb-9eed-40e5-b3a1-044b0bf64375',
              url: '/Data/HeroGallery/HeroGalleryList-2/HeroGalleryItem-1',
              name: 'HeroGalleryItem-1',
              displayName: 'HeroGalleryItem-1',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-3-420x350.jpg?h=350&iar=0&w=420&hash=BF90B5714CFA21CBA8193706AACE54D0',
                    alt: 'Destination-1',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Lake Como Family Tour',
                },
                SubTitle: {
                  value: 'Italy',
                },
              },
            },
            {
              id: '6d740a88-1d5a-433a-8559-b8af4f84dfc3',
              url: '/Data/HeroGallery/HeroGalleryList-2/HeroGalleryItem-2',
              name: 'HeroGalleryItem-2',
              displayName: 'HeroGalleryItem-2',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-6-420x350.jpg?h=350&iar=0&w=420&hash=DB3BDCCB49AEE0F306A4FA2F28CF3B3D',
                    alt: 'Destination-2',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'India Sightseeing Tour',
                },
                SubTitle: {
                  value: 'India',
                },
              },
            },
          ],
        },
      },
      {
        id: '0e8707e3-a87d-4c94-8a00-973d15022292',
        url: '/Data/HeroGallery/HeroGalleryList-3',
        name: 'HeroGalleryList-3',
        displayName: 'HeroGalleryList-3',
        fields: {
          ListTitle: {
            value: 'Excursions',
          },

          HeroGalleryItems: [
            {
              id: 'b42533e5-ff8c-4a13-a854-3c6e3bceb06c',
              url: '/Data/HeroGallery/HeroGalleryList-3/HeroGalleryItem-1',
              name: 'HeroGalleryItem-1',
              displayName: 'HeroGalleryItem-1',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-2-420x350.jpg?h=350&iar=0&w=420&hash=CB18BB87E444ABE83471FBEDDD49947F',
                    alt: 'Excursions-1',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Maldives Adventure Tour',
                },
                SubTitle: {
                  value: 'Maldives',
                },
              },
            },
            {
              id: 'e3eac590-e767-4a5d-b2d3-6c2c38a27d75',
              url: '/Data/HeroGallery/HeroGalleryList-3/HeroGalleryItem-2',
              name: 'HeroGalleryItem-2',
              displayName: 'HeroGalleryItem-2',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-5-420x350.jpg?h=350&iar=0&w=420&hash=6D956E62B698B0D0536F78B3EF1743A9',
                    alt: 'Excursions-2',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Discover Costa Rica',
                },
                SubTitle: {
                  value: 'Costa Rica',
                },
              },
            },
          ],
        },
      },
      {
        id: '4c0c6769-bc78-42cb-898d-5cff8f58aff0',
        url: '/Data/HeroGallery/HeroGalleryList-4',
        name: 'HeroGalleryList-4',
        displayName: 'HeroGalleryList-4',
        fields: {
          ListTitle: {
            value: 'Tour',
          },

          HeroGalleryItems: [
            {
              id: '18d97b48-dfe8-4791-b9ba-6e35a58ff807',
              url: '/Data/HeroGallery/HeroGalleryList-4/HeroGalleryItem-1',
              name: 'HeroGalleryItem-1',
              displayName: 'HeroGalleryItem-1',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-1-420x350.jpg?h=350&iar=0&w=420&hash=D7E9EFC5901E1F9793CBC7292E9581BF',
                    alt: 'Tour-1',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Peyto Lake Tour',
                },
                SubTitle: {
                  value: 'Canada',
                },
              },
            },
            {
              id: '5548db48-fc04-4f8a-92be-193e0407afae',
              url: '/Data/HeroGallery/HeroGalleryList-4/HeroGalleryItem-2',
              name: 'HeroGalleryItem-2',
              displayName: 'HeroGalleryItem-2',
              fields: {
                Image: {
                  value: {
                    src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/fullwidth-gallery-4-420x350.jpg?h=350&iar=0&w=420&hash=83768AE86CE15FC3ACCFE6C457832FCB',
                    alt: 'Tour-2',
                    width: '420',
                    height: '350',
                  },
                },
                Title: {
                  value: 'Private Charters for Surfers',
                },
                SubTitle: {
                  value: 'USA',
                },
              },
            },
          ],
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
