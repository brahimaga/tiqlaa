'use client';

import React, { useState, useRef, useEffect } from 'react';

const ProductScroll = () => {
  const [cart, setCart] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    shoeSize: '',
    city: ''
  });

  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "حذاء كلاسيكي",
      price: 299.99,
      color: "bg-blue-200",
      icon: (
        <img className="w-[100px] h-[100px]" src="proo1.jpeg" alt="حذاء كلاسيكي" />
      ),
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      description: "حذاء كلاسيكي أنيق مصنوع من الجلد الطبيعي، مناسب للمناسبات الرسمية واليومية."
    },
    {
      id: 2,
      name: "حذاء رياضي",
      price: 249.99,
      color: "bg-green-200",
      icon: (
        <img className="w-[100px] h-[100px] object-cover" src="proo1.jpeg" alt="حذاء رياضي" />
      ),
      buttonColor: "bg-green-500 hover:bg-green-600",
      description: "حذاء رياضي مريح يوفر دعماً ممتازاً للقدمين أثناء ممارسة الرياضة أو المشي اليومي."
    },
    {
      id: 3,
      name: "حذاء رسمي",
      price: 349.99,
      color: "bg-purple-200",
      icon: (
        <img className="w-[100px] h-[100px] object-cover" src="proo1.jpeg" alt="حذاء رسمي" />
      ),
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      description: "حذاء رسمي عالي الجودة مصنوع يدوياً، مثالي للاجتماعات المهمة والمناسبات الخاصة."
    },
    {
      id: 4,
      name: "حذاء مريح",
      price: 199.99,
      color: "bg-orange-200",
      icon: (
        <img className="w-[100px] h-[100px] object-cover" src="proo1.jpeg" alt="حذاء مريح" />
      ),
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      description: "حذاء يومي مريح مصمم لتوفير أقصى درجات الراحة خلال اليوم الطويل."
    },
    {
      id: 5,
      name: "حذاء صيفي",
      price: 179.99,
      color: "bg-yellow-200",
      icon: (
        <img className="w-[100px] h-[100px] object-cover" src="proo1.jpeg" alt="حذاء صيفي" />
      ),
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      description: "حذاء صيفي خفيف ومسامي، مثالي للأجواء الحارة ويوفر تهوية ممتازة للقدمين."
    },
    {
      id: 6,
      name: "حذاء شتوي",
      price: 379.99,
      color: "bg-gray-200",
      icon: (
        <img className="w-[100px] h-[100px] object-cover" src="proo1.jpeg" alt="حذاء شتوي" />
      ),
      buttonColor: "bg-gray-500 hover:bg-gray-600",
      description: "حذاء شتوي دافئ ومقاوم للماء، يحمي قدميك من البرد والأمطار خلال فصل الشتاء."
    },
  ];

  const addToCart = (productId, e) => {
    e.stopPropagation(); // منع فتح المودال عند النقر على الزر
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const productWidth = scrollRef.current.scrollWidth / products.length;
      const currentIndex = Math.round(scrollPosition / productWidth);
      setScrollIndex(currentIndex);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال الطلب
    alert(`شكراً لك ${userInfo.name}! تم استلام طلبك وسنتصل بك قريباً.`);
    setModalVisible(false);
    setUserInfo({ name: '', phone: '', shoeSize: '', city: '' });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="w-full mx-auto  min-h-screen">
      {/* عنوان القسم */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 mt-6">
        اكتشف مجموعتنا المميزة
      </h2>
      
      {/* منتجات */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-6 scrollbar-hide scroll-smooth space-x-4 px-2"
      >
        {products.map(product => (
          <div 
            key={product.id}
            className="flex-shrink-0 bg-white w-[170px] h-[220px] sm:w-[200px] sm:h-[250px] lg:w-[250px] lg:h-[280px] rounded-3xl p-4 shadow-lg flex flex-col items-center justify-between transform transition-transform hover:scale-105 cursor-pointer border border-gray-100"
            onClick={() => handleProductClick(product)}
          >
            <div className="rounded- mb-3 flex items-center justify-center  overflow-hidden">
              {product.icon}
            </div>
            <div className="text-center flex-1">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{product.name}</h3>
              <p className="text-[#ff9f02] font-bold text-lg mt-1">{product.price.toFixed(2)} ر.س</p>
            </div>
            <button 
              onClick={(e) => addToCart(product.id, e)}
              className={`mt-2 bg-[#3A2E26] hover:bg-[#5A4B41] text-white py-2 px-4 rounded-full text-xs sm:text-sm transition-colors ${cart[product.id] ? 'bg-green-600 hover:bg-green-700' : ''}`}
            >
              {cart[product.id] ? `تم الإضافة (${cart[product.id]})` : 'أضف إلى السلة'}
            </button>
          </div>
        ))}
      </div>

      {/* مؤشر التمرير */}
      <div className="flex justify-center mt-4">
        {products.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === scrollIndex ? 'bg-[#3A2E26]' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      {/* المودال */}
      {modalVisible && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4 overflow-y-auto">
          <div className="bg-white p-6 rounded-3xl w-full max-w-md shadow-lg relative my-8">
            {/* زر الإغلاق */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-500 text-gray-500 hover:text-white rounded-full transition-colors duration-200"
              aria-label="إغلاق"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* عنوان المنتج */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#3A2E26]">{selectedProduct.name}</h2>
            </div>
            
            {/* صورة المنتج */}
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center p-4 shadow-inner">
                {selectedProduct.icon}
              </div>
            </div>
            
            {/* سعر المنتج */}
            <p className="text-3xl text-[#ff9f02] font-semibold text-center mb-4">{selectedProduct.price.toFixed(2)} ر.س</p>

            {/* وصف المنتج */}
            <p className="text-gray-600 text-center mb-6 px-2 text-sm">{selectedProduct.description}</p>

            {/* نموذج معلومات العميل */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#3A2E26] mb-1 text-right">الاسم الكامل</label>
                <input 
                  type="text" 
                  name="name" 
                  value={userInfo.name} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-[#ff9f02] focus:border-[#ff9f02] transition text-right"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3A2E26] mb-1 text-right">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={userInfo.phone} 
                    onChange={handleInputChange} 
                    className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-[#ff9f02] focus:border-[#ff9f02] transition text-right"
                    placeholder="رقم هاتفك"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3A2E26] mb-1 text-right">مقاس الحذاء</label>
                  <input 
                    type="number" 
                    name="shoeSize" 
                    value={userInfo.shoeSize} 
                    onChange={handleInputChange} 
                    className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-[#ff9f02] focus:border-[#ff9f02] transition text-right"
                    placeholder="المقاس"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#3A2E26] mb-1 text-right">المدينة</label>
                <input 
                  type="text" 
                  name="city" 
                  value={userInfo.city} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-[#ff9f02] focus:border-[#ff9f02] transition text-right"
                  placeholder="مدينتك"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ff9f02] hover:bg-[#e88f02] text-white py-3 rounded-full font-medium mt-2 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                اكمال الطلب
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScroll;