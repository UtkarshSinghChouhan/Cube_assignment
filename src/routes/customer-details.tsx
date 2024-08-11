import { useParams } from "react-router-dom"
import { FetchUtils } from "../utils/fetch-utils"
import { useQuery } from "@tanstack/react-query"
import CustomerDetailsSkeleton from "../components/skeletons/customer-detail-skeleton"


const CustomerDetails = () => {
  const {userId} = useParams()
  
  const { data: userData, isLoading } = useQuery({
    queryFn: () => FetchUtils.getSingleUserData(userId as string),
    queryKey: ["single-user-data", userId],
    enabled : !!userId    //only fetch teh data if userId is available or if it changes

  })

  const { data: IMG_DATA, isLoading : imgLoading } = useQuery({
    queryFn: () => FetchUtils.getImagesData(),
    queryKey: ["img-data", userId],
    // refetchInterval: 10000, // Refetch every 10 seconds (10000 milliseconds)
  })

  if(isLoading || imgLoading){
    return <CustomerDetailsSkeleton/>
  }

  console.log("userData======", userData)



  return (
    <>
      {/* Name */}
      <h1 className="text-3xl font-semibold">
        <span className="text-fs-bg-selected dark:text-fs-darktheme-text">{userData.firstName}</span>{' '} 
        <span className="text-fs-bg-dark dark:text-fs-darktheme-text-header">{userData.lastName}</span>
      </h1>

      {/*Title Address */}
      <div className="text-fs-bg-selected dark:text-fs-darktheme-text mt-2 space-y-1">
        <p>{`👷🏻‍♀️ ${userData.company.title}`}</p>
        <p>{`🌎 ${userData.address.address}, ${userData.address.city}, ${userData.address.state}, ${userData.address.country}`}</p>
      </div>

      {/* Photos Title */}
      <div className=" w-full mt-20 flex items-center gap-5">
        <h1 className="text-7xl font-bold text-fs-bg-dark dark:text-fs-darktheme-text-header">{`Photos`}</h1>
        <div className="mt-3 h-[2px] flex-1 bg-fs-bg-selected dark:bg-fs-darktheme-text-header rounded-full"></div>
      </div>

      {/* Image Grid */}
      <div className="mt-10 grid grid-cols-fs-image w-full justify-evenly lg:justify-between gap-x-11 gap-y-12">

        {IMG_DATA?.slice(0,9).map((imgData : any) => {
          return (
            <div className="h-[300px] bg-fs-bg-selected dark:bg-fs-darktheme-bg  rounded-2xl overflow-hidden" key={imgData.id}>
              <img src={imgData.url} alt={imgData.id} className="object-cover w-full h-full" loading="lazy" />
            </div>
          )
        })}

      </div>
    </>

  )
}

export default CustomerDetails