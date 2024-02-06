import React, { useEffect, useState } from 'react'


const HistoryCard = ({ thisChaupai , history, setHistory}) => {

    const [isTitleEditable, setIsTitleEditable] = useState(false)
    const [title, setTitle] = useState(thisChaupai.title)

    const changeTitle = (e) => {
        setTitle(e.currentTarget.innerText)
        // console.log(e.currentTarget.innerText)
    }


    // useEffect(() => {
    
    // }, [history])
    

    const handleDelete = (thisChaupai) => {
        // let history = JSON.parse(localStorage.getItem("history"))

        
        let newArray = history.filter((item, index) => item._id !== thisChaupai._id)
            
            

            
        localStorage.setItem("history", JSON.stringify(newArray))
        setHistory(newArray)
        
    }


    const toggleTitleEdit = (thisChaupai) => {
        if (isTitleEditable) {
            // let history = JSON.parse(localStorage.getItem("history"))

            // let newH  = history.find({_id: thisChaupai._id})

            for (var i = 0; i < history.length; i++) {
                if (history[i]._id === thisChaupai._id) {
                    history[i].title = title;
                    break; // Stop the loop once the object is found and updated
                }
            }

            // console.log(history)

            localStorage.setItem("history", JSON.stringify(history))
            setHistory(history)

        }
        setIsTitleEditable(!isTitleEditable)
    }

    return (
        <div className="text-justify rounded-md px-4 py-2 bg-[#f3c994] my-3">
            <div className='flex justify-between mb-2'>


                <span className='text-md md:text-md flex gap-1 '>
                    <span className='break-all' suppressContentEditableWarning={true} contentEditable={isTitleEditable} onInput={(e) => changeTitle(e)}>
                        {title}

                    </span>
                    {
                        isTitleEditable ?
                            <i className="fa-solid fa-check" onClick={() => toggleTitleEdit(thisChaupai)} />
                            :
                            <i className="fa-solid fa-pen text-sm align-text-top" onClick={() => toggleTitleEdit(thisChaupai)} />

                    }

                </span>
                <span >

                    <i className="fa-solid fa-trash ml-3" onClick={() => handleDelete(thisChaupai)} />

                </span>
            </div>

            <table className='table-auto'>
                <tbody>
                    <tr className='border-t border-orange-500'>
                        <td className="text-sm md:text-md text-orange-500 font-bold py-2">चौपाई: </td>
                        <td className="text-sm md:text-md py-2">{thisChaupai.chaupai}</td>
                    </tr>


                    <tr className='border-t border-orange-500'>
                        <td className="text-sm md:text-md text-orange-500 font-bold py-2">अर्थ: </td>
                        <td className="text-sm md:text-md py-2">{thisChaupai.context}</td>
                    </tr>
                    <tr className='border-t border-b border-orange-500'>
                        <td className="text-sm md:text-md text-orange-500 font-bold py-2">फल: </td>
                        <td className="text-sm md:text-md py-2">{thisChaupai.fal}</td>
                    </tr>

                </tbody>



            </table>
            <span className='flex justify-end'>
                <span>
                    <i className="fa-solid fa-calendar mx-2" />
                    {thisChaupai.date}
                </span>
            </span>


        </div>
    )
}

export default HistoryCard