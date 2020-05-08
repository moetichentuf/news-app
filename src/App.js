// // src/App.js
//
// import React, {Component} from 'react';
//
// class App extends Component {
//     render () {
//         return (
//             <div class="card">
//                 <div class="card-body">
//                     <h5 class="card-title">Steve Jobs</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
//                     <p class="card-text">Stay Hungry, Stay Foolish</p>
//                 </div>
//             </div>        );
//     }
// }
//
// export default App;
//


import React, { useState, useEffect } from "react";

const News = () => {
    const [hasError, setErrors] = useState(false);
    const [news, setNews] = useState({});
    const apiKey=process.env.REACT_APP_SECRET_KEY;

    async function fetchData() {
        const res = await fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key="+ apiKey);
        res
            .json()
            .then(res => setNews(res['results'][1]['title']))
            .then(pic => setNews(pic['results']['multimedia']['url']))

            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>

            <h1>{JSON.stringify(news)}</h1>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );

};
export default News;
