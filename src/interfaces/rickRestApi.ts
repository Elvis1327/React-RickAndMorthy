export interface RootObject {
    info: Info;
    rickRestApi: CharacterApi[];
   }
   
   export interface Info {
    count: number;
    next:  string;
    pages: number;
    prev:  null;
   }
   
   export interface CharacterApi {
    created:  Date;
    episode:  string[];
    gender:   string;
    id:       number;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  string;
    status:   string;
    type:     string;
    url:      string;
   }
   
   
   export interface Location {
    name: string;
    url:  string;
   }
   
   export interface Species {
    alien: string,
    human: string,
   }
   
   