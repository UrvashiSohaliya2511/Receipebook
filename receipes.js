import { navbar } from "./componants/navbar.js";
import getdata from "./componants/fetch.js";
let container = document.querySelector( "#display" );
document.querySelector( "#nav" ).innerHTML = navbar();

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=A";

let all = await getdata( url );
let data = all.meals;
console.log( data );
data.forEach( ( ele ) => {
    let image = document.createElement( "img" );
    let button = document.createElement( "button" );
    button.addEventListener( "click", function () {
        showres( ele )
    } );
    image.src = ele.strMealThumb;
    image.setAttribute( "class", "allimg" );
    button.innerText = "SEE RECEIPE";
    let div = document.createElement( "div" );
    let h1 = document.createElement( "h1" );
    h1.innerText = ele.strMeal;
    div.append( image, h1, button );
    container.append( div );
} );

let arr = [];

function showres( ele ) {
    arr.push( ele );
    localStorage.setItem( "receipe", JSON.stringify( arr ) );
    window.location.href = "searchres.html";
}
let profile = JSON.parse( localStorage.getItem( "userdata" ) );
let ndata = profile.filter( ( ele ) => {
    return ele.status === "true";
} );
if ( ndata.length == 1 ) {
    document.querySelector( "#sign_up" ).style.display = "none";
    document.querySelector( "#log_in" ).style.display = "none";
    document.querySelector( "#profile" ).innerText = ndata[ 0 ].username;
}

