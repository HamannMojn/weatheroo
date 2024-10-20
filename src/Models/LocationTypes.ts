export interface PlusCode {
    compound_code: string;
    global_code: string;
  }
  
export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }
  
export interface Location {
    lat: number;
    lng: number;
  }
  
export interface Viewport {
    northeast: Location;
    southwest: Location;
  }
  
export interface Geometry {
    location: Location;
    location_type: string;
    viewport: Viewport;
  }
  
export interface Result {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    plus_code: PlusCode;
    types: string[];
  }
  
export interface LocationResponse {
    plus_code: PlusCode;
    results: Result[];
  }

  export const defaultPlusCode:PlusCode = {
    compound_code: "",
    global_code: "",
  }
  export const defaultLocationResponse:LocationResponse = {
    plus_code: defaultPlusCode,
    results: [],
  }