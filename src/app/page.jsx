import Image from 'next/image';
import Prodact from "../app/prodacthome/Prodact";
import PageData from './pagedata/page';

export default function Home() {
  return (
    <div className="bg-[#faf9f7]">
      {/* القسم الرئيسي مع الصورة الخلفية */}
      <div className="p-4 px-4">
        <div className="bg-cover rounded-[50px] w-full h-screen bg-center relative overflow-hidden" style={{ backgroundImage: "url('/image1.jpeg')" }}>
          {/* طبقة تظليل لتحسين قراءة النص */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Header Section */}
          <header className="sticky top-0 z-10 flex justify-between items-center w-full p-4">
            <div className="flex items-center">
              <Image src="/tiqlaa1.svg" alt="Tiqlaa Logo" width={30} height={30} />
              <span className="text-white font-bold mr-2 text-lg">Tiqlaa</span>
            </div>
          </header>

          {/* Navigation Bar */}
          <div className="px-2 mt-4">
            <nav className="flex justify-center font-bold p-2 items-center">
              <div className="space-x-4 flex justify-center bg-white/20 backdrop-blur-sm p-2 rounded-[15px]">
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
           
          {/* Prodact Component */}
          <div className="mt-[120px] relative z-10">
            <Prodact />
          </div>

          {/* Main Section Text */}
          <div className="absolute bottom-10 left-0 right-0 text-center p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              مرحبا بيك عندنا
            </h1>
            <p className="text-white mt-2 text-lg md:text-xl drop-shadow-md">
              جودة واستايل لا مثيل لهما
            </p>
          </div>
        </div>
      </div>
      
      {/* PageData Component */}
      <PageData />

      {/* قسم إضافي للمنتجات */}
      <div className="p-8 mt-10">
        <div className="bg-gradient-to-r from-[#F4F3EE] to-[#E8E1D7] rounded-[40px] p-8 shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3A2E26] mb-10">
            منتجاتنا الأكثر مبيعاً
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "حذاء كلاسيكي", price: "299 ر.س", image: "/shoe1.jpg" },
              { name: "حذاء رياضي", price: "259 ر.س", image: "/shoe2.jpg" },
              { name: "حذاء رسمي", price: "349 ر.س", image: "/shoe3.jpg" },
              { name: "حذاء مريح", price: "279 ر.س", image: "/shoe4.jpg" },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <div className="h-full flex items-center justify-center text-gray-400">
                    صورة المنتج
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-[#3A2E26]">{product.name}</h3>
                  <p className="text-[#5A4B41] mt-2">{product.price}</p>
                  <button className="mt-4 bg-[#3A2E26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#5A4B41] transition-colors">
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-1">
            <button className="bg-[#3A2E26] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#5A4B41] transition-colors shadow-md">
              عرض جميع المنتجات
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
}