import Image from "next/image";

import { motion } from "framer-motion";
import {
   MouseParallaxContainer,
   MouseParallaxChild,
} from "react-parallax-mouse";

interface CourseProps {}

const Course: React.FC<CourseProps> = () => {
   return (
      <>
         <div className="mt-28 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
         <MouseParallaxContainer className="overscroll-none">
            <div className="bg-gradient-to-r from-[#0B0414] from-1.3% to-[#18234A] to-90.92% py-40 max-md:py-28 max-sm:py-16">
               <div className="custom-container relative flex max-md:flex-col max-md:gap-28 items-center justify-between max-md:justify-center">
                  <div className="w-full h-[618.55px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/4 custom-select-none">
                     <Image
                        className="opacity-50"
                        src={"/images/grid-2.svg"}
                        width={1000}
                        height={1000}
                        alt="grid"
                     />
                  </div>

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
                           stiffness: 100,
                        },
                     }}
                     viewport={{ once: true }}
                     className="w-1/2 max-md:w-full"
                  >
                     <div className="mb-8 max-sm:mb-5">
                        <h2 className="text-[72px] max-xl:text-[60px] max-lg:text-[50px] max-sm:text-[43px] font-bold max-sm:text-center text-white">
                           Bu KURSDA
                        </h2>
                     </div>
                     <div className="mb-8">
                        <ul className="text-[37px] max-xl:text-[30px] max-md:text-[26px] mb-8 max-sm:text-center text-white">
                           <li className="mb-1">
                              &bull; &nbsp;Adobe Photoshop
                           </li>
                           <li className="mb-1">
                              &bull; &nbsp;Adobe Premiere Pro
                           </li>
                           <li className="mb-1">
                              &bull; &nbsp;Adobe After Effects
                           </li>
                           <li className="mb-1">&bull; &nbsp;Adobe Audition</li>
                           <li className="">&bull; &nbsp;Mocha PRO</li>
                        </ul>
                        <p className="text-[37px] max-xl:text-[30px] max-md:text-[20px] max-sm:leading-[25px] max-sm:text-center text-white">
                           kabi dasturlarda SMM dizayn sohasida kerak bo’ladigan
                           barcha bilimga ega bo’lasiz.
                        </p>
                     </div>
                     <div className="">
                        <motion.button
                           whileTap={{ scale: 0.95 }}
                           className="max-sm:w-full flex items-center max-sm:justify-center gap-3 py-3 px-6 max-sm:px-4 text-[25px] max-lg:text-[18px] font-bold leading-[41px] rounded-xl bg-gradient-to-tr from-[#cc00ff7d] from-[10.42%] to-[#074dff80] to-[77.11%] text-white"
                        >
                           Kurs INTROsini tomosha qilish
                           <svg
                              className="max-lg:w-4 max-sm:hidden"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="27"
                              viewBox="0 0 23 27"
                              fill="none"
                           >
                              <path
                                 d="M15.2049 5.3141C19.5488 8.09322 21.7208 9.48278 22.4363 11.2689C23.0099 12.701 23.0099 14.299 22.4363 15.7311C21.7208 17.5172 19.5488 18.9068 15.2049 21.6859C10.2309 24.8681 7.74386 26.4592 5.68776 26.2657C4.04425 26.111 2.53708 25.286 1.52107 23.9849C0.249999 22.3573 0.249999 19.4048 0.249999 13.5C0.249999 7.59516 0.249999 4.64274 1.52107 3.01506C2.53708 1.71399 4.04426 0.889004 5.68776 0.734317C7.74386 0.540798 10.2309 2.1319 15.2049 5.3141Z"
                                 fill="#E0E0E0"
                              />
                           </svg>
                        </motion.button>
                     </div>
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
                           type: "spring",
                           stiffness: 100,
                        },
                     }}
                     viewport={{ once: true }}
                     className="relative z-10 custom-select-none"
                  >
                     <div className="max-w-[637px] w-full h-full rounded-[50%] absolute z-[-2] top-0 -left-20 blur-[285px] bg-[#8e69ded2]"></div>
                     <MouseParallaxChild
                        factorX={0.01}
                        factorY={0.01}
                        className=""
                     >
                        <Image
                           className="absolute z-[60] top-20 max-md:top-20 max-lg:top-24 -right-5 ma5x-lg:-right-3 w-16 max-lg:w-12"
                           src={"/images/apps/cube.svg"}
                           width={1000}
                           height={1000}
                           alt="iphone"
                        />
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.02}
                        factorY={0.02}
                        className="absolute z-[60] -left-16 max-lg:-left-10 max-md:-left-5 bottom-72 max-lg:bottom-56 max-md:bottom-32"
                     >
                        <Image
                           className="w-32 max-lg:w-24 max-md:w-14"
                           src={"/images/apps/cube.svg"}
                           width={1000}
                           height={1000}
                           alt="iphone"
                        />
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.01}
                        factorY={0.01}
                        className=""
                     >
                        <Image
                           className="absolute -top-10 max-md:top-5 -left-48 max-xl:-left-36 max-lg:-left-24 max-md:-left-16 z-[-20] w-64 max-xl:w-52 max-lg:w-40 max-md:w-28"
                           src={"/images/apps/photoshop.svg"}
                           width={1000}
                           height={1000}
                           alt="iphone"
                        />
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.015}
                        factorY={0.015}
                        className=""
                     >
                        <Image
                           className="absolute z-[60] -right-24 max-2xl:-right-16 max-xl:-right-8 max-lg:-right-3 top-80 max-md:top-56 w-40 max-lg:w-32 max-md:w-20"
                           src={"/images/apps/premiere.svg"}
                           width={1000}
                           height={1000}
                           alt="iphone"
                        />
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.01}
                        factorY={0.01}
                        className=""
                     >
                        <Image
                           className="absolute -top-20 max-md:-top-10 right-6 max-md:-right-8 w-40 max-md:w-32"
                           src={"/images/apps/illustrator.svg"}
                           width={1000}
                           height={1000}
                           alt="iphone"
                        />
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.03}
                        factorY={0.03}
                        className="absolute z-[60] -left-32 max-lg:-left-20 max-md:-left-14 bottom-52 max-lg:bottom-40 max-md:bottom-16"
                     >
                        <Image
                           className="w-44 max-lg:w-32 max-md:w-24"
                           src={"/images/apps/aftereffects.svg"}
                           width={1000}
                           height={1000}
                           alt="iphone"
                        />
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.04}
                        factorY={0.04}
                        className="absolute z-[60] top-60 max-md:top-48 -left-24 max-md:-left-16 w-fit py-5 max-lg:py-3 max-md:py-1 px-10 max-lg:px-8 text-[34px] max-lg:text-[24px] max-md:text-[19px] font-bold rounded-[30px] max-lg:rounded-[20px] border-2 border-[#ffffff80] text-white backdrop-blur-[35px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]"
                     >
                        <p>Design</p>
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.04}
                        factorY={0.04}
                        className="absolute z-[60] top-40 max-md:top-24 -right-24 max-2xl:-right-16 max-xl:-right-8 max-lg:-right-5 w-fit py-5 max-lg:py-3 max-md:py-1 px-10 max-lg:px-8 text-[34px] max-lg:text-[24px] max-md:text-[19px] font-bold rounded-[30px] max-lg:rounded-[20px] border-2 border-[#ffffff80] text-white backdrop-blur-[35px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]"
                     >
                        <p>Trend</p>
                     </MouseParallaxChild>
                     <MouseParallaxChild
                        factorX={0.005}
                        factorY={0.01}
                        className="relative z-50 w-96 max-lg:w-80 max max-md:w-56"
                     >
                        <Image
                           src={"/images/iphone.svg"}
                           width={1000}
                           height={1000}
                           alt="iphone"
                        />
                     </MouseParallaxChild>
                  </motion.div>
               </div>
            </div>
         </MouseParallaxContainer>
         <div className="w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
      </>
   );
};

export default Course;
