import { Link } from "react-router-dom";
import tower from "../assets/image/Tower.png"
function Logo (){
  return(
    <div className="flex justify-between items-center mx-20 pt-3">
    <Link to="/">
    <p className="">ASK EDINBURGH</p>
    </Link>
    <Link to="/history">
    <img src={tower} alt={tower} className="w-8 h-8"/>
    </Link>
    </div>
  
)
}

export default Logo;