import { useState } from 'react'

const Navbar = () => {

  return (
    
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="items-start justify-between py-4 border-b md:flex">
                    <div className="max-w-[700px] text-left">
                        <h3 className="text-orange-800 text-2xl font-bold">
                            Shree Ram Charit Maanas Prashnavali
                        </h3>
                        <p className="text-gray-900 mt-2 font-bold">
                        गोस्वामी तुलसीदास जी द्वारा रचित श्री राम चरित मानस प्रश्नावली   पर आधारित  
                        </p>
                        <p className="text-gray-900 mt-2">
                        1. भगवान श्री राम से प्रार्थना करें और अपने प्रश्न पर ध्यान केंद्रित करें।
                        </p>
                        <p className="text-gray-900 mt-2">
                        2. अपने मन में स्पष्ट और स्पष्ट शब्दों में प्रश्न पूछें।
                        </p>
                        <p className="text-gray-900 mt-2">
                        3. रामायण प्रश्नावली आपको आपके क्लिक के अनुसार आपके प्रश्न का उत्तर दिलाएगी।
                        </p>
                        <p className="text-gray-900 mt-2">
                        4. कृपया एक दिन में केवल एक प्रश्न पूछें।
                        </p>
                        <p className="text-gray-900 mt-2">
                        5. केवल एक बार क्लिक करें क्योंकि एक से अधिक बार क्लिक करना भगवान में विश्वास की कमी को दर्शाता है। 
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