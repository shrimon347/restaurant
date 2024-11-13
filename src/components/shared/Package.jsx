

const Package = ({title, heading, icon}) => {
  return (
    <div className="flex items-center pt-10 gap-6">
        <div className="rounded-[50%] p-4 shadow-md ">
            <img src={icon} alt="package" className="w-[40px] h-[40px]" />
        </div>
        <div>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-base ">{heading}</p>
        </div>
    </div>
  )
}

export default Package