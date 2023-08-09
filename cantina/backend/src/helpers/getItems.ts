export type ItemsResult = {
  items: Items[];
  lists: Lists[];
};

type Items = {
  alias: string;
  name: string;
  caption: string;
  gallery: {
    thumb: string;
    url: string;
  };
  price: {
    amount: number;
    currency: string;
  };
  priceFrom: {
    amount: number;
    currency: string;
  };
  kind: string;
};

type Lists = {
  alias: string;
  name: string;
  caption: string;
  gallery: {
    thumb: string;
    url: string;
  };
  wholePrice: {
    amount: number;
    currency: string;
  };
  items: Items;
};

type User = {
  id: string;
  name: string;
  alias: string;
  timezone: string;
  language: string;
  accountId: string;
  email: string;
};

export function getItems(/*user: User*/): ItemsResult {
  const result = {
    items: [
      {
        alias: "item1",
        name: "Item 1",
        caption: "This is item 1",
        gallery: {
          thumb: "thumb1.jpg",
          url: "item1.jpg",
        },
        price: {
          amount: 19.99,
          currency: "USD",
        },
        priceFrom: {
          amount: 15.99,
          currency: "USD",
        },
        kind: "Category A",
      },
      {
        alias: "item2",
        name: "Item 2",
        caption: "This is item 2",
        gallery: {
          thumb: "thumb2.jpg",
          url: "item2.jpg",
        },
        price: {
          amount: 29.99,
          currency: "EUR",
        },
        priceFrom: {
          amount: 24.99,
          currency: "EUR",
        },
        kind: "Category B",
      },
    ],
    lists: [
      {
        alias: "list1",
        name: "List 1",
        caption: "This is list 1",
        gallery: {
          thumb: "list_thumb1.jpg",
          url: "list1.jpg",
        },
        wholePrice: {
          amount: 49.99,
          currency: "USD",
        },
        items: {
          alias: "item1",
          name: "Item 1",
          caption: "This is item 1",
          gallery: {
            thumb: "thumb1.jpg",
            url: "item1.jpg",
          },
          price: {
            amount: 19.99,
            currency: "USD",
          },
          priceFrom: {
            amount: 15.99,
            currency: "USD",
          },
          kind: "Category A",
        },
      },
      {
        alias: "list2",
        name: "List 2",
        caption: "This is list 2",
        gallery: {
          thumb: "list_thumb2.jpg",
          url: "list2.jpg",
        },
        wholePrice: {
          amount: 64.99,
          currency: "EUR",
        },
        items: {
          alias: "item2",
          name: "Item 2",
          caption: "This is item 2",
          gallery: {
            thumb: "thumb2.jpg",
            url: "item2.jpg",
          },
          price: {
            amount: 29.99,
            currency: "EUR",
          },
          priceFrom: {
            amount: 24.99,
            currency: "EUR",
          },
          kind: "Category B",
        },
      },
    ],
  };

  return result;
}
