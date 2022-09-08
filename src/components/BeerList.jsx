import Beer from "./Beer";
import BeerDetails from "./BeerDetails";

const BeerList = function({ beers }){
    
    
    
    const beerName = beers.map((beer)=>{
        return (
            <li>
            <Beer beer = {beer} />
            </li>
        )
    });


    const selectBeer = function (beers, id){
        const beer = beers.find(({id}) => id === 9)   
        return beer
    }


    
    console.log(selectBeer(beers))

    // const beerDetails = function (selectedBeer){
    //     return (
    //         <li>
    //         <BeerDetails selectBeer = {selectedBeer} />
    //         </li>
    //     )
    // };

    // const displayDetails = beerDetails(selectBeer(beers))


    return (
        <>
        <h2>This is the beer lis LESGOOOO</h2>
        <hr />
        {beerName}
        <hr />
        <ul>
        {/* {displayDetails} */}
        </ul>
        <hr />
        </>
    )
};

export default BeerList;