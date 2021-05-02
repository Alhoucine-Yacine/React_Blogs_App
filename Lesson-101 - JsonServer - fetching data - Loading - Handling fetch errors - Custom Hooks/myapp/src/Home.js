
import Bloglist from './Bloglist';
import useFetch from './usefetch';

const Home = () => {
   
    const {data,isPending,error} = useFetch('http://localhost:8000/blogs');

    /*
    const handleDelete = (id) => {
        const newBlogs = list.filter((blog)=> 
            blog.id !== id
        )
        setList(newBlogs);
    }
    */
   

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading ...</div>}
          {data && <Bloglist blogs = {data} title="All blogs" /> }
          </div>
     );
}
 
export default Home;