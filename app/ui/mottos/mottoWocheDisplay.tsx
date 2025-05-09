'use client'
import Image from "next/image"
import { toCapitalized } from "@/app/lib/miniFuncs"

type Motto = {type: string, title: string, addition: string, date: string}

export default function MottoWocheDisplay({mottos, mottoImages}: {mottos: Motto[], mottoImages: string[]}) {
  return(
    <div className="flex flex-col gap-5 p-5 bg-white max-w-[1455px]">
        <h1 className="text-4xl font-semibold text-abi-black font-serif text-left ">Mottowoche</h1>
        <div className="carousel carousel-center gap-4 w-full flex min-h-40 scrollbar-thin">
          {
            mottos.map((motto, index) => (
              <MottoCard key={`${motto}-${index}`} day={toCapitalized(motto.type)} motto={motto.title} date={motto.date} additions={motto.addition} image={mottoImages[index]}/>
            ))
          }
        </div>
    </div>
    
  )
}

export function MottoCard({day, motto, date, additions, image}: {day: string, motto: string, date: string, additions: string, image: string}) {
  return(
    <div className="relative carousel-item w-[234px] h-[334px] bg-white rounded-box flex flex-col items-center p-4 overflow-hidden border-black border-2">
        <h1 className="text-2xl font-mono text-abi-black flex justify-center">{day}</h1>
        <div className="border-2 border-gray-300 rounded-md w-[200px] h-[150px] mt-4 flex items-center">
          <Image src={image} alt="image" width={200} height={150} className="w-full h-full object-cover rounded-md"></Image>
        </div>
        <h2 className="text-3xl font-bold text-abi-black flex justify-center text-center mt-4 text-wrap break-all">{motto}</h2>
        { additions === "" ? <></> : 
        <div className="relative">
          <span className="text-4xl font-bold text-red-500 absolute rotate-[0.6rad]"
          style={{ textShadow: '0 0 5px rgba(255, 0, 0, 0.4), 0 0 10px rgba(255, 0, 0, 0.2), 0 0 15px rgba(255, 0, 0, 0.1)' }}>&</span>
          <h2 className="text-red-600 font-bold text-xl ml-10 text-wrap"
          style={{ textShadow: '0 0 5px rgba(255, 0, 0, 0.4), 0 0 10px rgba(255, 0, 0, 0.2), 0 0 15px rgba(255, 0, 0, 0.1)' }}>{additions}</h2>
        </div>
        }
        <span className="absolute right-4 bottom-3 text-gray-500 text-sm">{date}</span>
    </div>
  )
}