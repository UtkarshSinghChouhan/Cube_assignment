const CustomerListSkeleton = () => {
  return (
    <nav className="animate-pulse scroll-hidden w-[350px] flex flex-col pr-1 gap-1 overflow-y-auto bg-white dark:bg-fs-darktheme-bg-dark">
      {[...new Array(10)].map((_, idx) => (
        <div
            key={idx}
            className="h-20 animate-pulse cursor-pointer  px-5 py-4 bg-fs-bg-selected dark:bg-fs-darktheme-bg  flex flex-col justify-center gap-1 items-start"
                
        >
            {/* Title */}
          <div className="flex flex-col gap-2 w-full">
            <div className="h-2 w-[40%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
            <div className="h-2 w-[50%] rounded-full bg-fs-bg-dark dark:bg-fs-darktheme-bg-light opacity-60"></div>
          </div>

        </div>
      ))}
    </nav>
  );
};

export default CustomerListSkeleton;
