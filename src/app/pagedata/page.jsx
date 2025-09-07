"use client"; // Marking the file as a client-side component
import { motion } from "framer-motion";

export default function PageData() {
  return (
      <div>
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
            { src: "rjl.jpeg", title: "الحساسية والالتهابات الجلدية" },
            { src: "rjl2.jpeg", title: "التشقق ومسامير الرجل" },
            { src: "l3mod.jpeg", title: "آلام المفاصل والعمود الفقري" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="space-y-2 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}  // Slight rotation and scaling
            >
              <motion.img
                className="w-[251px] h-[111px] object-cover rounded-full"
                src={item.src}
                alt={`خاصية ${index + 1}`}
                whileHover={{ scale: 1.1, rotate: 5 }}  // Scaling up on hover
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.h3
                className="font-medium"
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



    <div className="relative w-full h-screen">
  {/* الصورة */}
  <img
    className="w-full h-full object-cover"
    src="image2.jpeg"
    alt=""
  />

  {/* الـ div فوق الصورة */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-[400px] h-[400px] bg-white/30 rounded-lg">
        <h1 className="text-white text-[30px]">text</h1>
    </div>
  </div>
</div>

</div>
  );
}
