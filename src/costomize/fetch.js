import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";



const useFetch = (url, isCovidData) => {
    const [data, setdata] = useState([]);
    const [isloadding, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                let data = (res && res.data) ? res.data : []
                if (data && res.data.length > 0 && isCovidData) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                    data = data.reverse();
                }
                setdata(data);
                setLoading(false);
                setError(false)
            }

            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setError(true);
                    setLoading(false);
                }

            }
        }
        setTimeout(() => {
            fetchData();
        }, 1000);
        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }


    }, [url]);
    return { data, isloadding, isError }
}


export default useFetch;