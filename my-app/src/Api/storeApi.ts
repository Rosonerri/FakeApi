import axios from "axios"

const URL: string = "https://fakestoreapi.com/products";

export const getProduct = async () =>{
    try {
        return await axios.get(URL).then((res) =>{
            return res.data;
        })
    } catch (error) {
        return error
    }
}