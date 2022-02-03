// credit: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds){
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    }
// Add if statement swapping API keys at limit
var priscillasApi = "612EED13-BBA7-4E82-AF79-78955F897E68" // :)
var stevensAPI = "865395AE-4F4E-48D5-A825-65822194FDE7" // :D
var jenAPI = "2FEC7249-7A76-4CEB-AB8B-EEEB43C6F19E" // ^-^
var chrisAPI = "EE0B3E38-CFD9-4BEE-8F5D-BF82AE6DD7BF" // O.O
var coinAPIKeys = [priscillasApi, stevensAPI, jenAPI, chrisAPI]
// Add more cryptos for later
var cryptoTickers = ['BTC', 'ETH', 'USDT'];
var cryptoInfo = {};
var chosenPoke=JSON.parse(localStorage.getItem("pokeID"))
//load in Crypto Rates
for(var i = 0; i < cryptoTickers.length; i++){
    //console.log(i);
        fetch('https://rest.coinapi.io/v1/exchangerate/USD/' + cryptoTickers[i] + '?apikey=' + coinAPIKeys[1])
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                //console.log(data.rate);
                //console.log(data.asset_id_quote);
                cryptoInfo[data.asset_id_quote] = data.rate
            })
        sleep(500)
    };
console.log(cryptoInfo.ETH);




fetch(`https://api.pokemontcg.io/v2/cards/${chosenPoke}`,{
    headers:{
        "Content-Type":"application/json",
        "X-Api-Key": "e8bdc35b-8907-45b0-b1c1-eb5d3cd116a6"
    }
})
// Turning into the json object
    .then(function(response){
        return response.json()
    })
// Drilling down to the first entry
    .then(function(data){
        //console.log(data);
        var imageURL=data.data.images.large;
        var pokeName=data.data.name;
        var pokeSetName=data.data.set.name;
        var buyURL=data.data.tcgplayer.url;

       //console.log(imageURL);
       $(`<img src="${imageURL}" alt="">`).appendTo("#column1");
       $(`<span class="title">${pokeName}</span>`).appendTo(".cardName");
       $(`<span class="setName">${pokeSetName}</span>`).appendTo(".cardSetName");
       $(`<a href="${buyURL}" target="_blank">Buy Now From TCGPlayer</a>`).appendTo(".line1TCG");

       if ("normal" in data.data.tcgplayer.prices){
        var normalPrices=data.data.tcgplayer.prices.normal;
        $(`<div class="col"><div class=""><h5 class="">normal market</h5><p class="">${normalPrices.market} USD</p></div></div>`).appendTo(".normal")
        //console.log("normal is in the price list");
       }
       
       if ("holofoil" in data.data.tcgplayer.prices){
        var holofoilPrices=data.data.tcgplayer.prices.holofoil;
        $(`<div class="col market"><div class="card-details"><h5 class="heading">holofoil market</h5><p class="">${holofoilPrices.market} USD</p></div></div>`).appendTo(".holofoil")
       // console.log("holofoil is in the price list");
       }

       if ("reverseHolofoil" in data.data.tcgplayer.prices){
        var reverseHolofoilPrices=data.data.tcgplayer.prices.reverseHolofoil;
        $(`<div class="col market"><div class="card-details"><h5 class="heading">reverseHolofoil market</h5><p class="">${reverseHolofoilPrices.market} USD</p></div></div>`).appendTo(".reverseHolofoil")
        //console.log("reverseHolofoil is in the price list");
       }

       if ("1stEditionHolofoil" in data.data.tcgplayer.prices){
        var firststEditionHolofoil=data.data.tcgplayer.prices["1stEditionHolofoil"] ;
        $(`<div class="col market"><div class="card-details"><h5 class="heading">1stEditionHolofoil market</h5><p class="">${firststEditionHolofoil.market} USD</p></div></div>`).appendTo(".1stEditionHolofoil")
        //console.log("1stEditionHolofoil is in the price list");
       }

       if ("1stEditionNormal" in data.data.tcgplayer.prices){
        var firstEditionNormal =data.data.tcgplayer.prices["1stEditionNormal"];
        $(`<div class="col market"><div class="card-details"><h5 class="heading">1stEditionNormal market</h5><p class="">${firstEditionNormal.market} USD</p></div></div>`).appendTo(".1stEditionNormal")
        //console.log("1stEditionNormal is in the price list");
       }
    });


    
