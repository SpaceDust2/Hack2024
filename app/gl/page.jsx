"use client"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Image from "next/image"
import SearchComp from "../components/SearchComp"
const Page = ({}) => {
  return (

    <div className="flex flex-col min-h-screen">
        <Header/>
        {/* Content container  */}
                <div className="relative top-[450px]"> <SearchComp className=""/></div>
                <div className="bg-white relative rounded-3xl w-screen h-10 z-30 top-[570px]"></div>
                <div className="relative top-[700px] pl-10">
                    <div className="justify-start">
                        <h1 className="text-black">Места и события</h1>
                    </div>
                    {/* Карточки  */}
                    <div className="flex ">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>
        <div className="flex-grow justify-center items-center" >
                <div className="">
                <Image src="/main.png" width={1550} height={1000} className="z-10"/>
               </div>
        </div>
        
        <Footer className="mt-auto"/>
    </div>




  )
}

export default Page