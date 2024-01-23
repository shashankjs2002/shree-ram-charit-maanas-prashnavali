import React, { useEffect, useState } from 'react'
import HistoryCard from './HistoryCard'



const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const [pastChaupayian, setPastChaupayian] = useState(null)
    
  
  
  let history = JSON.parse(localStorage.getItem("history"))
  useEffect(() => {
    if(localStorage.getItem("history")){
      setPastChaupayian(JSON.parse(localStorage.getItem("history")))
      // console.log(JSON.parse(localStorage.getItem("history")))
    }

  }, [open, history])

  return (
    <div>
      <div className='absolute hover:cursor-pointer hover:bg-[#fab163] text-sm md:text-md top-4 right-3 px-2 py-1 font-bold rounded-md border bg-[#fab163cf]' onClick={()=>{setOpen(true)}}>
      <i class="fa-solid fa-clock-rotate-left mx-1"/>
        History
      </div>



      <div className={`inset-0 overflow-hidden transition ease duration-1000 fixed ${open ? "" : "translate-x-full"} `}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={` inset-y-0 absolute right-0 flex max-w-full pl-10`} >


            <div className="absolute left-12 top-0  flex pr-2 pt-4  sm:pr-4">
              <button
                type="button"
                className="w-6 relative rounded-md text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setOpen(false)}
              >
                <span className="absolute -inset-2.5" />
                {/* <span className="sr-only">Close panel</span> */}
                <span className="h-6 w-6" >X</span>
              </button>
            </div>


            <div className="flex h-full  flex-col overflow-y-scroll bg-white py-6 shadow-xl">
              <div className="px-4 sm:px-6">
                <h2 className="text-base font-semibold leading-6 text-gray-900">
                  पूर्व फल
                </h2>
              </div>
              <hr />
              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                
              {pastChaupayian &&   pastChaupayian.map((thisChaupai, idx) =>{

                return <HistoryCard key={idx} thisChaupai ={thisChaupai} history={history}/>
                }
              )
              
            }
            {!pastChaupayian && <div>No history</div>}


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar