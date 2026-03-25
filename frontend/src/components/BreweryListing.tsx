import React from "react";
import { Brewery } from "../types";


export default function BreweryListing({
    brewery 
}: { brewery: Brewery}) {
    return (
        <div className="p-4 m-3 alert alert-primary h-100 ">
            <div className="flex">

                <div className="row">
                    <div className="col">Name:</div>
                    <div className="col">{brewery.name}</div>
                </div>
                
                <div className="row">
                    <div className="col">Type:</div>
                    <div className="col">{brewery.brewery_type}</div>
                </div>

            </div>
        </div>
    );
}