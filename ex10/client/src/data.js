//import React, { useState, useEffect, loading } from 'react'
const MAIN_DATA = [
    { content: "Deriving from the exquisite cookery craftsmanship and the spirit of inheritance, Tea Time adheres to the essence of French cuisine to produce hand-shaken drinks in a method resembling the preparation of the dishes and hand-shakes of each beverage with a workmanship attitude that is inherited by the hand-shaking morale. In the splendid beverage world, we insist on producing appetizing beverages and we pride ourselves on being a unique boutique brand in the hand-shaken beverage market and a brand that develops distinctive beverage formulae with an innovative and vibrant approach while adhering to our consumers’ favorite tastes."},
    { content: "We strictly select safe, professional, and superior raw ingredients from all over the world and rigorously safeguard all manufacturing procedures including the selection, drying, chopping, formulation, and supervision of the beverage-making process. We have passed the necessary agricultural inspections and our manufacturing process is in line with EU and Taiwan laws and regulations. Tea Time is equipped with a professional research and development team that devotes particular care to the precise formulae of beverages by customizing the weight of ice cubes added to the beverages, customizing the carbohydrate crystal, adapting the foam quantity of sparkling drinks, and collaborating with small-scale farmers that are close to the place of production to develop specially blended drinks using concentrated juice. You are then able to savor the flavors of top quality fruity green tea and experience the best sense of taste with genuine ingredients without having to go around the world in pursuit of diverse tea flavors." },
    { content: "For the sake of inheriting the Cordon Bleu tea beverage formulae, we look back on our initial resolution, which is why we insist on employing staff that is equipped with tea barista skills to prepare fresh tea every day. Our staffs possess the professional knowledge in tea-making including tea sampling, producing, drinking, and brewing and are able to perform the alternation of different water temperature beverages and follow the precise ratio of tea leaves and water volume, allowing the limited quantity of tea to have the best color and texture; the brewed tea is full of aroma and integrates classic, elegant, and multi-layered elements, which perfectly offers Tea Time’s unique flavor where the everlasting lingering taste produces a calm attitude and the persistence of pursuing perfection."}
];

/*function fetchData() {

}

const [loadingData, setLoadingData] = useState(true);
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

const MAIN_DATA = actualData;*/
export { MAIN_DATA };