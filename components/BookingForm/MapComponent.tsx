import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';

interface Location {
  address: string;
  coordinates: [number, number];
}

interface MapComponentProps {
  pickupLocation: Location | null;
  dropoffLocation: Location | null;
  onLocationSelect: (locationType: 'pickup' | 'dropoff', location: Location) => void;
  activeMarker: 'pickup' | 'dropoff';
}

const MapComponent: React.FC<MapComponentProps> = ({ pickupLocation, dropoffLocation, onLocationSelect, activeMarker }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const pickupMarker = useRef<maplibregl.Marker | null>(null);
  const dropoffMarker = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
      center: [6.7735, 51.2277], // Düsseldorf coordinates
      zoom: 12
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    const geocoder = new MaplibreGeocoder({
      forwardGeocode: async (config) => {
        const features = [];
        try {
          const request = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${config.query}&format=geojson&polygon_geojson=1&addressdetails=1`
          );
          const geojson = await request.json();
          for (let feature of geojson.features) {
            const center = [
              feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
              feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2
            ];
            const point = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              place_name: feature.properties.display_name,
              properties: feature.properties,
              text: feature.properties.display_name,
              place_type: ["place"],
              center: center
            };
            features.push(point);
          }
        } catch (e) {
          console.error(`Failed to forwardGeocode with error: ${e}`);
        }

        return {
          features: features
        };
      }
    });
    map.current.addControl(geocoder, 'top-left');

    geocoder.on('result', (e: { result: { center: [number, number]; place_name: string } }) => {
      onLocationSelect(activeMarker, {
        address: e.result.place_name,
        coordinates: e.result.center as [number, number]
      });
    });

    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then(response => response.json())
        .then(data => {
          onLocationSelect(activeMarker, {
            address: data.display_name,
            coordinates: [lng, lat]
          });
        });
    });

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (!map.current) return;

    // Update markers when locations change
    if (pickupLocation) {
      if (pickupMarker.current) {
        pickupMarker.current.setLngLat(pickupLocation.coordinates);
      } else {
        pickupMarker.current = new maplibregl.Marker({color: "#4d8b31"})
          .setLngLat(pickupLocation.coordinates)
          .addTo(map.current);
      }
    }

    if (dropoffLocation) {
      if (dropoffMarker.current) {
        dropoffMarker.current.setLngLat(dropoffLocation.coordinates);
      } else {
        dropoffMarker.current = new maplibregl.Marker({color: "#f71735"})
          .setLngLat(dropoffLocation.coordinates)
          .addTo(map.current);
      }
    }

    // Update route when both locations are set
    if (pickupLocation && dropoffLocation) {
      getRoute(map.current, pickupLocation.coordinates, dropoffLocation.coordinates);
      
      // Fit the map to the markers
      const bounds = new maplibregl.LngLatBounds()
        .extend(pickupLocation.coordinates)
        .extend(dropoffLocation.coordinates);

      map.current.fitBounds(bounds, { padding: 100 });
    }
  }, [pickupLocation, dropoffLocation]);

  const getRoute = (map: maplibregl.Map, start: [number, number], end: [number, number]) => {
    const url = `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const route = data.routes[0].geometry;

        if (map.getSource('route')) {
          (map.getSource('route') as maplibregl.GeoJSONSource).setData(route);
        } else {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: route
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#888',
              'line-width': 8
            }
          });
        }
      });
  };

  return (
    <div>
      <div ref={mapContainer} className="w-full h-[500px]" />
      <div className="mt-4 text-center text-federal-blue">
        <p>Click on the map to set {activeMarker} location</p>
      </div>
    </div>
  );
};

export default MapComponent;