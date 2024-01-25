import { Link } from "react-router-dom";
import tower from "../assets/image/Tower.png"
function Logo (){
  return(
    <>
    <Link to="/">
    <p className="pt-5 pl-20">ASK EDINBURGH</p>
    </Link>
    <Link to="/history">
    <img src={tower} alt={tower} className="w-8 h-8"/>
    </Link>
    </>
  
)
}

export default Logo;