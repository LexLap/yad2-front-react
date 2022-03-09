import React, { useCallback, useEffect, useRef, useState, useContext } from "react";
import { AdDisplayContext } from "../../context/AdDisplayContext";
import useFetch from "../../hooks/useFetch";
import Advertisement from "./Advertisement";

const PublishedAdsContainer = () => {

    const { displayContext } = useContext(AdDisplayContext)

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const { loading, error, list } = useFetch(query, page);
    const loader = useRef(null);


    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);


    useEffect(() => {
        console.log('updating display')
        setPage(1)
        setQuery(displayContext)
    }, [displayContext]);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);


    return (
        <div className='ads-container'>
            <div id='spacer-1' />
            {list.map((adData, i) => {
                return <Advertisement key={i} adData={adData}
                />
            })}
            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
            <div ref={loader} />
        </div>
    );
}


// return (
//     <div className='ads-container'>
//         <div id='spacer-1' />
//         {
//             displayContext?.map((adData, i) => {
//                 console.log(adData)
//                 return <Advertisement key={i} adData={adData} />
//             })
//         }
//     </div>
// );
// };

export default PublishedAdsContainer;