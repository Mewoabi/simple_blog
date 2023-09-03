import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const {data:blog,isPending,error} = useFetch("http://localhost:8000/blogs/" + id);
    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/" + id, {method:"DELETE"})
            .then (()=>{
                history.push('/');
            })
            .catch(err => console.log(err))
    }
    return ( 
        <div className="blog-details">
            <h2 style={{"color":"rgb(245, 83, 110)"}}>BlogDetails- {id}</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && 
                <article className="blog-article">
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.body }</p>
                    <button onClick={()=>{handleDelete(blog.id)}}>Delete</button>
                </article>
            }
             
        </div>
     );
}
 
export default BlogDetails;