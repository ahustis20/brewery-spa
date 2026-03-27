import { env } from '../env'
import { Brewery } from '../types'

const API_BASE_URL = env.API_BASE_URL

export const BreweryService = {

    async getAllBreweriesByCity(city: string): Promise<Brewery[]> {


        // use env variable to set the api url for the api server
        const response = await fetch(`${API_BASE_URL}breweries`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        

        // check if response has an error message
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        
        try {
            // wrap json encode in a try catch
            var data = await response.json()
        } catch (error) {
            throw new Error('Error getting data');
        }

        // create array of brewery types from the data recieved from api
        const breweries: Brewery[] = data.map((item: any) => ({
            id : item.id,
            name : item.name,
            type : item.brewery_type.charAt(0).toUpperCase() + item.brewery_type.slice(1) || "",
            address : item.address_1 || "",
            city: item.city || "",
            state_province: item.state_province || "",
            country: item.country || "",
            url : item.website_url || "",
            phone : item.phone || "",
            longitude : item.longitude,
            latitude : item.latitude
        }));

        // return array of breweries
        return breweries;

    }
}