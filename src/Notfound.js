import {Link} from "react-router-dom"
const Notfound = () => {
    return ( 
        <div>
            <h2>sorry</h2>
            <p>page not found</p>
            <Link to='/'>back to Homepage</Link>
        </div>
     );
}
 
export default Notfound;