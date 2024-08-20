declare module '@maplibre/maplibre-gl-geocoder' {
    import { IControl, Map } from 'maplibre-gl';
  
    export interface GeocoderOptions {
      forwardGeocode?: (config: { query: string }) => Promise<{ features: any[] }>;
      maplibregl?: any;
      marker?: boolean;
      // Add other options as needed
    }
  
    class MaplibreGeocoder implements IControl {
      constructor(options: GeocoderOptions);
      onAdd(map: Map): HTMLElement;
      onRemove(map: Map): void;
      on(type: string, listener: (ev: any) => void): this;
    }
  
    export default MaplibreGeocoder;
  }