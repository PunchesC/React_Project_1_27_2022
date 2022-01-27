import "./Footer.css"

function Footer(){
const today: any = new Date();
  return (
    <div className="Footer">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </div>
  )
  }
  
  export default Footer;