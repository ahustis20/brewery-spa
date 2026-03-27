import { env } from '../env'
import { Brewery } from '../types'

const API_BASE_URL = env.API_BASE_URL

export const BreweryService = {

    async getAllBreweriesByCity(city: string): Promise<Brewery[]> {

        const formattedCity : string = city.toLowerCase()
        
        console.log(API_BASE_URL)

        // const response = await fetch(`${API_BASE_URL}breweries/?by_city=${city}`, {
        const response = await fetch(`${API_BASE_URL}breweries/`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        
        // console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        
        try {

            var data = await response.json()
        } catch (error) {
            throw new Error('Error getting data');
        }

        // console.log("data")
        // console.log(data)

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

        return breweries;

    }
}