import logo from './logo.svg';
import './App.css';

function App() {

  const title = "- Mitchell Main Page -";
  const rank = 14;
  const valArray = [1,2,3,4,5];
  const rand = Math.random();
  const link = "http://www.google.com";

  return (
    <div className="App">
     <div className="content">
       <h1> {title} </h1>
       <h2> Rank {rank} :) </h2>
       <h2> {valArray} </h2>
       <h2> {rand} </h2>
       <a href={link}>Go to Google !</a>
     </div>
    </div>
  );
}

export default App;
