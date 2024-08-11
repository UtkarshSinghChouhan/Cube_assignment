import React from "react";

const CustomerDetailsSkeleton = () => {
  return (
    <>
      {/* Header */}
      <div className="animate-pulse mt-2 flex flex-col gap-2 w-full">
        <div className="h-2 w-[20%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
        <div className="h-2 w-[30%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
      </div>

      {/*Title Address */}
      <div className="animate-pulse mt-5 flex flex-col gap-2 w-full">
        <div className="h-2 w-[10%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
        <div className="h-2 w-[20%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
      </div>

      {/* Photos Title */}
      <div className="animate-pulse mt-20 flex flex-col gap-2 w-full">
        <div className="h-2 w-[20%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
        <div className="h-2 w-[35%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
      </div>

      {/* Image Grid */}
      <div className="animate-pulse mt-10 grid grid-cols-fs-image w-full justify-evenly lg:justify-between gap-x-11 gap-y-12">
        {[...new Array(9)].map((_, idx) => {
          return (
            <div
              className="h-[300px] bg-fs-bg-selected dark:bg-fs-darktheme-bg  rounded-2xl"
              key={idx}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default CustomerDetailsSkeleton;
