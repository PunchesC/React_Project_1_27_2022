import "./Content.css"
import {useState} from 'react';

function Content(){
  const[name,setName]=useState("Dave");
  const [count, setCount] = useState(1);

  const handleNameChange = () => {
    const names: string[] = ["Bob", "Kevin", "Curtis"];
    const int :number = Math.floor(Math.random()*3);
    setName( names[int]);
  }

  const handleClick=()=>{
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
  }
 
  const handleClickTwo=()=>{
    console.log(count)
  }

  return (
    <div className="Content">
     <p onDoubleClick={handleClick}> 
     Hello {name} !
     </p>
     <button onClick={handleNameChange}>Change Name</button>
     <button onClick={handleClick}>Click It</button>
     <button onClick={handleClickTwo}>Click It pop</button>
    </div>
    )
  }
  
  export default Content;