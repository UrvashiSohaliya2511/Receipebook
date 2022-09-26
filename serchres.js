import { navbar } from "./componants/navbar.js";
let container = document.querySelector( "#display" );
document.querySelector( "#nav" ).innerHTML = navbar();
let data = JSON.parse( localStorage.getItem( "receipe" ) );


class myreceipe {
    constructor ( data ) {
        this.data = data;
        this.title = data.strMeal;
        this.image = data.strMealThumb;
        this.ingri = "Ingridiants";
        this.rec_title = "Receipe";
        this.rec = data.strInstructions;

    }
    Ingridiants() {
        let div = document.createElement( "div" );
        div.setAttribute( "class", "ingri" );
        for ( let i = 1; i <= 20; i++ ) {
            let arr = [ [ "strIngredient" ], [ i ] ];
            let res = arr.join( "" );
            let mes = [ [ "strMeasure" ], [ i ] ];
            let mesr = mes.join( "" );
            if ( this.data[ res ].length > 2 ) {

                let p = document.createElement( "p" );
                p.innerText = `${ this.data[ res ] } : ${ this.data[ mesr ] }`;

                div.append( p );


            }
        }

        return div;

    }

    displaydata() {
        container.innerHTML = null;
        let main = document.createElement( "div" );
        let div1 = document.createElement( "div" );
        let div2 = document.createElement( "div" );
        let div3 = document.createElement( "div" );
        let div4 = document.createElement( "div" );
        let image = document.createElement( "img" );
        image.src = this.image;
        let title = document.querySelector( "h1" );
        title.innerText = this.title;
        let res = document.createElement( "h2" );
        res.innerText = this.ingri;
        let ind = document.createElement( "div" );
        ind.append( this.Ingridiants() );
        let rec = document.createElement( "h2" );
        rec.innerText = this.rec_title;
        let recp = document.createElement( "p" );
        recp.innerText = this.rec;
        div3.append( res, ind );
        div4.append( rec, recp );
        div2.append( div3, div4 );
        div1.append( image );
        main.append( div1, div2 );
        container.append( main );
    }


}
showdata( data[ 0 ] );

function showdata( data ) {

    let p = new myreceipe( data );
    p.displaydata();
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