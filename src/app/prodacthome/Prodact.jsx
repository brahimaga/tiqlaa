'use client';

import React, { useState, useRef, useEffect } from 'react';

const ProductScroll = () => {
  const [cart, setCart] = useState({});
  const [modalVisible, setModalVisible] = useState(false);  // To control modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null);  // Store the selected product
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    shoeSize: '',
    city: '' // Add city to the state
  });

  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 79.99,
      color: "bg-blue-200",
      icon: (
        <img className="w-[100px] h-[100px]" src="proo1.jpeg" />
      ),
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      color: "bg-green-200",
      icon: (
        <img className="w-[100px] h-[100px]" src="proo1.jpeg" />
      ),
      buttonColor: "bg-green-500 hover:bg-green-600"
    },
    {
      id: 3,
      name: "VR Headset",
      price: 299.99,
      color: "bg-purple-200",
      icon: (
        <img className="w-[100px] h-[100px]" src="proo1.jpeg" />
      ),
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    },
    {
      id: 4,
      name: "VR Headset",
      price: 299.99,
      color: "bg-purple-200",
      icon: (
        <img className="w-[100px] h-[100px]" src="proo1.jpeg" />
      ),
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    },
    {
      id: 5,
      name: "VR Headset",
      price: 299.99,
      color: "bg-purple-200",
      icon: (
        <img className="w-[100px] h-[100px]" src="proo1.jpeg" />
      ),
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    },
    {
      id: 6,
      name: "VR Headset",
      price: 299.99,
      color: "bg-purple-200",
      icon: (
        <img className="w-[100px] h-[100px]" src="proo1.jpeg" />
      ),
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    },
  ];

  const addToCart = (productId) => {
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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
      return () => {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="w-full mx-auto p-1">
      {/* Cart indicator */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-scroll mt-[100px] pb-4 scrollbar-hide scroll-smooth space-x-6"
      >
        {products.map(product => (
          <div 
            key={product.id}
            className="flex-shrink-0 mt-[10px] bg-white w-[170px] h-[189px] sm:w-[200px] sm:h-[220px] lg:w-[250px] lg:h-[250px] rounded-[50px] p-4 shadow-lg flex flex-col items-center justify-center transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => handleProductClick(product)} // Make entire product clickable
          >
            <div className={`rounded-full mb-3 flex items-center justify-center`}>
              {product.icon}
            </div>
            <h3 className="font-semibold text-center text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-1">${product.price.toFixed(2)}</p>
            <button 
              onClick={() => addToCart(product.id)}
              className="mt-2  hover:bg-blue-600 text-white p-2 rounded"
            >
              {cart[product.id] ? `Added (${cart[product.id]})` : ''}
            </button>
          </div>
        ))}
      </div>

      {/* Modal for product details */}
      {modalVisible && selectedProduct && (
  <div className="fixed inset-0 bg-black/60 overflow-y-scroll flex justify-center items-center z-50 px-[20px] p-[10px]">
    <div className="bg-white p-8 rounded-3xl w-full max-w-md shadow-lg shadow-[#ff9f02] relative">
      {/* Close Button - Improved positioning and styling */}
      <button
        type="button"
        onClick={handleCloseModal}
        className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-500 text-gray-500 hover:text-white rounded-full transition-colors duration-200"
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Product Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
      </div>
      
      {/* Product Image */}
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-4 shadow-inner">
          <img 
            className="w-full h-full object-contain" 
            src={selectedProduct.icon.props.src} 
            alt={selectedProduct.name} 
          />
        </div>
        
      </div>
      <p className="text-[30px] text-[#ff9f02] font-semibold justify-center items-center">${selectedProduct.price.toFixed(2)}</p>

      {/* Product Description */}
      <p className="text-gray-600 text-center mb-6 px-2">{selectedProduct.description}</p>

      {/* User Info Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={userInfo.name} 
            onChange={handleInputChange} 
            className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={userInfo.phone} 
              onChange={handleInputChange} 
              className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Your phone"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Shoe Size</label>
            <input 
              type="number" 
              name="shoeSize" 
              value={userInfo.shoeSize} 
              onChange={handleInputChange} 
              className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Size"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input 
            type="text" 
            name="city" 
            value={userInfo.city} 
            onChange={handleInputChange} 
            className="w-full p-3 border border-[#ff9f02] rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter your city"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#ff9f02] hover:bg-green-700 text-white py-3 rounded-full font-medium mt-2 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default ProductScroll;
