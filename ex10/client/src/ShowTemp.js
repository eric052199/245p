import React, { useState, useEffect, loading } from 'react'
import "./ShowInfo.css"

function LandingView() {
    const [loading, setLoadingData] = useState(true);
    const [error, setError] = useState(false);
    const [emptyData, setEmptyData] = useState(false);
    const [data, setData] = useState(false);
    const zip = "92617"
    const country = "United States of America"
    const APIkey = "869b2aba1048157afeced4c1b1651659";
    const lat = "25.0330";
    const lon = "121.5644";
    const temp_format = "metric";
    
    useEffect(() => {
        // start the fetching
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${temp_format}`
        )
            // handling responses
            .then((response) => response.json())
            // handling normal data state
            .then((actualData) => {
                setLoadingData(false);
                setError(false);
                setData(actualData);
                console.log(actualData);
            })
            // handling errors
            .catch((err) => {
                console.log(err.message);
                setLoadingData(false);
                setError(true);
            });
    }, []); // no callback statement within the useEffect means that the embedded function will only run once; when the DOM was loaded!

    if(loading || error){
        return (loading || error) && (
            <>
                <div className='Info'>
                    loading: {loading ? "loading" : "not loading"}
                    <br />
                    error: {error ? "error" : "not error"}
                    <br />
                    location: {data.name}
                    <br />
                    temp: {data.main.temp}
                    <br />
                    weather: {data.weather[0].main}
                    <br />
                    max temperature of the day: {data.main.temp_max}
                    <br />
                    min temperature of the day: {data.main.temp_min}
                    <br />
                    wind speed: {data.wind.speed}
                    <br />
                    wind degree: {data.wind.deg}
                </div>
            </>
        )
    }

    return !loading && !error && (
        <>
            {/*<Main content={MAIN_DATA[0].content} />*/}
            <div className='Info'>
                location: {data.name}
                <br />
                temp: {data.main.temp}
                <br />
                weather: {data.weather[0].main}
                <br />
                max temperature of the day: {data.main.temp_max}
                <br />
                min temperature of the day: {data.main.temp_min}
                <br />
                wind speed: {data.wind.speed}
                <br />
                wind degree: {data.wind.deg}
            </div>
        </>
    )
    
}

export default LandingView

