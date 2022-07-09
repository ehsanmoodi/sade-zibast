export interface MapModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  position: {
    lat: number;
    lng: number;
  };
  setPosition?: (position) => void;
}
