export interface CardsListItem {
  name: string;
  date: string;
  slug: string;
  price: number;
  paid: boolean;
  status: number;
  id: string;
  expired: boolean;
}

export interface CardsList {
  data: {
    items: CardsListItem[];
    links: {
      self: {
        href: string;
      };
      first: {
        href: string;
      };
      last: {
        href: string;
      };
    };
    meta: {
      totalCount: number;
      pageCount: number;
      currentPage: number;
      perPage: number;
    };
    status: number;
    success: boolean;
  };
}

export interface CardDetail {
  name: string;
  date: Date;
  date_description: string;
  description: string;
  description_second: string;
  address: string;
  images: {
    name: string;
    url: string;
  }[];
  slug: string;
  created_at: {
    jalali: Date;
    gregorian: Date;
    timestamp: number;
    tz: string;
  };
  updated_at: {
    jalali: Date;
    gregorian: Date;
    timestamp: number;
    tz: string;
  };
  price: number;
  paid: boolean;
  status: number; // 1=pending, 2=approved, 3=disabled, 4=rejected
  id: string;
  latitude: number;
  longitude: number;
  expired: boolean;
}
