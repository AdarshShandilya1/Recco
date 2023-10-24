export default function Navbar() {
  return (
    <div>
      <div className="w-full h-16 bg-green-800 flex justify-between items-center text-white font-light p-4 px-20">
        <div className="flex w-1/3 items-center justify-between">
          <p className="font-bold text-2xl">Reeco</p>
          <p>Store</p>
          <p>Orders</p>
          <p>Analytics</p>
        </div>
        <div className="w-1/3 flex justify-end">
          <p className="mr-10">Cart</p>
          <p>Hello, Adarsh Shandilya ⮟</p>
        </div>
      </div>
      
      <div className="w-full h-24 shadow-lg font-light flex justify-between items-center py-3 px-20 bg-white">
        <div className="flex flex-col justify-between h-full w-1/3 ">
          <p className="">{`Orders > Order 32457ABC`}</p>
          <p  className="text-2xl font-medium">Orders 32457ABC</p>
        </div>
        <div className="flex justify-end mt-auto w-1/3">
          <div className="mr-8 border border-green-800 text-green-800 font-semibold rounded-full p-2 px-6 cursor-pointer hover:bg-green-800 hover:text-white">Back</div>
          <div className="text-white bg-green-800 p-2 px-6 rounded-full cursor-pointer">Approve order</div>
        </div>
      </div>
    </div>
  )
}
