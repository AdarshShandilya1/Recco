"use client"
import avocado from "@/public/Avocado Hass.jpg"
import Image from "next/image"
import useItems from "@/lib/store"
export default function ListItem(props) {
  const togglePopup = useItems((state) => state.togglePopup)
  const changeToggle = useItems((state) => state.changeToggle)
  const updateStatus = useItems((state) => state.updateStatus)
  const setSelectedId = useItems((state) => state.setSelectedId)
  return (
    <div className="grid grid-cols-9 border-b-2 border-gray-400 py-4">
      <div className="col-span-2 flex gap-2">
        <Image src={"https://ik.imagekit.io/b6jjt4sjt/Kapde/Avocado%20Hass.jpg?updatedAt=1698221902064"} width={50} height={50} />
        <p className="my-auto">{props.item.productName}</p>
      </div>
      <div className="my-auto">{props.item.brand}</div>
      <div className="my-auto">${props.item.price}</div>
      <div className="my-auto">{props.item.quantity} </div>
      <div className="my-auto">${props.item.price * props.item.quantity}</div>
      <div className="col-span-3 grid grid-cols-7 gap-2 px-2">
        {/* <div className="col-span-4 my-auto bg-green-500 text-white px-4 py-1 rounded-full w-fit">
          {props.item.status}
        </div> */}
        {
          {
            "": (
              <>
                <div className="col-span-4 my-auto text-white px-4 py-1 rounded-full w-fit">
                  {props.item.status}
                </div>
                <p
                  className="cursor-pointer text-xl my-auto"
                  onClick={() => updateStatus("Approved", props.item.id)}
                >
                  ✔
                </p>
                <p
                  className="cursor-pointer text-xl my-auto"
                  onClick={() => {
                    setSelectedId(props.item.id)
                    changeToggle()
                  }}
                >
                  ✖
                </p>
                <p className="cursor-pointer my-auto">Edit</p>
              </>
            ),
            Approved: (
              <>
                <div className="col-span-4 my-auto bg-green-500 text-white px-4 py-1 rounded-full w-fit">
                  {props.item.status}
                </div>
                <p
                  className="cursor-pointer text-xl my-auto text-green-500"
                  onClick={() => updateStatus("Approved", props.item.id)}
                >
                  ✔
                </p>
                <p
                  className="cursor-pointer text-xl my-auto"
                  onClick={() => {
                    setSelectedId(props.item.id)
                    changeToggle()
                  }}
                >
                  ✖
                </p>
                <p className="cursor-pointer my-auto">Edit</p>
              </>
            ),
            Missing: (
              <>
                <div className="col-span-4 my-auto bg-orange-400 text-white px-4 py-1 rounded-full w-fit">
                  {props.item.status}
                </div>
                <p
                  className="cursor-pointer text-xl my-auto"
                  onClick={() => updateStatus("Approved", props.item.id)}
                >
                  ✔
                </p>
                <p
                  className="cursor-pointer text-xl my-auto text-orange-400"
                  onClick={() => {
                    setSelectedId(props.item.id)
                    changeToggle()
                  }}
                >
                  ✖
                </p>
                <p className="cursor-pointer my-auto">Edit</p>
              </>
            ),
            "Missing Urgent": (
              <>
                <div className="col-span-4 my-auto bg-red-500 text-white px-4 py-1 rounded-full w-fit">
                  {props.item.status}
                </div>
                <p
                  className="cursor-pointer text-xl my-auto"
                  onClick={() => updateStatus("Approved", props.item.id)}
                >
                  ✔
                </p>
                <p
                  className="cursor-pointer text-xl my-auto text-red-500"
                  onClick={() => {
                    setSelectedId(props.item.id)
                    changeToggle()
                  }}
                >
                  ✖
                </p>
                <p className="cursor-pointer my-auto">Edit</p>
              </>
            ),
          }[props.item.status]
        }

        {/* 
        
        
        https://ik.imagekit.io/b6jjt4sjt/Kapde/Avocado%20Hass.jpg?updatedAt=1698221902064
        
        <p
          className="cursor-pointer text-xl my-auto"
          onClick={() => updateStatus("Approved", props.item.id)}
        >
          ✔
        </p>
        <p
          className="cursor-pointer text-xl my-auto"
          onClick={() => {
            setSelectedId(props.item.id)
            changeToggle()
          }}
        >
          ✖
        </p>
        <p className="cursor-pointer my-auto">Edit</p> */}
      </div>
    </div>
  )
}
