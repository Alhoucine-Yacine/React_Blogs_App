//const Bloglist = (props) => {
    //const list = props.blogs;
    //const title =props.title;
const Bloglist = ({blogs,title}) => {

    return (   <div className="blog-list">
            <h1>{title}</h1>
    {   
            blogs.map((blog)=> (
                    <div className="blog-preview" key={blog.id}> 
                        <h2> {blog.title}</h2>
                        <p>{blog.body} </p>
                        <p>Written by : {blog.author} </p>
                    </div>

             ))
    }
</div> );
}
 
export default Bloglist ;