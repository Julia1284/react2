import './App.css';
import Card from './components/Card';
import data from "./components/data/marvels.json"

function App() {
  return (
    <div className="App">
      {data.map ((data )=>
      <Card key ={data.name} name = {data.name} image = {data.image} alter = {data.alter} universe = {data.universe}  activity = {data.activity}  friends = {data.friends }  superpowers = {data.superpowers}></Card>)}

    </div> 
  );
}

export default App;
