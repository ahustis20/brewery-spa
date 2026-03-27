import React from "react";

export interface Brewery {
    id : string;
    name : string;
    type? : string;
    address? : string;
    city? : string;
    state_province? : string;
    country? : string;
    zip? : string;
    url? : string;
    phone? : string;
    longitude : number;
    latitude : number;
}

