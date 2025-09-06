import Image from 'next/image';
import react from 'react';
import Prodact from "../app/prodacthome/Prodact";
export default function Home() {
  return (
    <div className="p-4 px-4">
      <div className="bg-cover rounded-[50px] w-full h-screen bg-center" style={{ backgroundImage: "url('/image1.jpeg')" }}>
        {/* Header Section */}
        <header className="sticky top-0 z-100 flex justify-between items-center w-full p-4 bg-opacity-60">
          {/* Uncomment this if you want a logo in the header */}
          {/* <Image src="/tiqlaa1.svg" alt="Tiqlaa Logo" width={50} height={50} /> */}
        </header>

        {/* Navigation Bar */}
        <div className="px-2">
          <nav className="flex justify-center font-bold p-2 hover: rounded-[20px] items-center text-black">
            <header className="sticky top-0 z-10 flex justify-start items-center w-full p-4 bg-opacity-60">
              <Image src="/tiqlaa1.svg" alt="Tiqlaa Logo" width={30} height={30} />
            </header>
            <div className="space-x-1 flex justify-center">
              <a
                href="#home"
                className="bg-[#eded10] p-2 px-6 rounded-[10px] hover:bg-[#f8e300] hover:text-white transition duration-300 ease-in-out"
              >
                Home
              </a>
              <a
                href="#products"
                className="bg-[#eded10] p-2 px-6 rounded-[10px] hover:bg-[#f8e300] hover:text-white transition duration-300 ease-in-out"
              >
                Products
              </a>
            
            </div>
          </nav>
        </div>
           
<div className="mt-[150px]">
<Prodact />

</div>

        {/* Main Section */}
        <div className="absolute space-x-6 p-1 text-white bg-opacity-70">

          {/* Text content */}
          <h1 className="text-4xl  md:text-5xl font-bold text-center">Welcome to Tiqlaa</h1>
     
        </div>

      </div>
    </div>
  );
}
