import React, { useState } from "react";
import { motion } from "framer-motion";

const genSlideStyle = (value: any) => {
   return {
      point: {
         left: `calc(${value * 10}% - ${10 + 3 * value}px)`,
      },
      range: {
         width: `${value * 10}%`,
      },
   };
};

interface Range {
   active: any;
   setActive: Function;
}

const Range: React.FC<Range> = ({ active, setActive }) => {
   const handleChange = (e: any) => {
      setActive(+e.target.value);
   };

   const slideStyle = genSlideStyle(active);

   return (
      <motion.div
         initial={{
            opacity: 0,
            y: 50,
         }}
         whileInView={{
            opacity: 1,
            y: 0,
            transition: {
               delay: 0,
               type: "spring",
               stiffness: 60,
            },
         }}
         viewport={{ once: true }}
         className="range-warapper max-lg:h-16"
      >
         <div className="range">
            <span className="bullet" />
            <span className="bullet-1" />
            <span className="bullet-2" />
            <span className="bullet-3" />
            <span className="bullet-4" />
            <span className="bullet-5" />
            <span className="bullet-6" />
            <span className="bullet-7" />
            <span className="bullet-8" />
            <span
               onClick={() => setActive(1)}
               className="w-[10%] h-full absolute -top-0 left-0 z-10"
            />
            <span className="range-value relative" style={slideStyle.range}>
               {/* <span className="circle" style={slideStyle.point} /> */}
               <span className="absolute -top-2 max-lg:-top-[2.5px] -right-6 max-lg:-right-5 w-14 h-16 max-lg:w-12 max-lg:h-[55px] rounded-[10px] cursor-grab bg-white" />
            </span>
            <input
               className="range-slide"
               name="range"
               type="range"
               min="1"
               max="10"
               value={active}
               step="1"
               onChange={handleChange}
            />
         </div>
      </motion.div>
   );
};

export default Range;
