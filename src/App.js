



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
                    <img style={{ width: "25%", margin: "30px 0" }} src={data.results[0].multimedia[0].url}/>
                    <li>{data.results[1].title}</li>
                    <img style={{ width: "25%", margin: "30px 0" }} src={data.results[1].multimedia[0].url}/>
                    <li>{data.results[2].title}</li>
                    <img style={{ width: "25%", margin: "30px 0" }} src={data.results[2].multimedia[0].url}/>
                    <li>{data.results[3].title}</li>
                    <img style={{ width: "25%", margin: "30px 0" }} src={data.results[3].multimedia[0].url}/>
                </ul>
            }
        </div>
    )
}

export default App;
