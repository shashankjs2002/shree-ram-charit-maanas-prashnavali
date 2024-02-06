import { useState } from 'react'

const Navbar = ({open, setOpen}) => {
    


  return (
    

                
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 w-[700px] max-md:w-screen">
                <div className='flex items-center justify-between py-2'>

                
                  <div className=' px-2 py-1 ' >

                        <img
                            src="/banner.png"
                            width={120}
                            height={50}
                            alt="JankiNathDas logo"
                        />
                    </div>
                        {/* <div className=' hover:cursor-pointer hover:bg-[#fab163] text-sm md:text-md  px-2 py-1 font-bold rounded-md border bg-[#fab163cf]' onClick={()=>{setOpen(true)}}> */}
                    <div className=' hover:cursor-pointer hover:bg-[#fab163] text-sm md:text-md px-2 py-1 font-bold rounded-md border bg-[#fab163cf]' onClick={()=>{setOpen(true)}}>

                        <i className="fa-solid fa-clock-rotate-left mx-1"/>
                            History
                    </div>
                </div>

                <div className="items-start justify-between py-4 border-b md:flex">
                    <div className="max-w-[700px] text-left">
                        <h3 className="text-orange-800 text-2xl font-bold">
                        श्री राम शलाका प्रश्नावली 
                        </h3>
                        <p className="text-gray-900 mt-2 font-bold">
                        गोस्वामी तुलसीदास जी द्वारा रचित श्री राम चरित मानस प्रश्नावली   पर आधारित  
                        </p>

                        <div style={{textAlign:"-webkit-center"}}>
                            
                                    <img
                                        src="/logo.png"
                                        width={600}
                                        height={50}
                                        alt="JankiNathDas logo"
                                    />

                            </div>

                        <p className="text-gray-900 mt-2">
                        1. भगवान श्री राम से प्रार्थना करें और अपने प्रश्न पर ध्यान केंद्रित करें।
                        </p>
                        <p className="text-gray-900 mt-2">
                        2. अपने मन में स्पष्ट और स्पष्ट शब्दों में प्रश्न पूछें।
                        </p>
                        <p className="text-gray-900 mt-2">
                        3. श्री राम शलाका प्रश्नावली आपको आपके क्लिक के अनुसार आपके प्रश्न का उत्तर दिलाएगी।
                        </p>
                        <p className="text-gray-900 mt-2">
                        4. श्री राम शलाका प्रश्नावली के बारे में <span className='text-orange-400 cursor-pointer' onClick={()=>{window ? window.location = '/#know-more': console.log("No window")}}>अधिक जाने </span>। 
                        </p>
                        
                    </div>
                    {/* <div className="mt-6 md:mt-0">
                        <a
                            href="/"
                            className="block px-4 py-2 text-center text-white duration-150 font-medium bg-orange-600 rounded-lg hover:bg-orange-500 active:bg-orange-700 md:text-sm"
                        >
                            नियम 
                        </a>
                    </div> */}
                </div>
            </div>
        )
    
}

export default Navbar