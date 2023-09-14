import CartWidget from "./CartWidget"


const NavBar = () =>{
    return (
        <nav className="hero is-primary">
            <div className="columns hero-body ">
                <h3 className="column is-5 title">Ecommerce</h3>
                <div className="column is-1"><button>Whiskey</button></div>
                <div className="column is-1"><button>Vodka</button></div>
                <div className="column is-1 "><button>Ron</button></div>
            
            <CartWidget/> 0
                
            </div>

 
        </nav>
    )
}


export default NavBar;