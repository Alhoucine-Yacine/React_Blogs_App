import {useState} from 'react';
import Bloglist from './Bloglist';

const Home = () => {

    const [list, setList] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);


    return ( 
          <Bloglist blogs = {list} title="All blogs"/>
     );
}
 
export default Home;