import {useEffect, useState} from "react"
import BeerDetails from "../components/BeerDetails";
import BeerList from "../components/BeerList";
import Header from "../components/Header";


const BeerContainer = function (){

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        getBeers()
    },[]);
    
    const getBeers = function(){
        fetch("https://api.punkapi.com/v2/beers")
        .then(result => result.json())
        .then((beers) => setBeers(beers))
    };

    console.log(beers)
    return (
        <>
        <h2>This is the beer container, this is where the beer list is gonna go</h2>
        <Header/>
        <BeerList beers = {beers}/>
        <hr />
        </>
    )
};

export default BeerContainer;