import { useNavigate, useParams } from "react-router-dom"
import { IUser } from "../models/interfaces"
import { cn } from "../utils/utils"


const Card = ({userData} : {userData : IUser}) => {

  const {firstName, lastName, id, address} = userData
  let {userId} = useParams()
  const navigate = useNavigate();



  return (
    <div 
      onClick={() => navigate(`/${id}`)}
      
      className={cn(
        "cursor-pointer hover:bg-fs-bg-selected dark:hover:bg-fs-darktheme-bg-light px-5 pt-2 pb-4 bg-fs-bg-hover dark:bg-fs-darktheme-bg flex flex-col gap-1 items-start ",
        userId === id.toString() && 'border-r-4 bg-fs-bg-selected  dark:bg-fs-darktheme-bg-light border-r-fs-bg-dark dark:border-white'
      )}
    >

      <h1 className="text-[18px] font-semibold dark:text-fs-darktheme-text-header">{firstName} {lastName}</h1>
      <p className="text-[14px] leading-[16px] text-justify dark:text-fs-darktheme-text">{address}</p>
      
    </div>
  )
}

export default Card