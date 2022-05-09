import { useEffect, useState } from "react";
import getProducts from "../Components/helpers/getData";
import { ProductFetch } from "../types/typeApp";

const useFetch = () => {

    const [data, setData] = useState<ProductFetch>({
        products: [],
        isLoading: true,
        isError: false
    });

    useEffect(() => {
        getProducts()
            .then(data => {
                setData({
                    products: data,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(err => {
                setData({
                    products: [],
                    isLoading: false,
                    isError: true
                })
            })
    },[])

    return data;
}

export default useFetch;