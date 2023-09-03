import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Clone Blog</h2>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;