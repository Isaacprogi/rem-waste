import axios from "axios"
export const getSkips = async(url:string) => {
   const {data} = await axios.get(url)
   return data 
}