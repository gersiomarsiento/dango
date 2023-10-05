'use client'
import { useState } from "react"

 function Card ({onItemCountChange, defaultTitle, className }) {
    const [textInput, setTextInput] = useState(""); // Title text tracker + updater
    const [fontSize, setFontSize] = useState(20); // Title size tracker + updater
    const [itemCount, setItemCount] = useState(1); // Item count tracker + updater

    const changeInput = (text) => {{
        const newText = text.target.value;
        setTextInput(newText)
    }}
    const changeFontSize = (range) => {{
        const newFontSize = range.target.value;
        setFontSize(newFontSize);
    }}
    const changeItemCount = (count) => {{
        const prevItemCount = itemCount; // Save old value for total Item Count
        const newItemCount = count.target.value || 0; // Default to 0 if NaN 
        setItemCount(newItemCount);
        onItemCountChange(newItemCount, prevItemCount);
    }}

    return (
        <div>
            <div className="grid place-self-center mt-2">
                <label htmlFor="title" className="place-self-center">Change Title:</label>
                <input id="title" name="title" type="text" className="place-self-center border" value={textInput} onChange={(text) => changeInput(text)}/>
                <label htmlFor="font-size" className="place-self-center">Change Text Size:</label>
                <input type="range" id="font-size" name="font-size" min="10" max="30" className="block place-self-center"  value={fontSize} onChange={(range) => changeFontSize(range)}/>
            </div>
            <div className="flex flex-col m-2 p-5 w-64 border-4 border-black rounded-none overflow-hidden bg-white">
                <img className="w-full rounded-xl my-4" src="image.png" alt="Tourmaly"></img>
                <div className="flex flex-col py-4">
                    <div className={`title font-bold my-4`} style={{ fontSize: `${fontSize}px`, textAlign: className==="title-centered"? "center":"left"  }}>{textInput || defaultTitle}</div>
                    <div className="font-bold text-xl my-4">$12.00 <span><input className="border border-gray-400 w-8 text-xs text-gray-500 text-center align-middle mb-1 ml-2 leading-6 " type="number" value={itemCount || 0} onChange={(count) => changeItemCount(count)}/></span></div>
                    <p className="text-sm text-gray-500 mb-4">
                        Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion
                    </p>
                    <div className="self-center flex my-4 w-2/3 flex-col">
                        <button className=" bg-pink  hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border-2 border-gray-500 hover:border-transparent rounded-none">
                            Add to cart
                        </button>
                        
                        <a className="text-center underline font-semibold my-2" href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;