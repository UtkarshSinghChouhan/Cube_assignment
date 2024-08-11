import { useInfiniteQuery } from '@tanstack/react-query'
import { FetchUtils } from '../utils/fetch-utils'
import Card from './card'
import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Icon from './icon';
import CustomerListSkeleton from './skeletons/customer-list-skeleton';
import { cn } from '../utils/utils';
import { useParams } from 'react-router-dom';

const SideMenu = () => {
  let {userId} = useParams()
  const[menuCollapsed, setMenuCollapsed] = useState<boolean>(false)
  const [intentionalLoader, setIntentionalLoader] = useState<boolean>(true)
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

  useEffect(() => {
    // SideMenu collapsed Logic
    if(window.innerWidth >= 1280){
      setMenuCollapsed(true)
    }


    // Intentional Loader For UX purposes
    setTimeout(() => {
      setIntentionalLoader(false)
    }, 1000)
  },[])

  useEffect(() => {
    if(window.innerWidth < 1280){
      setMenuCollapsed(false)
    }
  },[userId])


  if(isLoading || intentionalLoader){
    return <CustomerListSkeleton />
  }

  return (

    <>
      <nav className={cn("absolute transition-[width] top-0 bottom-0 scroll-hidden w-5 flex flex-col pr-1 gap-1 overflow-y-auto bg-white dark:bg-fs-darktheme-bg-dark", menuCollapsed && "w-[350px]")}>

        {/* Menu Toggle */}
        <button onClick={() => setMenuCollapsed(pre => !pre)} className='mt-1 z-50 sticky left-0 right-0 top-1 p-2 flex items-center justify-center rounded-full bg-fs-bg-selected dark:bg-fs-darktheme-bg border border-fs-bg-dark dark:border-fs-darktheme-border'>

          <span className={cn('transition-transform', menuCollapsed && 'rotate-180')}>
            <Icon icon='collapse-toggle' />
          </span>

        </button>

        
        

        {
          menuCollapsed &&

          <>
            {ALL_USERS?.map((userData, idx) => (
              <Card key={idx} userData={{...userData, title : `${userData.company.title}`}} />
            ))}
            {/* Loader */}
            <div ref={ref} className='my-3 min-h-2 text-fs-dark-black dark:text-fs-darktheme-text-header flex justify-center items-center'>
              {isFetchingNextPage && <Icon icon='loader' />}
            </div>
          </>
        }


      </nav>
      <div className={cn(' transition-[width] w-5 shrink-0', menuCollapsed && 'sm:w-[350px]')} />
    </>
  )
  
  


}

export default SideMenu