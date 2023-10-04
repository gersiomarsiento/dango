export default function Card () {
    return (
        <div className="flex flex-col m-2 p-5 w-64 border-4 border-black rounded-none overflow-hidden bg-white">
            <img className="w-full rounded-xl my-4" src="image.png" alt="Tourmaly"></img>
            <div className="flex flex-col py-4">
                <div className="font-bold text-xl my-4">Tourmaline & Eucalyptus Bar Soap</div>
                <div className="font-bold text-xl my-4">$12.00 <span><input className="border border-gray-400 w-8 text-xs text-gray-500 text-center align-middle mb-1 ml-2 leading-6 " type="number" defaultValue={1}/></span></div>
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
    )
}