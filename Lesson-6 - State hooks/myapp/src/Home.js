import {useState} from 'react';

const Home = () => {

    const [name, setName] = useState('Mitchell');

    const handleClick = (e) => {
            setName('Rain');
            setAge(23);
    }

    const [age, setAge] = useState(25);


    return ( 
            <div className="home">
                <h2> Home </h2>
                <p> {name} is {age} years old </p>
                <button onClick={handleClick}>Click me</button>

            </div>
     );
}
 
export default Home;