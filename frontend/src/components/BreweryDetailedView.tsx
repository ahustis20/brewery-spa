import React from "react";
import { Brewery } from "../types";
import GoogleMapReact from "google-map-react";

type BreweryDetailedViewProps = {
    brewery: Brewery | null,
    onReturnClick: () => void;
}


export default function BreweryDetailedView({
    brewery,
    onReturnClick 
}: BreweryDetailedViewProps) {
    
    const BreweryMarker = ({ text, lat, lng }: {text: string; lat: number; lng : number;}) => ( 
        <div><i className="fa-solid fa-map-pin"></i></div>
    );

    const defaultProps = {
        center: {
            lat: brewery?.latitude || 0,
            lng: brewery?.longitude || 0
        },
        zoom: 11
    };

    return (
        <div className="m-3">

            <div className="nav nav-pills py-4 cursor-pointer">
                <div className="nav-item">
                    <div className="nav-link active bg-info" 
                        onClick={() => onReturnClick()}>
                            <i className="fa-solid fa-arrow-left pr-2"></i> Return to List
                    </div>
                </div>
            </div>

            <div className="alert alert-primary">
                <div className="flex py-2">

                    <h4>{brewery?.name}</h4>
                    
                    <h5>{brewery?.type}</h5>
                    <p>{brewery?.address || ""} {brewery?.city}, {brewery?.state_province}, {brewery?.country}</p>
                    
                    <a href={brewery?.url} target="_blank" className="card-link">{brewery?.url}</a>
                </div>

                <div style={{ height: '48vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <BreweryMarker
                            lat={59.955413}
                            lng={30.337844}
                            text="Brewery Location"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
}