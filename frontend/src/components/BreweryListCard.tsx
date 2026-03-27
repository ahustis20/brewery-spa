import React from "react";
import { Brewery } from "../types";

type BreweryListCardProps = {
    brewery: Brewery
}

export default function BreweryListCard({
    brewery
}: BreweryListCardProps) {
    
    return (
        <div className=" card h-100 brewery-card shadow">
            <div className="card-header p-3">

                <h5 className="card-title text-left">{brewery.name}</h5>
            </div>
            <div className="flex card-body text-justify p-3">


                <h6 className="card-subtitle">{brewery.type}</h6>
               
                <div className="card-text">
                   {brewery.address !== '' ? (
                        <>
                            {brewery.address}
                            <br />
                        </>
                    ) : ""}
                    {brewery?.city}, {brewery?.state_province} {brewery?.zip}<br></br>{brewery?.country}
                </div>
                
                { brewery.url ? (
                    <a href={brewery.url} target="_blank" className="card-link">{brewery.url}</a>
                ) : (
                    <span>Website Not Available</span>
                )}

            </div>
        </div>
    );
}