



import React, { useState, useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return {loading,data};
};

function App() {
    const apiKey=process.env.REACT_APP_SECRET_KEY;

    const {loading,data} = useFetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key="+ apiKey);

    return (
        <div>
            {loading ? <div>Loading...</div> :
                <ul>
                    <li>{data.results[0].title}</li>
                    <li>{data.results[1].title}</li>
                    <li>{data.results[2].title}</li>
                    <li>{data.results[3].title}</li>
                </ul>
            }
        </div>
    )
}

export default App;
