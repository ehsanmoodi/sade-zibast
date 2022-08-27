export interface PaymentsListItem {
  code: number;
  created_at: {
    gregorian: string;
    jalali: string;
    timestamp: number;
    tz: string;
  };
  entity_id: string;
  id: string;
  paid: boolean;
  price: number;
  provider_name: string;
  tracking_code: null | number;
  type: number;
}

export interface PaymentsList {
  data: {
    items: PaymentsListItem[];
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
