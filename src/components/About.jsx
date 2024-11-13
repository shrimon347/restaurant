import image from "../assets/about.png"
import Package from "./shared/Package"
import TabData from "./shared/TabData"
import pack from "../assets/package.png"
import medal from "../assets/medal.png"
import bag from "../assets/bag.png"
import salad from "../assets/salad.png"

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gird-cols-1 gap-8 place-items-center">
            <div>
                <img src={image} alt="image" />
            </div>
            <TabData />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-8 md:relative">
            <Package title={"FAST DELIVERY"} heading={'Within 30 minutes'} icon={pack} />
            <Package title={"ABSOLUTE DINING"} heading={'Best buffet restaurant'} icon={medal} />
            <Package title={"FAST DELIVERY"} heading={'Within 30 minutes'} icon={bag} />
            <div className="md:absolute md:-right-[310px] md:-top-[250px] hidden md:hidden lg:block">
                <img src={salad} alt="salad" className="" />
            </div>
        </div>
    </div>
  )
}

export default About