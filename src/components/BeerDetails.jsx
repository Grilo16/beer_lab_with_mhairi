const BeerDetails = function({ beer }){
    // 0 ['id', 22]
    // 1 ['name', 'Devine Rebel (w/ Mikkeller)']
    // 2 ['tagline', 'Oak-aged Barley Wine.']
    // 3 ['first_brewed', '12/2008']
    // 4 ['description', "Two of Europe's most experimental, boundary-pushin… and was going to be partially aged in oak casks."]
    // 5 ['image_url', 'https://images.punkapi.com/v2/22.png']
    // 6 ['abv', 12.5]
    // 7 ['ibu', 100]
    // 8 ['target_fg', 1030]
    // 9 ['target_og', 1093]
    // 10 ['ebc', 36]
    // 11 ['srm', 18]
    // 12 ['ph', 4.4]
    // 13 ['attenuation_level', 68]
    // 14 ['volume', {…}]
    // 15 ['boil_volume', {…}]
    // 16 ['method', {…}]
    // 17 ['ingredients', {…}]
    // 18 ['food_pairing', Array(3)]
    // 19 ['brewers_tips', 'Rack off to a secondary fermenter before pitching in some champagne.']
    // 20 ['contributed_by', 'Sam Mason <samjbmason>']

    return (
        <div>
            <p>is this beer details?</p>
            <p>{beer.name}</p>

        </div>

    )
};

export default BeerDetails;