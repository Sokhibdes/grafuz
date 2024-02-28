import { useState } from "react";

import Range from "@/components/children/Range";
import Item from "@/components/children/Item";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const arr = [
   {
      id: 0,
      title: "Adobe Photoshop dasturiga kirish",

      moduls: [
         {
            id: 0,
            modul: "-Interfeys va instrumentlar",
         },
         {
            id: 1,
            modul: "-Sloylar bilan ishlash",
         },
         {
            id: 2,
            modul: "-Blending Options",
         },
         {
            id: 3,
            modul: "-Peen Tool",
         },
         {
            id: 4,
            modul: "-Belgilash va kesish texnikasi, Maska",
         },
         {
            id: 5,
            modul: "-Cleanup, Retush",
         },
      ],
   },
   {
      id: 1,
      title: "Dizayn asoslari",

      moduls: [
         {
            id: 0,
            modul: "-Tipografiya",
         },
         {
            id: 1,
            modul: "-Ranglar bilan ishlash",
         },
         {
            id: 2,
            modul: "-Kompozitsiya",
         },
         {
            id: 3,
            modul: "-Double exposure",
         },
      ],
   },
   {
      id: 2,
      title: "SMM dizayn",

      moduls: [
         {
            id: 0,
            modul: "-Referens topish va Raskadirovka",
         },
         {
            id: 1,
            modul: "-Behance, Pinterest, Dribble, Milanote",
         },
         {
            id: 2,
            modul: "-Travel Poster",
         },
         {
            id: 3,
            modul: "-Carusel dizayn",
         },
         {
            id: 4,
            modul: "-Texnika dizayn",
         },
         {
            id: 5,
            modul: "-Aksiya dizayn",
         },
      ],
   },
   {
      id: 3,
      title: "Animatsiya asoslari",

      moduls: [
         {
            id: 0,
            modul: "-After Effect bilan tanishuv",
         },
         {
            id: 1,
            modul: "-Maska, Precompose",
         },
         {
            id: 2,
            modul: "-Sheyplar",
         },
         {
            id: 3,
            modul: "-Camera 3D",
         },
         {
            id: 4,
            modul: "-Animatsiya dinamikasi",
         },
      ],
   },
   {
      id: 4,
      title: "Animatsiya yaratish",

      moduls: [
         {
            id: 0,
            modul: "-Footage lar bilan ishlash",
         },
         {
            id: 1,
            modul: "-Pluginlar bilan ishlash",
         },
         {
            id: 2,
            modul: "-SMM postni animatsiya qilish",
         },
      ],
   },
   {
      id: 5,
      title: "Montaj asoslari",

      moduls: [
         {
            id: 0,
            modul: "-Premiere Pro dasturi bilan tanishish",
         },
         {
            id: 1,
            modul: "-Sodda montaj",
         },
         {
            id: 2,
            modul: "-Reels montaj qilish va subtitrlar qushish",
         },
         {
            id: 3,
            modul: "-Audition dasturi bilan ishlash va sound design",
         },
         {
            id: 4,
            modul: "-Ranglar bilan ishlash",
         },
         {
            id: 5,
            modul: "-Render tushunchalari",
         },
      ],
   },
   {
      id: 6,
      title: "Youtube obloshka yasash",

      moduls: [
         {
            id: 0,
            modul: "-Youtube kanal uchun shapka",
         },
         {
            id: 1,
            modul: "-Video uchun obloshka #1",
         },
         {
            id: 2,
            modul: "-Video uchun obloshka #2",
         },
         {
            id: 3,
            modul: "-Video uchun obloshka #3",
         },
         {
            id: 4,
            modul: "-Portfolio uchun prezintatsiya",
         },
      ],
   },
   {
      id: 7,
      title: "Mijozlar bilan ishlash",

      moduls: [
         {
            id: 0,
            modul: "-Portfolio yaratish qoidalari",
         },
         {
            id: 1,
            modul: "-Ish beruvchiga aloqaga chiqish",
         },
         {
            id: 2,
            modul: "-Freelance buyurtmalarda gaplashish madaniyati",
         },
         {
            id: 3,
            modul: "-Buyurtmani taqdim qilish tartibi",
         },
      ],
   },
   {
      id: 8,
      title: "Neyrosetlar bilan ishlash",

      moduls: [
         {
            id: 0,
            modul: "-Topaz Gigapixel",
         },
         {
            id: 1,
            modul: "-Adobe Firefly",
         },
         {
            id: 2,
            modul: "-Generative Fill. Adobe Photoshop",
         },
         {
            id: 3,
            modul: "-Telefon uchun dasturlar. Remini, Captions",
         },
      ],
   },
   {
      id: 9,
      title: "VFX",

      moduls: [
         {
            id: 0,
            modul: "-Rotoscoping",
         },
         {
            id: 1,
            modul: "-Mocha Tracking",
         },
         {
            id: 2,
            modul: "-2D - Tracking",
         },
         {
            id: 3,
            modul: "-Clinap",
         },
         {
            id: 4,
            modul: "-3D - Tracking",
         },
         {
            id: 5,
            modul: "-Post Production",
         },
      ],
   },
];

interface ModulsProps {}

const Moduls: React.FC<ModulsProps> = () => {
   const [active, setActive] = useState(1);
   const [swiperRef, setSwiperRef] = useState<any>(null);

   const prevHandler = () => {
      swiperRef.slidePrev();
   };

   const nextHandler = () => {
      swiperRef.slideNext();
   };

   return (
      <div className="custom-container">
         <div className="flex justify-center my-14">
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
                     stiffness: 100,
                  },
               }}
               viewport={{ once: true }}
               className="relative border border-white px-7 py-1"
            >
               <motion.span
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        delay: 0.1,
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="absolute -top-2 -left-2 max-sm:-top-1 max-sm:-left-1 w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"
               ></motion.span>
               <motion.span
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="absolute -top-2 -right-2 max-sm:-top-1 max-sm:-right-1 w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"
               ></motion.span>
               <motion.span
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        delay: 0.3,
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="absolute -top-2 left-1/2 max-sm:-top-1 w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"
               ></motion.span>
               <motion.span
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        delay: 0.4,
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 -left-2 max-sm:-bottom-1 max-sm:-left-1 max-sm: w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"
               ></motion.span>
               <motion.span
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        delay: 0.5,
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-1/2 max-sm:-bottom-1 max-sm: w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"
               ></motion.span>
               <motion.span
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 -right-2 max-sm:-bottom-1 max-sm:-right-1 max-sm: w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"
               ></motion.span>
               <h2 className="text-[53px] max-lg:text-[44px] max-sm:text-[32px] font-bold uppercase text-gradient">
                  Kurs dasturi
               </h2>
            </motion.div>
         </div>

         <div className="max-sm:block hidden mb-10">
            <div className="flex items-center justify-around mb-5">
               <button
                  aria-label={"arrowPrev"}
                  onClick={prevHandler}
                  className="rotate-180"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="19"
                     height="25"
                     viewBox="0 0 19 25"
                     fill="none"
                  >
                     <path
                        d="M18.5195 11.053L11.0436 0.996985C10.5774 0.369156 9.83854 -4.0046e-07 9.05061 -4.34902e-07L2.47721 -7.22234e-07C0.451479 -8.10782e-07 -0.715427 2.27689 0.484197 3.89092L6.88583 12.5L0.484197 21.1091C-0.715428 22.7231 0.451478 25 2.47721 25L9.0506 25C9.83854 25 10.5774 24.6308 11.0436 24.003L18.5195 13.947C19.1602 13.0847 19.1602 11.9126 18.5195 11.053Z"
                        fill="url(#paint0_linear_101_941)"
                     />
                     <defs>
                        <linearGradient
                           id="paint0_linear_101_941"
                           x1="-0.636364"
                           y1="12.7775"
                           x2="18.6304"
                           y2="11.9196"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="white" stopOpacity="0.22" />
                           <stop offset="1" stopColor="white" />
                        </linearGradient>
                     </defs>
                  </svg>
               </button>
               <p className="text-[11px] text-center text-white">
                  SMD | Modul #{active + 1}
               </p>
               <button
                  aria-label={"arrowNext"}
                  onClick={nextHandler}
                  className=""
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="19"
                     height="25"
                     viewBox="0 0 19 25"
                     fill="none"
                  >
                     <path
                        d="M18.5195 11.053L11.0436 0.996985C10.5774 0.369156 9.83854 -4.0046e-07 9.05061 -4.34902e-07L2.47721 -7.22234e-07C0.451479 -8.10782e-07 -0.715427 2.27689 0.484197 3.89092L6.88583 12.5L0.484197 21.1091C-0.715428 22.7231 0.451478 25 2.47721 25L9.0506 25C9.83854 25 10.5774 24.6308 11.0436 24.003L18.5195 13.947C19.1602 13.0847 19.1602 11.9126 18.5195 11.053Z"
                        fill="url(#paint0_linear_101_941)"
                     />
                     <defs>
                        <linearGradient
                           id="paint0_linear_101_941"
                           x1="-0.636364"
                           y1="12.7775"
                           x2="18.6304"
                           y2="11.9196"
                           gradientUnits="userSpaceOnUse"
                        >
                           <stop stopColor="white" stopOpacity="0.22" />
                           <stop offset="1" stopColor="white" />
                        </linearGradient>
                     </defs>
                  </svg>
               </button>
            </div>
            <div className="overflow-hidden">
               <Swiper
                  className=""
                  onSwiper={(swiper) => setSwiperRef(swiper)}
                  spaceBetween={10}
                  slidesPerView={1}
                  onSlideChange={(e) => setActive(e.activeIndex)}
               >
                  {arr.map((item: any) => {
                     return (
                        <SwiperSlide key={item.id}>
                           <div className="mb-3">
                              <h2 className="text-[16px] font-bold text-center text-white">
                                 {item.title}
                              </h2>
                           </div>
                           <div className="flex flex-col items-start gap-4 ml-9">
                              {item.moduls.map((item: any) => {
                                 return <Item key={item.id} item={item} />;
                              })}
                           </div>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </div>
         </div>

         <div className="relative mb-10 max-sm:hidden">
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
               className="mb-10 max-lg:mb-5"
            >
               {active <= 1 ? (
                  <motion.div
                     initial={{
                        opacity: 0,
                     }}
                     whileInView={{
                        opacity: 1,
                        transition: {
                           delay: 1,
                           type: "spring",
                           stiffness: 60,
                        },
                     }}
                     viewport={{ once: true }}
                     className="flex absolute left-16 max-xl:left-0 max-lg:-left-5 -top-20"
                  >
                     <p className="absolute text-xs top-5 left-2 text-white">
                        Keyingi modul
                     </p>
                     <Image
                        src={"/images/vector.svg"}
                        width={100}
                        height={100}
                        alt="vector"
                     />
                     <Image
                        className="translate-y-[24px]"
                        src={"/images/arrow.svg"}
                        width={100}
                        height={100}
                        alt="vector"
                     />
                  </motion.div>
               ) : null}
               <Range active={active} setActive={setActive} />
            </motion.div>

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
               className="rounded-[10px] border-2 overflow-hidden border-[#ffffff1a]"
            >
               <ul className="flex bg-[#00000029]">
                  <li className="flex items-center gap-2 py-3 px-10 max-lg:px-5 border-b-2 border-[#ffffff1a]">
                     <p className="w-3 h-3 max-lg:w-2 max-lg:h-2 rounded-full border-2 border-[#ffffff1a]"></p>
                     <p className="w-3 h-3 max-lg:w-2 max-lg:h-2 rounded-full border-2 border-[#ffffff1a]"></p>
                     <p className="w-3 h-3 max-lg:w-2 max-lg:h-2 rounded-full border-2 border-[#ffffff1a]"></p>
                  </li>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => {
                     return (
                        <motion.li
                           onClick={() => setActive(item + 1)}
                           key={item}
                           className={`w-full flex items-center justify-center text-[14px] max-xl:text-[10px] max-md:text-[8px] cursor-pointer ${
                              active === item + 1
                                 ? "border-x-2 border-[#ffffff1a] text-[#fff] bg-[#ffffff0f]"
                                 : "border-b-2 border-[#ffffff1a] text-[#ffffff33]"
                           }`}
                        >
                           <motion.button
                              initial={{
                                 opacity: 0,
                                 y: 10,
                              }}
                              whileInView={{
                                 opacity: 1,
                                 y: 0,
                                 transition: {
                                    delay: +`0.${item}`,
                                    type: "spring",
                                    stiffness: 60,
                                 },
                              }}
                              viewport={{ once: true }}
                           >
                              MODUL #{item + 1}
                           </motion.button>
                        </motion.li>
                     );
                  })}
               </ul>

               {arr.map((item: any) => {
                  if (active === item.id + 1) {
                     return (
                        <div
                           key={item.id}
                           className="flex justify-between items-center gap-5 py-6 px-20 max-xl:px-10 max-lg:px-5 gradient"
                        >
                           <div className="w-1/2 max-md:w-fit">
                              <motion.div
                                 initial={{
                                    opacity: 0,
                                    x: -20,
                                 }}
                                 whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                       delay: 0.2,
                                       type: "spring",
                                       stiffness: 60,
                                    },
                                 }}
                                 viewport={{ once: true }}
                                 className=""
                              >
                                 <p className="font-medium text-white">
                                    SMD | Modul #{active}
                                 </p>
                                 <h3 className="text-[31px] max-xl:text-[25px] max-lg:text-[20px] max-md:text-[18px] font-bold text-white">
                                    {item.title}
                                 </h3>
                              </motion.div>
                              <div className="mt-5">
                                 <ul className="flex flex-col max-md:justify-center gap-5 max-lg:gap-3 mt-5 max-lg:mt-3 max-md:mt-0 pl-10">
                                    {item.moduls.map((item: any) => (
                                       <Item key={item.id} item={item} />
                                    ))}
                                 </ul>
                              </div>
                           </div>

                           <div className="w-[40%] max-md:hidden">
                              <motion.div
                                 initial={{
                                    opacity: 0,
                                    x: 20,
                                 }}
                                 whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                       delay: 0.2,
                                       type: "spring",
                                       stiffness: 60,
                                    },
                                 }}
                                 viewport={{ once: true }}
                                 className="w-full h-full rounded-[50px] overflow-hidden bg-gray-600"
                              >
                                 <Image
                                    className="object-cover w-full h-full"
                                    src={"/images/bg-blue.svg"}
                                    width={1000}
                                    height={1000}
                                    alt="bg-blue"
                                 />
                              </motion.div>
                           </div>
                        </div>
                     );
                  }
               })}
            </motion.div>
         </div>
      </div>
   );
};

export default Moduls;
