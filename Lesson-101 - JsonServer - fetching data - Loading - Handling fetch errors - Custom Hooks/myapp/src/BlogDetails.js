import { useParams } from "react-router";
import useFetch from './usefetch';

const BlogDetails = () => {

    const {id}= useParams();
    const {data : blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            <h2> Blog details - { id }</h2>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p>Written by : {blog.author}</p>
                    <p> {blog.body} </p>
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;