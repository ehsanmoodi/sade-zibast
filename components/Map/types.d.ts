export interface MapProps {
  fullscreen?: boolean;
  draggableMarker?: boolean;
  activeSearch?: boolean;
  position: {
    lat: number;
    lng: number;
  };
  setPosition?: (position) => void;
}
