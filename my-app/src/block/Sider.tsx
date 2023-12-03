import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { changeToggle, logOut } from '../Global/reduxState';


const Sider = () => {
    const dispatch = useDispatch();
    const readToggle = useSelector((state: any) =>{
        return state.toggle;
    });
  return (
    <div className=' border-r h-[100vh] transition-all duration-300 fixed z-40 bg-[grey]' 
    style={{
        width: `${readToggle ? "200px" : "70px"}`
    }}
    >
       <div className='m-3'>
      {readToggle ? (
         <div className='cursor-pointer'
         onClick={() => {
            dispatch(changeToggle(false))
         }}
         >
         <FaEnvelopeOpenText size ={35}/> 
      </div>

      
      ) : (
        <div className='cursor-pointer'
        onClick={() => {
            dispatch(changeToggle(true))
        }}
        >
      <AiOutlineClose size ={35}/>
      </div>
      )}
       </div>
       <div className="mb-4 border-y transition-all duration-300 py-3 hover: bg-[#FF6C37] hover: text-white cursor-pointer" 
       onClick={() =>{
        dispatch(logOut());
       }}
       >
        LogOut
       </div>
    </div>
  )
}

export default Sider;