import {useEffect,useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [datos,setdatos] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:8000/",{auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD
      }})
      .then(res => setdatos(res.data))
  },[]);

  const ReloadPrice = ()=> {
    console.log("entra");
    axios.get("http://localhost:8000/reloadPrice",{auth: {
      username: process.env.REACT_APP_USER,
      password: process.env.REACT_APP_PASSWORD
    }})
    .then(res => setdatos(res.data))
  }

  return (
    <div className="App">
       {datos.map((value,index)=>{
        return <h3><a target="_blank" href={value.url}><span>{value.tienda}</span></a>- $ {value.precioParse} <strong>{value.precioParse < 600000 ? " - En Oferta" : ""}</strong></h3>
      })} 
      <button onClick={ReloadPrice} class="btn btn-success">Actualizar Precios !!!!!</button>
    </div>
  );
}

export default App;
