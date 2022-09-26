let arr = JSON.parse( localStorage.getItem( "userdata" ) ) || [];
class user {
    constructor ( name, email, password ) {
        this.username = name;
        this.email = email;
        this.password = password;
        this.status = 'false';
    }
    valide_user() {
        if ( this.username.length > 3 ) {
            return true;
        } else {
            return false;
        }
    }
    valide_password() {
        if ( this.password.length > 4 ) {
            return true;
        } else {
            return false;
        }
    }
    valide_email() {
        if ( arr.length == 0 ) {

            return true;

        } else {
            let check = arr.filter( ( ele ) => {
                return this.email === ele.email;
            } );
            if ( check.length == 0 ) {
                return true;
            } else {
                return false;
            }
        }
    }

    adduser() {
        arr.push( this );
        localStorage.setItem( "userdata", JSON.stringify( arr ) );
    }
    checklogin( email, password ) {

        let x = "false";
        for ( let i = 0; i < arr.length; i++ ) {
            if ( arr[ i ].email === email && arr[ i ].password === password ) {
                x = "true";


            }
        }
        return x;

    }
    changestatus( email, password ) {
        for ( let i = 0; i < arr.length; i++ ) {
            if ( arr[ i ].email === email && arr[ i ].password === password ) {
                arr[ i ].status = 'true';



            } else {
                arr[ i ].status = 'false';
            }
        }
        localStorage.setItem( "userdata", JSON.stringify( arr ) );
    }


}
function check_user( p ) {
    if ( p.valide_email() == true && p.valide_password() == true && p.valide_user() == true ) {
        p.adduser();
        alert( "signup successfull" );
        window.location.href = "login.html";
    } else {

        if ( p.valide_email() == false ) {
            alert( "Account already exists" );
        } else {
            alert( "Invalide credentials !!!" )
        }
    }
}
export { user, check_user };