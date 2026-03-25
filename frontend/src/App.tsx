import { useEffect, useState } from 'react';
import './App.css';
import BreweryList from './components/BreweryList';
import BreweryDetailedView from './components/BreweryDetailedView';
import { Brewery } from './types';
import { BreweryService } from './services/BreweryService';



function App() {

    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [listView, setListView] = useState(true);
    const [selectedBrewery, setSelectedBrewery] = useState<Brewery | null>(null);
    const cityName = "Denver";

    // view boolean for going to detailed view
    function handleBreweryClick(brewery: Brewery) {
        setSelectedBrewery(brewery)
        setListView(false);
    }

    // view boolean for returning to list page
    function handleReturnClick() {
        console.log("return click")
        setSelectedBrewery(null)
        setListView(true);
    }
    
    // fetches list of breweries on initial page load
    useEffect(() => {
        const fetchBreweries = async () => {
            try {
                const data = await BreweryService.getAllBreweriesByCity(cityName);
                setBreweries(data)
                
                // console.log(data.length)
                
            } catch (err) {
                // todo: add error handling

            }
            // console.log("app")
        };
        
        fetchBreweries();
    }, [])
    

    return (
        <div className="App bg-gradient-primary">
            <header className="container">
                
                <div className="alert alert-secondary">
                    Breweries of {cityName}
                </div>

                <div className='py-3'>

                    {listView &&
                        <div>
                            <BreweryList 
                                breweries={breweries}
                                onBreweryClick={handleBreweryClick}
                                cityName={cityName}></BreweryList>
                        </div>
                    } 

                    {!listView &&
                        <div>
                            <BreweryDetailedView 
                                brewery={selectedBrewery} 
                                onReturnClick={handleReturnClick}></BreweryDetailedView>
                        </div>
                    }           
                </div>

            </header>

        </div>
    );
}

export default App;
