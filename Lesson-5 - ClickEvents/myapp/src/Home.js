const Home = () => {

    const handleClick = (e) => {

        console.log('button click', e);
    }

    const handClick2 = (namee) => {

        console.log('hello ' + namee);
    }

    return ( 
            <div className="home">
                <h2> Home </h2>
                <button onClick={handleClick}>Click me</button>

                <button onClick={() => {
                    handClick2('Mitchell');
                }}>Click me 2 </button>

            </div>
     );
}
 
export default Home;