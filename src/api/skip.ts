import axios from "axios"

// Function to get skips from the API
export const getSkips = async(url:string) => {
   const {data} = await axios.get(url)
   return data 
}