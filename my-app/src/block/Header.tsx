import { SiPostman } from "react-icons/si";
import {useState} from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import img from "../assets/passport.jpg"


const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [state, setState] = useState<boolean>(false)
  
  return (
    <div className="w-[1290px] h-[60px]  flex justify-between items-center">
     <div className="w-[40%] h-[100%] bg-[white] flex items-center justify-between ml-5 px-5px font-bold text-[12px]">
     {/* <img src={img}  className="rounded-[30%] w-[50px] h-[30px]"/> */}
     <div className="flex items-center px-5px font-bold text-[12px] text-[grey]">
      <p>Product</p>
     {toggle ? (<div onClick={()=>{
        setToggle(!toggle)
      }}>
      <FaAngleUp className="flex items-center justify-center mt-[3px] ml-[4px] cursor-pointer"/>
      </div>) : (<div onClick={()=>{
        setToggle(!toggle)
      }}>
      <FaAngleDown className="flex items-center justify-center mt-[3px] ml-[4px] cursor-pointer"/>
      </div>)}
      {toggle && (
    <div className="absolute shadow-md w-[550px] h-[250px] bg-[white] top-[10%] rounded-md flex items-center justify-center">
    <div className="w-[95%] h-[95%] bg-[white] flex justify-between ">
        <div>
          <span className="font-[700] text-[14px]">Getting Started</span>
          <p className="mt-[18px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">What is Postman?</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Customer's stories</p>
          <span className="text-blue-500 flex items-center mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">
            Download Postman
            <FaLongArrowAltRight className="mt-[3px] ml-[8px]"/>
          </span>

        </div>
        <div className="ml-18">
          <span className="font-[700] text-[14px]">API Platform</span>
          <p className="mt-[18px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Collaborate in Workspaces</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Organize with Collections</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Explore the API Client</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Build Postman Flows</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Work smarter with Postbot</p>
          

        </div>
        <div className="ml-18">
          <span className="font-[700] text-[14px]">Enterprise Solution</span>
          <p className="mt-[18px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Enterprise Essentials</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">API Test Automation</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Internal API Management</p>
         

        </div>
    </div>
  </div>
)}
     </div>
     <nav className="text-[grey]">Pricing</nav>
     <nav className="text-[grey]">EnterPrice</nav>
     <nav className="flex items-center justify-center text-[grey]">
      Resources and Support
     {state ? (
       <div 
       onClick={()=>{
         setState(!state)
       }}
     >
     <FaAngleUp className="flex items-center justify-center mt-[3px] ml-[4px] cursor-pointer"/>
     </div>
     ) : (
      <div 
      onClick={()=>{
        setState(!state)
      }}
      >
      <FaAngleDown className="flex items-center justify-center mt-[3px] ml-[4px] cursor-pointer"/>
      </div>
     )}
      {state && (
    <div className="absolute shadow-md w-[550px] h-[250px] bg-[white] right-[30%] top-[10%] rounded-md flex items-center justify-center">
    <div className="w-[95%] h-[95%] bg-[white] flex justify-between ">
        <div>
          <span className="font-[700] text-[14px]">Learning</span>
          <p className="mt-[18px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Learning Center Docs</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Postman Academy</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Breaking Changes Show</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Template</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Tutorials</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Webinars</p>
          
        </div>
        <div className="ml-18">
          <span className="font-[700] text-[14px]">Community and Events</span>
          <p className="mt-[18px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Collaborate in Workspaces</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Organize with Collections</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Explore the API Client</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Build Postman Flows</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Work smarter with Postbot</p>
          

        </div>
        <div className="ml-18">
          <span className="font-[700] text-[14px]">Support</span>
          <p className="mt-[18px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Enterprise Essentials</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">API Test Automation</p>
          <p className="mt-[10px] transition-all duration-300 ease-in-out hover:border hover:bg-[#F2F2F2] cursor-pointer px-2 py-1 rounded-sm">Internal API Management</p>
         

        </div>
    </div>
  </div>
)}
      </nav>
     <nav className="text-[grey]">Public API Network</nav>
     </div>
     <div>
      <div className=" w-[190px] h-[30px] bg-[white] flex items-center justify-center font-[600] ">
      {/* <CiSearch className="mr-3 font-[600] text-[grey] text-[16px]"/>
      Search Postman */}
      </div>
     </div>
     <div className="w-[13%] h-[100%] bg-[white] flex items-center justify-between mr-5">
      {/* <button className="border py-[5px] font-bold text-[12px] px-3 rounded-sm">Contact Sales</button> */}

          <Link to="/login">
      <button className="border py-[5px] px-5px font-bold text-[12px] px-3 rounded-sm">Sign In</button>
          </Link>
          <Link to="/register">
      <button className="border py-[5px] px-5px text-[white] bg-[#FF6C37] font-bold text-[12px] px-3 rounded-sm">Sign Up</button>
          </Link>
     </div>
    </div>
  )
}

export default Header;
