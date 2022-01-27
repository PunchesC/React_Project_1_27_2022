
function Footer(){
const today: any = new Date();
  return (
    <div>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </div>
  )
  }
  
  export default Footer;