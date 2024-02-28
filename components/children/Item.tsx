import { motion } from "framer-motion";

interface ItemProps {
   item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
   return (
      <motion.li
         initial={{
            opacity: 0,
            x: -40,
         }}
         whileInView={{
            opacity: 1,
            x: 0,
            transition: {
               delay: +`0.${item.id}` + 0.2,
               type: "spring",
               stiffness: 60,
            },
         }}
         viewport={{ once: true }}
         className="w-fit max-md:w-full max-sm:w-fit max-md:text-center max-sm:text-start relative px-14 max-xl:px-10 max-lg:px-7 py-2 text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[12px] rounded-[10px] border-2 border-gray-500 bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
      >
         <div className="max-sm:hidden w-10 h-10 absolute z-[-1] top-0 -left-7 rounded-full blur-2xl bg-[#6e22d1]"></div>
         <span className="absolute z-50 top-1/2 -translate-y-1/2 -left-32 max-lg:-left-[100px]">
            <svg
               className="max-lg:w-40 h-fit"
               xmlns="http://www.w3.org/2000/svg"
               width="206"
               height="216"
               viewBox="0 0 206 216"
               fill="none"
            >
               <path
                  d="M116.985 105.626L105.285 89.7854C104.555 88.7964 103.399 88.2148 102.165 88.2148L91.8772 88.2148C88.7067 88.2148 86.8803 91.8016 88.7579 94.3441L98.7773 107.906L88.7579 121.468C86.8803 124.01 88.7067 127.597 91.8772 127.597L102.165 127.597C103.399 127.597 104.555 127.015 105.285 126.026L116.985 110.185C117.988 108.827 117.988 106.981 116.985 105.626Z"
                  fill="url(#paint1_linear_0_196)"
               />
               <defs>
                  <linearGradient
                     id="paint1_linear_0_196"
                     x1="87.0041"
                     y1="108.343"
                     x2="117.16"
                     y2="107.009"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stopColor="#4773F8" />
                     <stop offset="1" stopColor="#0000B8" />
                  </linearGradient>
               </defs>
            </svg>
         </span>
         <span className="w-[55px] h-[55px] max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl border-2 border-white bg-gradient-to-tr from-[#233861] from-[10.42%] to-[#bfbfbf] to-[77.11%]">
            {item.id + 1}
         </span>
         <p className="text-xl max-xl:text-base max-[900px]:text-xs max whitespace-nowrap">
            {item.modul}
         </p>
      </motion.li>
   );
};

export default Item;
