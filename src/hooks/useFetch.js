import { useState, useEffect, useCallback, useContext } from "react";
import { getAdsToDisplay } from "../server/adManagement";
import { AdSearchContext } from "../context/AdSearchContext";
import axios from "axios";

function useFetch(query, page) {
    const { searchContext } = useContext(AdSearchContext)

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const sendQuery = useCallback(async () => {
        try {

            searchContext.page = page

            getAdsToDisplay(searchContext)
                .then((res) => {
                    if (page > 1)
                        setList((prev) => [...prev, ...res.data]);
                    else setList([...res.data])
                })

            setLoading(false)
        } catch (err) {
            setError(err);
        }
    }, [page, searchContext]);

    useEffect(() => {
        const source = axios.CancelToken.source()
        sendQuery(query);

        return () => {
            source.cancel()
        }
    }, [query, sendQuery, page]);

    return { loading, error, list };
}

export default useFetch;