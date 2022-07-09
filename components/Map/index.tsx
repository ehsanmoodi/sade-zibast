import { useEffect, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const Map: React.FC = () => {
  const center = {
    lat: 35.7219,
    lng: 51.3347,
  };

  const [position, setPosition] = useState(center);

  const DraggableMarker = () => {
    const markerRef = useRef(null);

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker: any = markerRef.current;

          if (marker && marker !== null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    useMapEvents({
      click(event) {
        setPosition(event.latlng);
      },
    });

    return (
      <Marker
        draggable
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      ></Marker>
    );
  };

  const Search = (props: any) => {
    const map = useMap();
    const { provider } = props;

    useEffect(() => {
      const searchControl = GeoSearchControl({
        provider,
        // style: "bar",
        showMarker: false,
      });

      map.addControl(searchControl);

      return () => {
        map.removeControl(searchControl);
      };
    }, [props]);

    return null;
  };

  return (
    <MapContainer
      className="map"
      center={center}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
      <Search provider={new OpenStreetMapProvider()} />
    </MapContainer>
  );
};

export default Map;
