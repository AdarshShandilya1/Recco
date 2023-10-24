"use client"
import List from "@/components/List"
import Navbar from "@/components/Navbar"

import Popup from "@/components/Popup"

import useItems from "@/lib/store"
import data from "@/data/data.json"

export default function Home() {
  const cartItems = useItems((state) => state.cartItems)
  const togglePopup = useItems((state) => state.togglePopup)
  const addItems = useItems((state) => state.addItems)
  if (cartItems.length < data.length) {
    data.map((item) => {
      addItems(item)
    })
  }

  console.log(cartItems)
  return (
    <>
      {togglePopup ? <Popup /> : ""}
      <div className="bg-[#FBFBFB] h-screen overflow-scroll">
        <Navbar />
        <div className="w-full px-20 mt-6 ">
          <div className="grid grid-cols-6 w-full h-fit border border-gray-400 rounded-lg bg-white">
            <div className="px-6 flex flex-col gap-2 py-4 border-r-2 my-2">
              <div className=" text-gray-500">Supplier</div>
              <div className=" font-semibold text-lg">
                East Coast fruit & vegetables
              </div>
            </div>

            <div className="px-6 flex flex-col gap-2 py-4  border-r-2 my-2">
              <div className=" text-gray-500">Shipping Date</div>
              <div className="font-semibold text-lg">Thu, Feb 10</div>
            </div>
            <div className="px-6 flex flex-col gap-2 py-4 border-r-2 my-2">
              <div className=" text-gray-500">Total</div>
              <div className="font-semibold text-lg">$ 15000.00</div>
            </div>
            <div className="px-6 flex flex-col gap-2 py-4  border-r-2 my-2">
              <div className=" text-gray-500">Category</div>
              <div className="font-semibold text-lg">Food</div>
            </div>
            <div className="px-6 flex flex-col gap-2 py-4 border-r-2 my-2">
              <div className=" text-gray-500">Department</div>
              <div className="font-semibold text-lg">1234-2234-9485</div>
            </div>
            <div className="px-6 flex flex-col gap-2 py-4  border-r-2 my-2">
              <div className=" text-gray-500">Status</div>
              <div className="font-semibold text-lg">Awaiting for approvel</div>
            </div>
          </div>
        </div>
        <List />
      </div>
    </>
  )
}
