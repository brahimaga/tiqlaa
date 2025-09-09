"use client";
import { motion } from "framer-motion";

export default function PageData() {
  return (
    <div>
      {/* القسم الأول */}
      <div className="p-5">
        {/* العنوان الرئيسي */}
        <div className="flex justify-center items-center mb-6 text-center">
          <motion.h1
            className="text-black text-2xl md:text-3xl font-bold leading-relaxed"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            حداء جلدي أصلي… أناقة تدوم، وراحة تحمي رجليك كل يوم.
          </motion.h1>
        </div>

        {/* المحتوى */}
        <motion.div
          className="flex flex-col items-center bg-[#F4F3EE] w-full min-h-screen rounded-[40px] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          
          {/* عنوان الخصائص */}
          <motion.h2
            className="text-lg text-black border border-white p-1 px-4 shadow-lg shadow-white rounded-full md:text-xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            بعض الخصائص الصحية للحذاء
          </motion.h2>

          {/* الصور والخصائص */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
            }}
          >
            {/* Each item */}
            {[
              { src: "baktirya.jpeg", title: "مضاد للبكتيريا" },
              { src: "rjl.jpeg", title: "يمنع الحساسية والالتهابات الجلدية" },
              { src: "rjl2.jpeg", title: "يقي من التشقق ومسامير الرجل" },
              { src: "l3mod.jpeg", title: "يخفف آلام المفاصل والعمود الفقري" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="space-y-2 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <motion.img
                  className="w-[251px] h-[111px] object-cover rounded-full border-4 border-white shadow-md"
                  src={item.src}
                  alt={`خاصية ${index + 1}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.h3
                  className="font-medium text-lg mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* القسم الثاني مع النص التسويقي */}
      <div className="p-5 mt-10">
        <div className="relative w-full h-auto md:h-screen rounded-[30px] overflow-hidden shadow-xl">
          {/* الصورة الخلفية */}
          <img
            className="w-full h-full object-cover"
            src="image2.jpeg"
            alt="حذاء جلدي فاخر"
          />

          {/* المحتوى فوق الصورة */}
          <div className="absolute inset-0 flex justify-center items-center bg-black/30">
            <motion.div 
              className="w-full max-w-4xl h-auto md:h-[400px] p-8  rounded-2xl backdrop-blur-[1px] shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8 h-full">
                {/* النصف الأول من النص */}
                <motion.div 
                  className="flex-1 flex flex-col justify-center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#3A2E26] mb-4 text-right">
                    راحة لا مثيل لها مع كل خطوة
                  </h2>
                  <p className="text-lg text-[#3A2E26]  bg-white/80 rounded-[20px] p-1 px-2 mt-2 backdrop-blur-sm text-right leading-8">
                    صنع بأيدي حرفيين مهرة، يجمع حذاؤنا بين الأصالة والأناقة. 
                    من الجلد الطبيعي الفاخر الذي يتنفس مع قدميك، ليمنحك الراحة 
                    طوال اليوم ويحميها من المتاعب اليومية.
                  </p>
                </motion.div>
                
                {/* النصف الثاني من النص */}
                <motion.div 
                  className="flex-1 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-right">
                    جودة تستحق الاستثمار
                  </h2>
                  <p className="text-lx  text-white text-right leading-8">
                    لا تقبل بالبديل عندما يتعلق الأمر بصحة قدميك. أحذيتنا مصممة 
                    لتكون رفيقك الدائم، بمتانة تستمر لسنوات وأناقة لا تنتهي. 
                    اختر الأفضل لقدميك، اختر الراحة الحقيقية.
                  </p>
                </motion.div>
              </div>
              
              {/* شعار أو دعوة للعمل */}
              <motion.div 
                className="text-center mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button className="bg-[#3A2E26] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#5A4B41] transition-colors shadow-md">
                  اكتشف المجموعة الآن
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* قسم إضافي للمميزات */}
      <div className="p-5 mt-10">
        <motion.div 
          className="bg-gradient-to-r from-[#F4F3EE] to-[#E8E1D7] rounded-[40px] p-8 shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3A2E26] mb-10">
            لماذا تختار أحذيتنا؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "جلد طبيعي 100%", 
                desc: "مصنوع من أجود أنواع الجلد الطبيعي الذي يضمن التهوية والراحة" 
              },
              { 
                title: "تصميم يدوي فاخر", 
                desc: "حرفية عالية وتفاصيل دقيقة تجعل من كل حذاء تحفة فنية" 
              },
              { 
                title: "دعم طبي للقدم", 
                desc: "يدعم تقوس القدم الطبيعي ويقلل من الإجهاد والتعب" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-3xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold text-[#3A2E26] mb-3">{item.title}</h3>
                <p className="text-[#5A4B41]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}