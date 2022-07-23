export interface InviteCard {
  name: string;
  date: string;
  date_description: string;
  description: string;
  description_second: string;
  address: string;
  images: {
    name: string;
    url: string;
  }[];
  slug: string;
  price: number;
  paid: true;
  id: string;
  latitude: number;
  longitude: number;
  expired: boolean;
}

export interface InviteCardResponse {
  success: booelan;
  status: number;
  data: InviteCard;
}
