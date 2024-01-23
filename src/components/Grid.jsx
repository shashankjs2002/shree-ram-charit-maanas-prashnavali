
import { useEffect, useState } from "react"
import { gridLetters, chaupayian } from "../assets/constants"

const Grid = ({ handleNotificationClick }) => {
    const [chaupai, setchaupai] = useState(null)
    useEffect(() => {
        // console.log(gridLetters.length)
    }, [])



    const handleLetterClick = (idx) => {
        // console.log(idx);
        // let chaupayi = chaupayian[idx%9]
        // console.log(chaupayi)
        setchaupai(chaupayian[idx % 9])
        

        if (window) window.location = '#answer'
        let currenttime = new Date()
        let currentdate = currenttime.toDateString()
        let _id = Date.now()
        if (localStorage.getItem("history")) {
            let myhistory = JSON.parse(localStorage.getItem("history"))
            // console.log(myhistory)
            localStorage.setItem("history", JSON.stringify([...myhistory, { ...chaupayian[idx % 9], _id: _id, time: currenttime, date: currentdate, title: `फल_${_id}` }]))
            // console.log(("history", JSON.stringify(...myhistory,{...chaupayian[idx%9], _id : _id , time: currenttime, date: currentdate, title: `फल_${_id}`})))
        }
        else {
            let entry = { ...chaupayian[idx % 9], _id: _id, time: currenttime, date: currentdate, title: `फल_${_id}` }
            // localStorage.setItem("history", (JSON.stringify([entry])))
            localStorage.setItem("history", JSON.stringify([entry]))
            // console.log({...chaupayian[idx%9], _id : _id , time: currenttime, date: currentdate, title: `फल_${_id}`})
        }


        handleNotificationClick("Aapka karya Fal", chaupayian[idx % 9].fal)


    }
    return (
        <>
            <div className="flex justify-center mt-5">
                <div className="grid max-md:w-full text-xs md:text-base md flex-wrap w-[700px] border-orange-500 border-2 " style={{ gridTemplateColumns: " repeat(15, minmax(0, 1fr))" }}>

                    {gridLetters.map((letter, idx) => {
                        return <span onClick={() => handleLetterClick(idx)} className="text-center active:bg-orange-500 hover:bg-orange-200 border-orange-400 border" key={idx}>{letter}</span>
                    })}
                </div>




            </div>

            {chaupai && <div id="answer" className="flex justify-center flex-col w-[700px] max-md:w-screen text-left">

                <div>
                    <span className="text-lg text-orange-500 font-bold">चौपाई: </span>
                    <span>{chaupai.chaupai}</span>
                </div>
                <div>
                    <span className="text-lg text-orange-500 font-bold">अर्थ: </span>
                    <span>{chaupai.context}</span>
                </div>
                <div>
                    <span className="text-lg text-orange-500 font-bold">फल: </span>
                    <span>{chaupai.fal}</span>
                </div>
            </div>}

            <div className="mx-2 my-2 text-base text-left max-w-[600px] md:my-5">
                <p >
                    श्री राम शलाका प्रश्नावली एक ऐसा अद्भुत और अनोखा माध्यम है, जिसके द्वारा आप अपने जीवन के किसी भी प्रश्न का उत्तर तुरंत प्राप्त कर सकते हैं। यह प्रश्नावली भारत के महान संत गोस्वामी तुलसीदास जी की रचना श्री रामचरितमानस पर आधारित है, जिसमें भगवान श्री राम के जीवन और उनके दिव्य गुणों का वर्णन किया गया है।
                </p>
                <p className="my-3 md:my-5">

                    श्री राम शलाका प्रश्नावली में एक 15×15 का ग्रिड होता है, जिसमें श्री रामचरितमानस के बालकाण्ड और सुन्दरकाण्ड की 9 चौपाइयों के अक्षर लिखे होते हैं। इन अक्षरों के प्रयोग से हम रामायण की चौपाइयां बनाते हैं, जो हमारे प्रश्न का उत्तर देती हैं।
                </p>
                <p>
                    श्री राम शलाका प्रश्नावली का उपयोग करने का तरीका बहुत ही सरल और सुगम है। आपको बस अपने मन में अपना प्रश्न रखना है और फिर ग्रिड में किसी भी जगह पर अपनी उंगली रखना है। आपके द्वारा रखे गए अक्षर से प्रत्येक 9वें नंबर के अक्षर को जोड़ कर एक चौपाई बनेगी, जो कि आपके प्रश्न का उत्तर होगी। आप इस चौपाई का अर्थ भी जान सकते हैं।
                </p>
                <p  className="my-3 md:my-5">
                    श्री राम शलाका प्रश्नावली के लाभ अनेक हैं। इसके द्वारा आप अपने जीवन के किसी भी क्षेत्र में अपनी समस्याओं का समाधान पाने के साथ-साथ भगवान श्री राम का आशीर्वाद भी प्राप्त कर सकते हैं। इस प्रश्नावली का प्रयोग करने से आपका मन शांत और प्रसन्न होगा और आपको अपने लक्ष्य की ओर बढ़ने में सहायता मिलेगी।
                </p>
                <p>
                    श्री राम शलाका प्रश्नावली एक ऐसा उपकरण है, जो आपको अपने जीवन के रहस्यों को सुलझाने में मदद करता है। यह आपको अपने आत्मविश्वास और आस्था को बढ़ाने में भी सहायक है। इसलिए, अगर आप भी अपने जीवन में कुछ बदलाव लाना चाहते हैं या अपने किसी प्रश्न का उत्तर जानना चाहते हैं, तो श्री राम शलाका प्रश्नावली का उपयोग करें और अपने जीवन को खुशहाल और सफल बनाएं।
                </p>
                <p  className="my-3 md:my-5">
                    आशा है कि आपको यह ब्लॉग पोस्ट पसंद आया होगा। अगर आप श्री राम शलाका प्रश्नावली का उपयोग करना चाहते हैं, तो आप इस लिंक पर क्लिक करके ऑनलाइन राम शलाका प्रश्नावली का लाभ उठा सकते हैं। आप अपने प्रश्न और उत्तर को अपने दोस्तों और परिवार के साथ भी शेयर कर सकते हैं।
                </p>
            </div>

        </>

    )
}

export default Grid