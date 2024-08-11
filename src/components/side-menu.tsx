import { useInfiniteQuery } from '@tanstack/react-query'
import { FetchUtils } from '../utils/fetch-utils'
import Card from './card'
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import Icon from './icon';
import CustomerListSkeleton from './skeletons/customer-list-skeleton';

const SideMenu = () => {

  const {ref, inView} = useInView()

  
  const {data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryFn: FetchUtils.getUserData,
    queryKey : ['users'],
    initialPageParam : 0,
    getNextPageParam : (lastPage, allPage, lastPageParam) =>  {
      if(lastPage.length === 0){
        return null;
      }
      
      return lastPageParam + 1;
    }
  })
  
  const ALL_USERS = useMemo(
    () => data?.pages.flatMap(user => user),
    [data]
  )
 

  // Whenever the Intersection Occurs Fetch new Data
  useEffect(() => {

    if(inView){
      fetchNextPage()
    }

  },[fetchNextPage, inView])


  if(isLoading && !!data){
    return <CustomerListSkeleton />
  }

  return (
    <nav className="scroll-hidden w-[350px] flex flex-col pr-1 gap-1 overflow-y-auto bg-white dark:bg-fs-darktheme-bg-dark">

      {
        ALL_USERS?.map((userData, idx) => (
          <Card key={idx} userData={{...userData, address : `${userData.address.city}, ${userData.address.state}, ${userData.address.country}`}} />
        ))
      }

      {/* Loader */}
      <div ref={ref} className='my-3 min-h-2 text-fs-dark-black dark:text-fs-darktheme-text-header flex justify-center items-center'>
        {isFetchingNextPage && <Icon icon='loader' />}
      </div>

    </nav>
  )
  
  


}

export default SideMenu