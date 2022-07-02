import {useEffect,useState} from 'react'
import axios from 'axios';


function App() {
  const [datos,setdatos] = useState([]);


  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:3000/",{auth: {
        username: 'sebastian',
        password: '123' // Bad password
      }})
      .then(res => setdatos(res.data))
    }, 5000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="App">
      {console.log(datos)}
       {datos.map((value,index)=>{
        return <h3><a target="_blank" href={value.url}><span>{value.tienda}</span></a>- $ {value.precioParse}</h3>
      })} 
    </div>
  );
}

export default App;
