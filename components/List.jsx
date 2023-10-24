"use client"
import useItems from "@/lib/store";
import ListItem from "./ListItem";

export default function List(){
    const cartItems = useItems((state) => state.cartItems)
    const togglePopup = useItems((state) => state.togglePopup)
    const changeToggle = useItems((state) => state.changeToggle)
    return(
        <div className="w-full px-20 my-6">
            <div className="flex w-full justify-between border border-b-0 border-gray-500 px-8 py-4 rounded-t-lg">
                <div className="flex justify-between border border-gray-500 w-1/3 p-2 rounded-full">
                    <input className="px-4 w-5/6 shadow-none ring-0 border-0 outline-none" placeholder="Search"/>
                    <p className="px-3 text-lg">🔍︎</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="border border-green-800 text-green-800 text-center p-2 px-6 rounded-full font-medium cursor-pointer hover:bg-green-800 hover:text-white">Add Item</div>
                    <div className="border border-green-800 text-green-800 text-center p-2 px-6 rounded-full font-medium cursor-pointer hover:bg-green-800 hover:text-white">Print</div>
                </div>
            </div>
            <div className="px-8 border border-t-0 border-x-gray-500 border-b-gray-500 py-2 rounded-b-lg">
                <div className="grid grid-cols-9 border  border-gray-400 rounded-t-md py-2">
                    <div className="text-gray-500 col-span-2  text-center">Product name</div>
                    <div className="text-gray-500">Brand</div>
                    <div className="text-gray-500">Price</div>
                    <div className="text-gray-500">Quantity</div>
                    <div className="text-gray-500">Total</div>
                    <div className="text-gray-500 col-span-3">Status</div>
                </div>
                {cartItems.map((item) =>{
                    return (<ListItem
                        item = {item}
                    />)
                })}
            </div>
        </div>
    )
}