import BreweryListCard from './BreweryListCard';
import { Brewery } from "../types";

type BreweryListProps = {
    breweries: Brewery[],
    onBreweryClick: (brewery: Brewery) => void;
    cityName: string;
}

export default function BreweryList({ 
    breweries,
    onBreweryClick,
    cityName
} : BreweryListProps) {

    return (
        <div className='row p-3'>
            <div className='p-3'>
                {breweries.length} Breweries in {cityName}
            </div>

            {breweries.map((brewery) => (
                <div key={brewery.id} 
                    className='p-2 col-sm-6'
                    onClick={() => onBreweryClick(brewery)}>

                    <BreweryListCard brewery={brewery}></BreweryListCard>
                </div>
            ))}
        </div>
    );
}