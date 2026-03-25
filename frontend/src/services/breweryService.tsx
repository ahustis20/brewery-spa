import { env } from '../env'
import { Brewery } from '../types'

const API_BASE_URL = env.API_BASE_URL

export const breweryService = {



    async getAllBreweriesByCity(city: string): Promise<Brewery[]> {

        const formattedCity : string = city.toLowerCase()

        console.log(city)
        console.log(formattedCity)
        
        const response = await fetch(`${API_BASE_URL}?by_city=${city}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const data = await response.json()

        console.log("service")
        console.log(data)
        return data;

    }
}