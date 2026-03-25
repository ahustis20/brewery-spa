import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import BreweryListing from './components/BreweryListing';
import { Brewery } from './types';
import { breweryService } from './services/breweryService';



function App() {

    const [breweries, setBreweries] = useState<Brewery[]>([]);
    // setBreweries(data);
    
    
    useEffect(() => {
        const fetchBreweries = async () => {
            try {
                const data = await breweryService.getAllBreweriesByCity("bozeman");
                setBreweries(data)
                
                numOfBreweries = data.length
                console.log(data.length)
                
            } catch (err) {
                
            }
            console.log("app")
        };
        
        fetchBreweries();
    }, [])
    
    var numOfBreweries = breweries.length;

    return (
        <div className="App">
            <header className="">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className="p-4 m-3 alert bg-bzn-yellow">
                    Breweries of Bozeman
                </div>

                <div className=''>
                    {numOfBreweries} Breweries in Bozeman
                </div>

                <div className='row'>
                    {breweries.map((brewery) => (
                        <div key={brewery.id} className='col-sm-6 col-md-4 col-lg-3 p-3'>
                            <BreweryListing brewery={brewery}></BreweryListing>
                        </div>
                    ))}
                </div>

            </header>

        </div>
    );
}

export default App;
