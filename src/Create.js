 import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("Doray");
    const [body,setBody] = useState("");
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body , author};
        fetch("http://localhost:8000/blogs", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then (data => {
            console.log("new blog added");
            history.push('/');
        }).catch(err => console.log(err))
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input
                 type="text" 
                 required 
                 value={title}
                 onChange={e=>setTitle(e.target.value)}
                 />

               <label>Blog body:</label>
                <textarea
                 type="text" 
                 required 
                 value={body}
                 onChange={e=>setBody(e.target.value)}
                 />
                
                <label>Blog author:</label>
                 <select 
                 required
                 value={author}
                 onChange={e=>setAuthor(e.target.value)}>
                    <option value="Doray">Doray</option>
                    <option value="Doremi">Doremi</option>
                    <option value="Emmy">Emmy</option>
                 </select>

                 <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;