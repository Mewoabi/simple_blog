import { useState, useEffect } from "react";

const useFetch = (resource) => {

    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null); 
    
    useEffect(() => {
        fetch(resource)
        .then((res) => {
            if(res.status !== 200 || !res.ok) {
                throw new Error("couldn't fetch resource");
            }
                return res.json();
        }).then(data => {
            setData(data);
            setIspending(false);
            setError(null);
            console.log (data);
        }).catch(err => {
            setIspending(false)
            setError(err.message);
        })
    },[resource]);
    return { data, isPending , error}
}
 
export default useFetch;