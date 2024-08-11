import React from 'react'

const CustomerDetailsSkeleton = () => {
  return (
    <>
        {/* Header */}
      <h1 className="text-3xl font-semibold">
        <span className="text-fs-bg-selected dark:text-fs-darktheme-text">Utkarsh</span>{' '} 
        <span className="text-fs-bg-dark dark:text-fs-darktheme-text-header">Chouhan</span>
      </h1>

      <div className="bg-purple-300 line-clamp-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, odit nobis. Eius eaque beatae, et dolores officiis mollitia libero expedita. Nisi quas maxime necessitatibus praesentium.
      </div>

      {/* Image Grid */}
      <div className="animate-pulse mt-20 grid grid-cols-fs-image w-full justify-evenly lg:justify-between gap-x-11 gap-y-12">

        {[...new Array(9)].map((_, idx) => {
          return (
            <div className="h-[300px] bg-fs-bg-selected dark:bg-fs-darktheme-bg  rounded-2xl" key={idx}></div>
          )
        })}

      </div>
    </>
  )
}

export default CustomerDetailsSkeleton