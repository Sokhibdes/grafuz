import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { useState, useRef } from "react";


interface SwiperContainerProps { }

const SwiperContainer: React.FC<SwiperContainerProps> = () => {
   return (
      <div className="custom-container relative pb-96">
         <div className="w-1/3 h-[600px] absolute z-[-1] -top-40 left-1/2 -translate-x-1/2 bg-[#8259EC40] rounded-[50%] blur-[150px]"></div>

         <div className="absolute z-[-1] top-0 left-1/2 -translate-x-1/2 custom-select-none">
            <Image
               className="opacity-10"
               src={"/images/grid.png"}
               width={1000}
               height={1000}
               alt="grid"
            />
         </div>

         <div className="mb-16 mt-5">
            <motion.h2
               initial={{
                  y: 50,
                  opacity: 0,
               }}
               whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                     type: "spring",
                     stiffness: 60,
                  },
               }}
               viewport={{ once: true }}
               className="text-[78px] max-md:text-[50px] max-sm:text-[30px] font-bold text-center text-white"
            >
               BITIRUVCHILAR MAHORATI
            </motion.h2>
         </div>

         <div className="max-lg:hidden mb-16 flex items-center justify-between">
            <div className="flex flex-col gap-4">
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
                  className="w-fit py-1 px-8 rounded-3xl border border-white"
               >
                  <p className="text-[28px] leading-[42px] text-white">
                     After effects
                  </p>
               </motion.div>
               <motion.div
                  initial={{
                     x: -50,
                     opacity: 0,
                  }}
                  whileInView={{
                     x: 0,
                     opacity: 1,
                     transition: {
                        delay: 0.1,
                        type: "spring",
                        stiffness: 60,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit py-1 px-8 rounded-3xl border border-white"
               >
                  <p className="text-[28px] leading-[42px] text-white">
                     Photoshop
                  </p>
               </motion.div>
               <motion.div
                  initial={{
                     x: -50,
                     opacity: 0,
                  }}
                  whileInView={{
                     x: 0,
                     opacity: 1,
                     transition: {
                        delay: 0.2,
                        type: "spring",
                        stiffness: 60,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit py-1 px-8 rounded-3xl border border-white"
               >
                  <p className="text-[28px] leading-[42px] text-white">
                     Premiere Pro
                  </p>
               </motion.div>
            </div>

            <div className="flex flex-col gap-4">
               <motion.div
                  initial={{
                     x: 50,
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
                  className="w-fit py-1 px-8 rounded-3xl border border-white"
               >
                  <p className="text-[28px] leading-[42px] text-white">
                     Design
                  </p>
               </motion.div>
               <motion.div
                  initial={{
                     x: 50,
                     opacity: 0,
                  }}
                  whileInView={{
                     x: 0,
                     opacity: 1,
                     transition: {
                        delay: 0.1,
                        type: "spring",
                        stiffness: 60,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit py-1 px-8 rounded-3xl border border-white"
               >
                  <p className="text-[28px] leading-[42px] text-white">
                     Editing
                  </p>
               </motion.div>
               <motion.div
                  initial={{
                     x: 50,
                     opacity: 0,
                  }}
                  whileInView={{
                     x: 0,
                     opacity: 1,
                     transition: {
                        delay: 0.2,
                        type: "spring",
                        stiffness: 60,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit py-1 px-8 rounded-3xl border border-white"
               >
                  <p className="text-[28px] leading-[42px] text-white">Sound</p>
               </motion.div>
            </div>
         </div>

         <div className="relative ">
            <motion.div
               initial={{
                  opacity: 0,
               }}
               whileInView={{
                  opacity: 1,
                  transition: {
                     type: "spring",
                     stiffness: 60,
                  },
               }}
               viewport={{ once: true }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[42.5%] max-lg:-translate-y-[360px] max-md:-translate-y-[360px] max-sm:-translate-y-[300px] w-[534px] max-xl:w-[460px] max-sm:w-[380px]"
            >
               <Image
                  className="custom-select-none"
                  src={"/images/phone.svg"}
                  width={1000}
                  height={1000}
                  alt="phone"
               />
            </motion.div>
            <motion.div
               initial={{
                  x: "100%",
                  opacity: 0,
               }}
               whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                     delay: 0.4,
                     type: "spring",
                     stiffness: 40,
                  },
               }}
               viewport={{ once: true }}
               className="mt-40"
            >
               <Swiper
                  loop={true}
                  centeredSlides={true}
                  mousewheel={true}
                  spaceBetween={20}
                  slidesPerView={4}
                  modules={[Mousewheel]}
                  breakpoints={{
                     0: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                     },
                     640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                     },
                     1024: {
                        slidesPerView: 3,
                     },
                     1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                     },
                  }}
               >
                  {[1, 2, 3, 4].map((item: number) => {
                     const [play, setplay] = useState(false);
                     const videoRef = useRef<any>(null);

                     const handleVideoEnd = () => {
                        if (videoRef.current) {
                           videoRef.current.currentTime = 0;
                           videoRef.current.play();
                        }
                     };

                     return (
                        <SwiperSlide className="flex justify-center" key={item}>
                           <div
                              onMouseEnter={() => setplay(true)}
                              onMouseLeave={() => setplay(false)}
                              className="w-fit m-auto h-[500px] max-xl:h-[400px] max-sm:h-[340px] rounded-[48px] overflow-hidden my-shadow hover:-translate-y-3 duration-200 ease-in-out"
                           >
                              <video ref={videoRef} onEnded={handleVideoEnd} height={"100%"} width={"100%"} className="w-full h-full video-player" controls={play} autoPlay muted={!play} >
                                 <source src={`/videos/video-${item}.mp4`} type="video/mp4"></source>
                              </video>
                           </div>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </motion.div>
         </div>
      </div>
   );
};

export default SwiperContainer;
