import { Link } from 'react-router-dom';

const BlogList = ({blogs,title}) => {
    return ( 
        <div className="blog-content">
        <h2>{title}</h2>
        <div className="home-blog"> {blogs.map((blog)=>(
            <div key={blog.id} className='blog-div'>
             <Link className="link-div" to={"/blogs/" + blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
            </Link>
            </div>
        ))}</div>
    </div>
     );
}
 
export default BlogList;