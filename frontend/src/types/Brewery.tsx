import React from "react";

export interface Brewery {
    id : string;
    name : string;
    type? : string;
    address? : string;
    city? : string;
    state_province? : string;
    country? : string;
    url? : string;
    longitude : number;
    latitude : number;
}

