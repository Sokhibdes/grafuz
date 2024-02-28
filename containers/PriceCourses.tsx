import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { GlowCapture, Glow } from "@codaworks/react-glow";

interface PriceCoursesProps {}

const PriceCourses: React.FC<PriceCoursesProps> = () => {
   return (
      <GlowCapture className="w-full py-32   ">
         <div className="custom-container">
            <div className="flex justify-center mb-9 custom-select-none">
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
                           delay: 0.6,
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

            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-14 max-2xl:gap-x-7 max-xl:gap-x-5 gap-y-24">
               <Link href={"#"}>
                  <Glow
                     style={{ display: "block" }}
                     debug={false}
                     className="block"
                     color="red"
                  >
                     {
                        <motion.div
                           initial={{
                              x: "-100%",
                              opacity: 0,
                           }}
                           whileInView={{
                              x: 0,
                              opacity: 1,

                              transition: {
                                 delay: 0,
                                 type: "spring",
                                 stiffness: 70,
                              },
                           }}
                           viewport={{ once: true }}
                           className="custom-select-none"
                        >
                           <div className="m-1 glow:ring-4 glow:border-glow glow:ring-glow glow:bg-glow/30 || mb-4 py-5 px-8 max-xl:px-5 rounded-[30px] bg-gradient-to-r from-[#ffffff33] from-[11.14%] to-[#ffffff0a] to-[77.11%]">
                              <div className="flex items-center justify-between mb-3">
                                 <p className="text-[28px] max-lg:text-[22px] font-medium leading-[0.374px] text-white">
                                    Standart
                                 </p>
                                 <p className="bg-white px-3 py-2 font-medium leading-3 rounded-lg">
                                    -10%
                                 </p>
                              </div>
                              <div className="flex gap-4">
                                 <p className="text-[40px] max-2xl:text-[36px] max-xl:text-[35px] max-lg:text-[24px] font-bold tracking-[0.374px] text-white">
                                    3 495 605
                                 </p>
                                 <p className="text-[26px] font-medium text-white">
                                    UZS
                                 </p>
                              </div>
                              <div className="">
                                 <p className="text-[20px] line-through text-[#ffffff52]">
                                    3 845 165 UZS
                                 </p>
                              </div>
                           </div>
                           <div className="m-1 glow:ring-4 glow:border-glow glow:ring-glow glow:bg-glow/30 || px-8 max-xl:px-5 py-12 max-xl:py-9 rounded-[30px] bg-gradient-to-r from-[#ffffff17] from-[10.42%] to-[#ffffff0a] to-[113.29%] ">
                              <div className="mb-12 max-xl:mb-8">
                                 <ul className="text-white flex flex-col gap-4 max-lg:gap-2 text-[18px] max-2xl:text-[16px] font-semibold">
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> 9 ta modul
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Materiallar taqdim
                                          etilishi
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Portfolio uchun 10
                                          ta ish
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Deadline uchun 2
                                          kun
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Darslar uchun
                                          admin tomonidan yordam
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Video darslar
                                          uchun 3 oy muddatida ruxsatni saqlab
                                          quyish
                                       </p>
                                    </li>
                                 </ul>
                              </div>
                              <div className="">
                                 <button
                                    onClick={() => console.log("click")}
                                    className="cursor-pointer glow:ring-4 glow:bg-glow glow:ring-glow || w-full text-[25px] max-xl:text-[22px] max-lg:text-[18px] font-bold py-3 rounded-full bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
                                 >
                                    Kursga yozilish
                                 </button>
                                 <p className="text-[20px] text-center mt-5 max-xl:mt-3 text-[#ffffff42]">
                                    *1 ta guruhda 15 ta ishtirokchi
                                 </p>
                              </div>
                              <div className="blur-sm like custom-select-none duration-300 ease-in w-96 absolute -left-40 -bottom-32 z-[-2]">
                                 <Image
                                    priority
                                    src={"/images/up.svg"}
                                    width={1000}
                                    height={1000}
                                    alt="up"
                                 />
                              </div>
                           </div>
                        </motion.div>
                     }
                  </Glow>
               </Link>

               <Link href={"#"} className="h-fit max-lg:overflow-hidden">
                  <Glow
                     style={{ display: "block" }}
                     debug={false}
                     className="block"
                     color="blue"
                  >
                     {
                        <motion.div
                           initial={{
                              x: "-100%",
                              opacity: 0,
                           }}
                           whileInView={{
                              x: 0,
                              opacity: 1,

                              transition: {
                                 delay: 0.1,
                                 type: "spring",
                                 stiffness: 70,
                              },
                           }}
                           viewport={{ once: true }}
                           className="custom-select-none"
                        >
                           <div className="m-1 glow:ring-4 glow:border-glow glow:ring-glow glow:bg-glow/30 || mb-4 py-5 px-8 max-xl:px-5 rounded-[30px] bg-gradient-to-r from-[#ffffff33] from-[11.14%] to-[#ffffff0a] to-[77.11%]">
                              <div className="flex items-center justify-between mb-3">
                                 <p className="text-[28px] max-lg:text-[22px] font-medium leading-[0.374px] text-white">
                                    Premium
                                 </p>
                                 <p className="bg-[#4B45EE] text-white px-4 py-2 font-black leading-3 rounded-lg">
                                    XIT
                                 </p>
                              </div>
                              <div className="flex gap-4">
                                 <p className="text-[44px] max-2xl:text-[36px] max-xl:text-[35px] max-lg:text-[24px] font-bold tracking-[0.374px] text-white">
                                    4 781 957
                                 </p>
                                 <p className="text-[26px] font-medium text-white">
                                    UZS
                                 </p>
                              </div>
                              <div className="">
                                 <p className="text-[20px] line-through text-[#ffffff52]">
                                    5 260 152 UZS
                                 </p>
                              </div>
                              <div className="thunder custom-select-none w-52 absolute -right-24 max-xl:-right-20 max-lg:-right-16 top-0">
                                 <Image
                                    src={"/images/lightning.svg"}
                                    width={1000}
                                    height={1000}
                                    alt="up"
                                 />
                              </div>
                           </div>
                           <div className="m-1 glow:ring-4 glow:border-glow glow:ring-glow glow:bg-glow/30 || px-8 max-xl:px-5 py-12 max-xl:py-9 rounded-[30px] bg-gradient-to-r from-[#ffffff17] from-[10.42%] to-[#ffffff0a] to-[113.29%]">
                              <div className="mb-12 max-xl:mb-8">
                                 <ul className="text-white flex flex-col gap-4 max-lg:gap-2 text-[18px] max-2xl:text-[16px] font-semibold">
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> 9 ta modul
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Materiallar taqdim
                                          etilishi
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Portfolio uchun 10
                                          ta ish
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Deadline uchun 3
                                          kun
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Darslar uchun
                                          admin tomonidan yordam
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Video darslar
                                          uchun 5 oy muddatida ruxsatni saqlab
                                          quyish
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center text-[#00D1FF]">
                                       <p>
                                          <span>&bull;</span> Bloklarda Kurator
                                          tomonidan yordam
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center gap-4 text-[#00D1FF]">
                                       <p>
                                          <span>&bull;</span> Neyrosetlar bilan
                                          ishlar
                                       </p>
                                    </li>
                                 </ul>
                              </div>
                              <div
                                 className="testclick"
                                 onClick={() => console.log("click")}
                              >
                                 <button
                                    onClick={() => console.log("click")}
                                    className="abc glow:ring-4 glow:bg-glow glow:ring-glow || w-full text-[25px] max-xl:text-[22px] max-lg:text-[18px] font-bold py-3 rounded-full bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
                                 >
                                    Kursga yozilish
                                 </button>
                                 <p className="text-[20px] text-center mt-5 max-xl:mt-3 text-[#ffffff42]">
                                    *1 ta guruhda 8 ta ishtirokchi
                                 </p>
                              </div>
                           </div>
                        </motion.div>
                     }
                  </Glow>
               </Link>

               <Link href={"#"}>
                  <Glow
                     style={{ display: "block" }}
                     debug={false}
                     className="block"
                     color="violet"
                  >
                     {
                        <motion.div
                           initial={{
                              x: "-100%",
                              opacity: 0,
                           }}
                           whileInView={{
                              x: 0,
                              opacity: 1,

                              transition: {
                                 delay: 0.2,
                                 type: "spring",
                                 stiffness: 70,
                              },
                           }}
                           viewport={{ once: true }}
                           className="custom-select-none"
                        >
                           <div className="m-1 glow:ring-4 glow:border-glow glow:ring-glow glow:bg-glow/30 || mb-4 py-5 px-8 max-xl:px-5 rounded-[30px] bg-gradient-to-r from-[#ffffff33] from-[11.14%] to-[#ffffff0a] to-[77.11%]">
                              <div className="flex items-center justify-between mb-3">
                                 <p className="text-[28px]  max-lg:text-[22px] font-medium leading-[0.374px] text-white">
                                    VIP
                                 </p>
                                 <p className="bg-white px-2 py-2 font-medium leading-3 rounded-lg">
                                    -10%
                                 </p>
                              </div>
                              <div className="flex gap-4">
                                 <p className="text-[43px] max-2xl:text-[36px] max-xl:text-[35px] max-lg:text-[24px] font-bold text-white">
                                    5 972 247
                                 </p>
                                 <p className="text-[26px] font-medium text-white">
                                    UZS
                                 </p>
                              </div>
                              <div className="">
                                 <p className="text-[20px] line-through text-[#ffffff52]">
                                    6 569 471 UZS
                                 </p>
                              </div>
                           </div>

                           <div className="m-1 glow:ring-4 glow:border-glow glow:ring-glow glow:bg-glow/30 || px-8 max-xl:px-5 py-12 max-xl:py-9 rounded-[30px] bg-gradient-to-r from-[#ffffff17] from-[10.42%] to-[#ffffff0a] to-[113.29%]">
                              <div className="mb-12 max-xl:mb-8">
                                 <ul className="text-white flex flex-col gap-4 max-lg:gap-2 text-[18px] max-2xl:text-[16px] font-semibold">
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span className="">&bull;</span> 10 ta
                                          modul
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Materiallar taqdim
                                          etilishi
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Portfolio uchun 10
                                          ta ish
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Deadline uchun 5
                                          kun
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Darslar uchun
                                          admin tomonidan yordam
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center">
                                       <p>
                                          <span>&bull;</span> Video darslar
                                          uchun 7 oy muddatida ruxsatni saqlab
                                          quyish
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center text-[#00D1FF]">
                                       <p>
                                          <span>&bull;</span> Bloklarda Kurator
                                          tomonidan yordam
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center gap-4 text-[#00D1FF]">
                                       <p>
                                          <span>&bull;</span> Neyrosetlar bilan
                                          ishlar
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center text-[#00D1FF]">
                                       <p>
                                          <span>&bull;</span> 1 ta proektda
                                          boshidan oxirigacha kurator tomonidan
                                          yordam
                                       </p>
                                    </li>
                                    <li className="max-sm:text-center text-[#00D1FF]">
                                       <p>
                                          <span className="">&bull;</span> 2 ta
                                          ishtirokchiga Grafuz buyurtmalari
                                          bilan 1 oy tajriba oshirish
                                       </p>
                                    </li>
                                 </ul>
                              </div>
                              <div className="">
                                 <button
                                    onClick={() => console.log("click")}
                                    className="cursor-pointer glow:ring-4 glow:ring-glow glow:bg-glow || w-full text-[25px] max-xl:text-[22px] max-lg:text-[18px] font-bold py-3 rounded-full bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
                                 >
                                    Kursga yozilish
                                 </button>
                                 <p className="text-[20px] text-center mt-5 max-xl:mt-3 text-[#ffffff42]">
                                    *1 ta guruhda 5 ta ishtirokchi
                                 </p>
                              </div>
                              <div className="relative custom-select-none">
                                 <div className="star blur-sm w-80 absolute -left-36 z-[-1]">
                                    <Image
                                       src={"/images/star.svg"}
                                       width={1000}
                                       height={1000}
                                       alt="up"
                                    />
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     }
                  </Glow>
               </Link>
            </div>
         </div>
      </GlowCapture>
   );
};

export default PriceCourses;
