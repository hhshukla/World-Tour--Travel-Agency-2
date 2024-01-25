import { CardListProps } from './Cards';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: CardListProps = {
  rendering: { componentName: 'CardList' },
  params: {
    FieldNames: 'Default',
    Variant: 'Default',
  },
  fields: {
    Cards: [
      {
        id: 'f97768c3-0031-4742-ab79-747a2690b113',
        url: '/Data/CardsVariants/Cards/Card-1',
        name: 'Card-1',
        displayName: 'Card-1',
        fields: {
          SubTitle: {
            value: '',
          },
          Number: {
            value: '',
          },
          Description: {
            value: '',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/cta-1-368x420-(1).jpg?h=420&iar=0&w=368&hash=C796385CBA635B05CC215B56A27F11D5',
              alt: 'Balloon',
              width: '368',
              height: '420',
            },
          },
          Title: {
            value: 'Balloon Flights',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: '905a6cb0-7af7-4a72-b774-9b96edcbf527',
        url: '/Data/CardsVariants/Cards/Card-2',
        name: 'Card-2',
        displayName: 'Card-2',
        fields: {
          SubTitle: {
            value: '',
          },
          Number: {
            value: '',
          },
          Description: {
            value: '',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/cta-2-368x420.jpg?h=420&iar=0&w=368&hash=0B5076A2ACD2DCFC2F0287D8AF2FB23A',
              alt: 'Mountain',
              width: '368',
              height: '420',
            },
          },
          Title: {
            value: 'Mountain Holiday',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: '6c593eb6-d8dd-46a0-9e77-eb14d7a248b6',
        url: '/Data/CardsVariants/Cards/Card-3',
        name: 'Card-3',
        displayName: 'Card-3',
        fields: {
          SubTitle: {
            value: '',
          },
          Number: {
            value: '',
          },
          Description: {
            value: '',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/cta-3-368x420.jpg?h=420&iar=0&w=368&hash=6E0C50ED1D965D13A1D37E45E405BE17',
              alt: 'Beach',
              width: '368',
              height: '420',
            },
          },
          Title: {
            value: 'Beach Holidays',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
    ],
    Title: {
      value: 'Other Tours',
    },
    IconImage: {
      value: {
        src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/icons8-arrow-30.png?h=30&iar=0&w=30&hash=8807F7FFAA492E73A467D34AD681C4C9',
        alt: 'Arrow',
        width: '30',
        height: '30',
      },
    },
  },
};

export const Cards4x1Data: CardListProps = {
  rendering: { componentName: 'CardList' },
  params: {
    FieldNames: 'Cards4x1',
    Styles: 'Cards4x1',
    DynamicPlaceholderId: '1',
    Variant: 'Cards4x1',
  },

  fields: {
    Cards: [
      {
        id: 'a23a06b9-437b-4aab-9c11-43b8f0b29a8a',
        url: '/Data/CardsVariants/Cards4x1/CardDetail-1',
        name: 'CardDetail-1',
        displayName: 'CardDetail-1',
        fields: {
          SubTitle: {
            value: 'Founder, Owner',
          },
          Number: {
            value: '13239134688',
          },
          Description: {
            value: '',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-1-118x118.jpg?h=118&iar=0&w=118&hash=5F9A53E37AE1C7B6038C31ADE1CE993A',
              alt: '',
              width: '118',
              height: '118',
            },
          },
          Title: {
            value: 'Diana Robinson',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: 'cb90b28e-8666-4d53-8f5d-96325e15fe6b',
        url: '/Data/CardsVariants/Cards4x1/CardDetail-2',
        name: 'CardDetail-2',
        displayName: 'CardDetail-2',
        fields: {
          SubTitle: {
            value: 'Travel Agent',
          },
          Number: {
            value: '',
          },
          Description: {
            value: '',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-2-118x118.jpg?h=118&iar=0&w=118&hash=40E1ACB232C8A5F7061690480166A8DA',
              alt: '',
              width: '118',
              height: '118',
            },
          },
          Title: {
            value: 'Peter McMillan',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: '19547570-f365-4622-9a92-2c97e3a65f01',
        url: '/Data/CardsVariants/Cards4x1/CardDetail-3',
        name: 'CardDetail-3',
        displayName: 'CardDetail-3',
        fields: {
          SubTitle: {
            value: 'Tour Consultant',
          },
          Number: {
            value: '',
          },
          Description: {
            value: '',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-3-118x118.jpg?h=118&iar=0&w=118&hash=D17B70E42CFE0A7D69ADC6BE7A7811BD',
              alt: '',
              width: '118',
              height: '118',
            },
          },
          Title: {
            value: 'Jill Peterson',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: '2181106a-7ae6-44a4-89c3-7ff97f900e52',
        url: '/Data/CardsVariants/Cards4x1/CardDetail-4',
        name: 'CardDetail-4',
        displayName: 'CardDetail-4',
        fields: {
          SubTitle: {
            value: 'PR Manager',
          },
          Number: {
            value: '',
          },
          Description: {
            value: '',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/user-4-118x118.jpg?h=118&iar=0&w=118&hash=D7FFCB59413272CD96AD4703FD680D93',
              alt: '',
              width: '118',
              height: '118',
            },
          },
          Title: {
            value: 'James Smith',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
    ],
    Title: {
      value: '',
    },
    IconImage: {
      value: {},
    },
  },
};
export const HorizontalCardsData: CardListProps = {
  rendering: { componentName: 'CardList' },
  params: {
    FieldNames: 'HorizontalCards',
    DynamicPlaceholderId: '2',
    Variants: 'HorizontalCards',
  },

  fields: {
    Cards: [
      {
        id: '67f6f7b4-1ec8-4198-bba0-71879cdb4e94',
        url: '/Data/CardsVariants/HorizontalCards/HorizontalCard-1',
        name: 'HorizontalCard-1',
        displayName: 'HorizontalCard-1',
        fields: {
          SubTitle: {
            value: '',
          },
          Number: {
            value: '',
          },
          Description: {
            value:
              'Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resort',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/product-big-1-600x366-(1).jpg?h=366&iar=0&w=600&hash=076006D8C2601281F31F5DCA6D352C15',
              alt: 'product-1',
              width: '600',
              height: '366',
            },
          },
          Title: {
            value: 'Spain, Benidorm',
          },
          CTA: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'Buy This Tour',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '',
            },
          },
        },
      },
      {
        id: 'ad7cbb4f-0464-4335-ac0d-d5b0a9c39ca0',
        url: '/Data/CardsVariants/HorizontalCards/HorizontalCard-2',
        name: 'HorizontalCard-2',
        displayName: 'HorizontalCard-2',
        fields: {
          SubTitle: {
            value: '',
          },
          Number: {
            value: '',
          },
          Description: {
            value:
              'The beautiful and inviting island nation of Mauritius is an ideal &lsquo;flop and drop&rsquo; at the conclusion of your safari. Indulge in the delightful scents of the fragrant.',
          },
          Image: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Feature/Hhshukla-World-Tour/product-big-2-600x366.jpg?h=366&iar=0&w=600&hash=663B8A78385DBE9EC757B4EA081E819B',
              alt: 'product-2',
              width: '600',
              height: '366',
            },
          },
          Title: {
            value: 'Mauritius Island, Africa',
          },
          CTA: {
            value: {
              href: '',
            },
          },
        },
      },
    ],
    Title: {
      value: '',
    },
    IconImage: {
      value: {},
    },
  },
};
export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
