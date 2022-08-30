import { useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

import type { MapProps } from "./types";

const Map: React.FC<MapProps> = ({
  fullscreen = false,
  draggableMarker = false,
  activeSearch = false,
  position,
  setPosition,
}) => {
  const DraggableMarker = () => {
    const markerRef = useRef(null);

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker: any = markerRef.current;

          if (marker && marker !== null) {
            setPosition && setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    useMapEvents({
      click(event) {
        setPosition && setPosition(event.latlng);
      },
    });

    return (
      <Marker
        draggable={draggableMarker ? true : false}
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
        style: "bar",
        showMarker: false,
        notFoundMessage: "با عرض پوزش، آدرس مورد نظر شما یافت نشد.",
        searchLabel: "جستجو آدرس",
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
      className={`map ${fullscreen ? "h-full" : "h-36"}`}
      center={position}
      zoom={20}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
      {activeSearch && <Search provider={new OpenStreetMapProvider()} />}
    </MapContainer>
  );
};

export default Map;
