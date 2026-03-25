import { env } from '../env'
import { Brewery } from '../types'

const API_BASE_URL = env.API_BASE_URL

export const BreweryService = {

    async getAllBreweriesByCity(city: string): Promise<Brewery[]> {

        const formattedCity : string = city.toLowerCase()
        
        const response = await fetch(`${API_BASE_URL}?by_city=${city}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        
        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const data = await response.json()

        console.log(data)

        const breweries: Brewery[] = data.map((item: any) => ({
            id : item.id,
            name : item.name,
            type : item.brewery_type.charAt(0).toUpperCase() + item.brewery_type.slice(1),
            address : (item.address_1 || " ") + (item.address_2 || " ") + (item.address_3 || " "),
            city: item.city,
            state_province: item.state_province,
            country: item.country,
            url : item.website_url || "N/A",
            longitude : item.longitude,
            latitude : item.latitude
        }));

        return breweries;

    }
}