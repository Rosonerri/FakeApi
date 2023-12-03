import React from 'react'
import userHook from '../Hook/userHook'
import img from "../assets/Judiciary.jpg"
import { useDispatch } from 'react-redux'
import data from "../Api/data.json"
import { Link } from 'react-router-dom'
// <div className='w-[100%] h-[90vh] bg-neutral-400 text-[25px] font-bold'>Welcome{data?.userName}</div>

const homeScreen = () => {
  // const {data}: any = userHook();
  const dispatch = useDispatch()
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-2">


    {data.map((props: any) => (
      <div className='w-[400px] min-h-[300px] rounded-md flex flex-col border over'>

     <Link to={`/detail/${props.id}`}>
     <img src={props.image} alt="passport" className='object-cover w-full h-[300px] shadow-md'/>
     </Link>

      <div className='mt-8 px-3'>
      <div className='flex justify-between items-center mb-4'>
      <div className='font-[500] text-[18px]'>Mens Casual Premium</div>
      <div>
        <div className="flex items-center relative w-[120px]">
          <div className="absolute">{"🌑".repeat(5)}</div>
          <div className="absolute">{"☀️".repeat(Math.round(props.rating.rate))}</div>
        </div>
      </div>
      </div>
      </div>
      <div className='p-[13px]'>{props.description}</div>
      <div className='flex justify-between p-[15px] items-center '>
        <div className='font-[700] text-[20px] text-[grey]'>${props.price}</div>
        <div className='bg-[#FF6C37] text-[white] rounded-sm cursor-pointer font-[700] py-[5px] px-[5px]'
        onClick={() =>{
          // dispatch()
        }}
        >Add to Cart</div>
      </div>
    </div>
    ))}

   
     </div>
  )
}

export default homeScreen;