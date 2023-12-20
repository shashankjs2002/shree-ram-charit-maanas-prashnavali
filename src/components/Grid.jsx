
import { useEffect } from "react"
import { gridLetters } from "../assets/constants"

const Grid =() => {
    useEffect(() => {
        console.log(gridLetters.length)
    }, [])
    
    return(
        <div className="flex justify-center">
        <div className="grid max-md:w-full md flex-wrap w-[700px] border-orange-500 border-2" style={{gridTemplateColumns:" repeat(15, minmax(0, 1fr))"}}>

        {gridLetters.map((letter, idx) => {
            return <span onClick={()=>{console.log(idx)}} className= "text-center active:bg-orange-500 hover:bg-orange-200 border-orange-400 border" key={idx}>{letter}</span>
        })}
        </div>
        </div>
    )
}

export default Grid