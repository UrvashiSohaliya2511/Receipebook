import { navbar } from './componants/navbar.js';
import getdata from './componants/fetch.js';
document.querySelector( "#nav" ).innerHTML = navbar();



let container = document.querySelector( "#searchRes" )
document.querySelector( "#search" ).addEventListener( "input", showOptions )
async function showOptions() {
    let query = document.querySelector( "#search" ).value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ query }`;
    let data = await getdata( url );
    debounce( showName( data.meals ), 2 );
    // ramdomRecp();


}

function showName( data ) {
    document.querySelector( "#searchRes" ).style.visibility = "visible";
    container.innerHTML = null;
    data.forEach( ( ele ) => {
        let div = document.createElement( "div" );
        div.addEventListener( "click", function () {
            showres( ele );
        } )
        let p = document.createElement( "p" );
        p.innerText = ele.strMeal;
        div.append( p );
        container.append( div );

    } );




}
let arr = [];
function showres( ele ) {
    arr.push( ele );
    localStorage.setItem( "receipe", JSON.stringify( arr ) );
    window.location.href = "searchres.html";
}


let id;

function debounce( func, delay ) {
    if ( id ) {
        clearTimeout( id );
    }
    id = setTimeout( function () {
        func();
    }, delay );
}
let random_url = 'https://www.themealdb.com/api/json/v1/1/random.php';


let recp = await getdata( random_url );
let recdata = recp.meals[ 0 ];
let image = document.createElement( "img" );
let button = document.createElement( "button" );
button.addEventListener( "click", function () {
    showres( recdata )
} );
image.src = recdata.strMealThumb;
image.setAttribute( "class", "img" );
button.innerText = "SEE RECEIPE";
let div = document.createElement( "div" );
let h1 = document.createElement( "h1" );
let h4 = document.createElement( "h4" );
h1.innerText = recdata.strMeal;
h4.innerText = "Today's Receipe";
div.append( h4, h1, button );
document.querySelector( "#res_day" ).append( image, div );
console.log( recp.meals[ 0 ] );
let data = JSON.parse( localStorage.getItem( "userdata" ) );
let ndata = data.filter( ( ele ) => {
    return ele.status === "true";
} );
if ( ndata.length == 1 ) {
    document.querySelector( "#sign_up" ).style.display = "none";
    document.querySelector( "#log_in" ).style.display = "none";
    document.querySelector( "#profile" ).innerText = ndata[ 0 ].username;
}