

const SlideCard = ({pic,title,desc}) => {
  return (
    <div className="bg-white flex flex-col items-center p-6">
        <img src={pic} alt="" />
        <div className="h-1 w-1/3  bg-red-500 mb-4 flex items-center">

        </div>
        <div className="text-center space-y-3">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-base">{desc}</p>
        </div>

    </div>
  )
}

export default SlideCard