import Head from "../components/containers/Head";
import Navbar from '../components/containers/Navbar'
import Leaves from "../components/graphics systems/Leaves";

export default function LandingPage(){
    return (
        <div id="home" className="flex justify-center items-center flex-col w-screen h-screen relative">
            <Head/>
            <Navbar/>
            <Leaves/>
            <div className="w-screen h-10 top-0 left-1/2 absolute rounded-full bg-gradient-to-l from-emerald-400 to-blue-600 -z-50 translate-x-[-50%] translate-y-[-50%] blur-3xl"></div>
        </div>
    )
}