import { useEffect, useState } from 'react';
import './App.css';
import BreweryList from './components/BreweryList';
import BreweryDetailedView from './components/BreweryDetailedView';
import { Brewery } from './types';
import { BreweryService } from './services/brewery-service';



function App() {

    // creating constants to and creating state variables 
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [listView, setListView] = useState(true);
    const [error, setError] = useState(false);
    const [selectedBrewery, setSelectedBrewery] = useState<Brewery | null>(null);
    const cityName = "Denver";

    // view boolean for going to detailed view
    function handleBreweryClick(brewery: Brewery) {
        setSelectedBrewery(brewery);
        setListView(false);
    }

    // view boolean for returning to list page
    function handleReturnClick() {
        console.log("return click");
        setSelectedBrewery(null);
        setListView(true);
    }
    
    // fetches list of breweries on initial page load
    useEffect(() => {
        const fetchBreweries = async () => {
            try {
                // getting data from api
                const data = await BreweryService.getAllBreweriesByCity(cityName);
                setBreweries(data);
                
            } catch (err) {
                // error handling on the api call
                console.log(err);
                setError(true);
            }
        };
        
        fetchBreweries();
    }, [])
    

    return (
        <div className="App bg-gradient-dark">
            <div className="app-header">
                <h1 className='text-center text-white font-weight-bold opacity-100'>Breweries of {cityName}</h1>
                
            </div>

            <header className="container">
                <div className='py-3'>

                    {/* error message if data fails to load */}
                    {error && 
                        <div className='alert alert-danger'>
                            Error getting brewery data, please try again.
                        </div>
                    }

                    {/* brewery list view -- default */}
                    {listView && !error &&
                        <div>
                            <BreweryList 
                                breweries={breweries}
                                onBreweryClick={handleBreweryClick}
                                cityName={cityName}></BreweryList>
                        </div>
                    } 

                    {/* brewery detailed view */}
                    {!listView && !error  && 
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
