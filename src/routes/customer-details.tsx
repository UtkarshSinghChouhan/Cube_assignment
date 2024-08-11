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
      {/* Header */}
      <h1 className="text-3xl font-semibold">
        <span className="text-fs-bg-selected dark:text-fs-darktheme-text">{userData.firstName}</span>{' '} 
        <span className="text-fs-bg-dark dark:text-fs-darktheme-text-header">{userData.lastName}</span>
      </h1>

      <div className="bg-purple-300 line-clamp-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, odit nobis. Eius eaque beatae, et dolores officiis mollitia libero expedita. Nisi quas maxime necessitatibus praesentium.
      </div>

      {/* Image Grid */}
      <div className="mt-20 grid grid-cols-fs-image w-full justify-evenly lg:justify-between gap-x-11 gap-y-12">

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