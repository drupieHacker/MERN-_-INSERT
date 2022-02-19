
import './App.css';
import {useState} from "react";
import Axios from 'axios';
function App() {
    // const {name,setName}=useState();
    // const {age,setAge}=useState(0);

  const [name,setName] = useState('');

  const [age,setAge]= useState('');
  const [apellido,setApellido]= useState('');

    const addFriend = () => {
        alert(name+age+apellido)
;
           Axios.post('http://localhost:3001/addfriend',{
               name:name,age:age,apellido:apellido
           }).then(()=>{
               alert('yey,it worked')
           }).catch(()=>{
               alert('yey, it worked')
           })
    }
return(
    <>
   <div>
   <input type="text" onChange={event=> setName(event.target.value)} />
   <input type="text" onChange={event=> setApellido(event.target.value)} />

   <input type="number" onChange={event=> setAge(event.target.value)} />

  <button onClick={addFriend}>Add friend</button>
   </div>
    </>
)
}

export default App;
