import {useState, useEffect} from 'react';
import Bloglist from './Bloglist';

const Home = () => {

   

    const [list, setList] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = list.filter((blog)=> 
            blog.id !== id
        )
        setList(newBlogs);
    }

    useEffect(()=>{
        console.log("use effect ran ...\n" + name);
    }, [name]);

    return ( 
        <div className="home">
          <Bloglist blogs = {list} title="All blogs" handleDelete={handleDelete}/>
        <br></br>
          <Bloglist blogs = {list.filter((blog)=> blog.author === 'mario')} title="mario blogs" handleDelete={handleDelete}/>
        <br></br>
           <button onClick={(()=>{
                setName('luigi')
           })}>Switch to luigi !</button>
          </div>
     );
}
 
export default Home;