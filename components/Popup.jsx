"use client"
import useItems from "@/lib/store"
export default function Popup() {
  const cartItems = useItems((state) => state.cartItems)
  const updateStatus = useItems((state) => state.updateStatus)
  const togglePopup = useItems((state) => state.togglePopup)
  const selectedId = useItems((state) => state.selectedId)
  const changeToggle = useItems((state) => state.changeToggle)
  return (
    <div className="w-full h-screen flex justify-center items-center absolute  bg-zinc-950/[0.6]">
      <div className=" w-[300px] h-[2] absoute bg-white rounded-md py-4 px-6">
        <div className="flex justify-between">
          <p className="font-semibold">Missing Product</p>
          <p className="cursor-pointer" onClick={changeToggle}>
            ✖
          </p>
        </div>
    <div className="mt-4">Is {cartItems.map((item) =>{
        if(item.id === selectedId){
            return item.productName
        }
    })} urgent?</div>
        <div className="flex justify-end gap-6 mt-6">
          <p
            className="cursor-pointer"
            onClick={() => {
              updateStatus("Missing Urgent", selectedId)
              changeToggle()
            }}
          >
            Yes
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              updateStatus("Missing", selectedId)
              changeToggle()
            }}
          >
            No
          </p>
        </div>
      </div>
    </div>
  )
}
