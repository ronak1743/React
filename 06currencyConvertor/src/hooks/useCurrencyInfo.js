import {useEffect, useState} from "react"


function useCurrencyInfo(currency){

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://${formattedDate}.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;