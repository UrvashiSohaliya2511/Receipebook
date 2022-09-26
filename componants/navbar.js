

function navbar() {
  return `<div id="navbar">
      <h3><a href="index.html">All Receipes</a></h3>
      <div>
      <div><input type="search" placeholder="Search by name" id="search" />
      <div id="searchRes"></div>
      </div>
      
      
      <h3><a href="allres.html">Receipes</a></h3>
      <h3><a href="signup.html" id="sign_up">Sign Up</a></h3>
      <h3 id="profile"><a href="login.html" id="log_in">Login</a></h3>
      </div>
    </div>`;
}




export { navbar };