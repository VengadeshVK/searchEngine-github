import React from "react";

const Navbar = ()=>{
    return(
    <div>
        <nav className="ui raisedvery padded segment">
            <a className="ui teal inverted segment">Image SearchEngine</a>
            <div className="ui right floated header">
                <button className="ui button" ><a href="/home">Home</a> </button>
                <button className="ui button" ><a href="/contact">Contact us</a> </button>
                <button className="ui button" ><a href="/about">About</a> </button>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;