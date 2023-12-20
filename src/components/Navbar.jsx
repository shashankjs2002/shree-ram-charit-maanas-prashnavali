import { useState } from 'react'

const Navbar = () => {

  return (
    
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="items-start justify-between py-4 border-b md:flex">
                    <div className="max-w-lg">
                        <h3 className="text-orange-800 text-2xl font-bold">
                            Shree Ram Charit Maanas Prashnavali
                        </h3>
                        <p className="text-gray-600 mt-2">
                        गोस्वामी तुलसीदास जी द्वारा रचित श्री राम चरित मानस प्रश्नावली   पर आधारित  
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <a
                            href="/"
                            className="block px-4 py-2 text-center text-white duration-150 font-medium bg-orange-600 rounded-lg hover:bg-orange-500 active:bg-orange-700 md:text-sm"
                        >
                            नियम 
                        </a>
                    </div>
                </div>
            </div>
        )
    
}

export default Navbar