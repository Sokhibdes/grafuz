import { useState, useEffect } from "react";

import { motion } from "framer-motion";

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
   const [stop, setStop] = useState(false);
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   useEffect(() => {
      const date = new Date("02/15/2024 00:00:00");

      const interval = setInterval(() => {
         const now = new Date();
         const difference = date.getTime() - now.getTime();

         const d = Math.floor(difference / (1000 * 60 * 60 * 24));
         setDays(d);

         const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         setHours(h);

         const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
         setMinutes(m);

         const s = Math.floor((difference % (1000 * 60)) / 1000);
         setSeconds(s);

         if (d === -1 && h === -1 && m === -1 && s === -1) {
            setStop(true);
         }
      }, 1000);
   });
   return (
      <motion.div
         initial={{
            x: -50,
            opacity: 0,
         }}
         whileInView={{
            x: 0,
            opacity: 1,

            transition: {
               type: "spring",
               stiffness: 60,
            },
         }}
         viewport={{ once: true }}
         className=""
      >
         <div className="">
            <h3 className="mb-3 text-[30px] max-xl:text-[24px] font-medium leading-[41px] max-lg:text-center text-white">
               Kurs boshlanish vaqti:
            </h3>
            <div className="flex items-center max-lg:justify-center gap-3">
               {stop ? (
                  <div>
                     <p className="text-7xl max-md:text-6xl max-sm:text-4xl font-bold text-white">
                        kurs boshlandi
                     </p>
                  </div>
               ) : (
                  <>
                     <div className="">
                        <div className="bg-[#d9d9d947] pt-8 pb-6 max-lg:pt-3 max-lg:pb-2 px-2 rounded-t-[10px]">
                           <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                              {days.toString().length === 2 ? days : `0${days}`}
                           </p>
                        </div>
                        <div className="bg-[#d9d9d947] rounded-b-[10px] mt-[2px]">
                           <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                              kun
                           </p>
                        </div>
                     </div>
                     <div className="">
                        <p className="text-[73px] max-lg:text-[60px] max-md:text-[50px] font-medium leading-[41px] mt-5 max-xl:mt-0 text-white">
                           :
                        </p>
                     </div>
                     <div className="">
                        <div className="pt-8 pb-6 px-2 max-lg:pt-3 max-lg:pb-2 rounded-t-[10px]">
                           <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                              {hours.toString().length === 2
                                 ? hours
                                 : `0${hours}`}
                           </p>
                        </div>
                        <div className="rounded-b-[10px] mt-[2px]">
                           <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                              soat
                           </p>
                        </div>
                     </div>
                     <div className="">
                        <p className="text-[73px] max-lg:text-[60px] max-md:text-[50px] font-medium leading-[41px] mt-5 max-xl:mt-0 text-white">
                           :
                        </p>
                     </div>
                     <div className="">
                        <div className="pt-8 pb-6 px-2 max-lg:pt-3 max-lg:pb-2 rounded-t-[10px]">
                           <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                              {minutes.toString().length === 2
                                 ? minutes
                                 : `0${minutes}`}
                           </p>
                        </div>
                        <div className="rounded-b-[10px] mt-[2px]">
                           <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                              daqiqa
                           </p>
                        </div>
                     </div>
                     <div className="">
                        <p className="text-[73px] max-lg:text-[60px] max-md:text-[50px] font-medium leading-[41px] mt-5 max-xl:mt-0 text-white">
                           :
                        </p>
                     </div>
                     <div className="">
                        <div className="pt-8 pb-6 px-2 max-lg:pt-3 max-lg:pb-2 rounded-t-[10px]">
                           <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                              {seconds.toString().length === 2
                                 ? seconds
                                 : `0${seconds}`}
                           </p>
                        </div>
                        <div className="rounded-b-[10px] mt-[2px]">
                           <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                              soniya
                           </p>
                        </div>
                     </div>
                  </>
               )}
            </div>
         </div>
         <div className="mt-12 text-[43px] max-2xl:text-[28px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px] font-bold leading-[41px] max-xl:leading-[25px] max-md:leading-[15px] max-sm:text-center text-white">
            <p className="mb-5">O’zingizni sinab ko’rish uchun</p>
            <p className="">
               <span className="pl-5 pr-7 max-xl:pr-5 max-sm:pr-3 max-xl:pl-3 max-sm:pl-2 mr-2 rounded-2xl bg-gradient-to-r from-[#844FFC] from-13.57% to-[#491EB8] to-98.35%">
                  bepul
               </span>
               darsni qo’lga kiriting
            </p>
         </div>
      </motion.div>
   );
};

export default Counter;
