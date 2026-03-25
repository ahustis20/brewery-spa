import React from "react";
import { Brewery } from "../types";

type BreweryListCardProps = {
    brewery: Brewery
}

export default function BreweryListCard({
    brewery
}: BreweryListCardProps) {
    
    return (
        <div className="p-4 card h-100 cursor-pointer">
            <div className="flex card-body text-justify">

                <h5 className="card-title text-left">{brewery.name}</h5>

                <h6 className="card-subtitle">{brewery.type}</h6>
               
                <div className="card-text">
                    {brewery?.address}, {brewery?.city} {brewery?.state_province}, {brewery?.country}
                </div>
                
                <a href={brewery.url} target="_blank" className="card-link">{brewery.url}</a>

            </div>
        </div>
    );
}