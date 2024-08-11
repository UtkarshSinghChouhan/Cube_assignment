import noData from "../assets/no-data.svg"

const NoData = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center">

        <img src={noData} alt="noData" width={500} />
        
        <h1 className="text-3xl font-semibold">
            <span className="text-fs-bg-selected dark:text-fs-darktheme-text">{`Customer`}</span>{' '} 
            <span className="text-fs-bg-dark dark:text-fs-darktheme-text-header">{`Not Selected`}</span>
        </h1>
    </div>
  )
}

export default NoData