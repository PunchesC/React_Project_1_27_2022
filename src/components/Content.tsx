 
function Content(){
  const handleNameChange = () => {
    const names: string[] = ["Bob", "Kevin", "Curtis"];
    const int :number = Math.floor(Math.random()*3);
    return names[int];
  }
 
  return (
    <div>
     <p> Hello {handleNameChange()} !</p>
    </div>
    )
  }
  
  export default Content;