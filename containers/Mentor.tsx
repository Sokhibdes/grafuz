import Image from "next/image";
import { motion } from "framer-motion";
import {
   MouseParallaxContainer,
   MouseParallaxChild,
} from "react-parallax-mouse";

interface MentorProps {}

const Mentor: React.FC<MentorProps> = () => {
   return (
      <MouseParallaxContainer className="bg-white">
         <div className="custom-container relative flex justify-center pt-52 max-md:pt-32 pb-20">
            <div className="flex flex-col items-end absolute top-6 max-xl:top-20 max-lg:top-28 max-md:top-20 left-1/2 -translate-x-1/2">
               <MouseParallaxChild
                  factorX={0.02}
                  factorY={0.02}
                  className="absolute top-32 max-2xl:top-28 max-xl:top-20 max-lg:top-10 max-md:top-3"
               >
                  <motion.p
                     initial={{
                        opacity: 0,
                        y: -50,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.8,
                           type: "spring",
                           stiffness: 20,
                        },
                     }}
                     viewport={{ once: true }}
                     className="custom-select-none text-[30px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[11px] font-medium"
                  >
                     Abdurahmonov Sohib
                  </motion.p>
               </MouseParallaxChild>

               <MouseParallaxChild factorX={0.02} factorY={0.02}>
                  <p className="mentor select-none flex text-[337px] font-black">
                     {["M", "e", "n", "t", "o", "r"].map(
                        (item: string, idx: number) => {
                           return (
                              <motion.span
                                 className="block"
                                 initial={{
                                    opacity: 0,
                                    y: 50,
                                 }}
                                 whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                       delay: +`0.${idx}`,
                                       type: "spring",
                                       stiffness: 40,
                                    },
                                 }}
                                 viewport={{ once: true }}
                                 key={idx}
                              >
                                 {item}
                              </motion.span>
                           );
                        }
                     )}
                  </p>
               </MouseParallaxChild>
            </div>

            <div className="relative w-[500px]">
               <motion.p
                  initial={{
                     opacity: 0,
                     x: -50,
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0,
                     transition: {
                        delay: 1,
                        type: "spring",
                        stiffness: 40,
                     },
                  }}
                  viewport={{ once: true }}
                  className="pointer-events-none select-none absolute top-36 max-lg:top-40 max-sm:top-32 -left-14 max-lg:left-0 max-md:left-10 max-sm:left-0 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white"
               >
                  SMD kursi asoschisi
               </motion.p>
               <motion.p
                  initial={{
                     opacity: 0,
                     x: -50,
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0,
                     transition: {
                        delay: 1.4,
                        type: "spring",
                        stiffness: 40,
                     },
                  }}
                  viewport={{ once: true }}
                  className="pointer-events-none select-none absolute top-96 max-sm:top-72 -left-28 max-lg:-left-14 max-md:-left-5 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white"
               >
                  Graphic Designer
               </motion.p>
               <motion.p
                  initial={{
                     opacity: 0,
                     x: 50,
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0,
                     transition: {
                        delay: 1.2,
                        type: "spring",
                        stiffness: 40,
                     },
                  }}
                  viewport={{ once: true }}
                  className="pointer-events-none select-none absolute top-56 max-sm:top-48 -right-32 max-lg:-right-12 max-md:right-0 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white"
               >
                  Motion designer
               </motion.p>
               <motion.p
                  initial={{
                     opacity: 0,
                     x: 50,
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0,
                     transition: {
                        delay: 1.6,
                        type: "spring",
                        stiffness: 40,
                     },
                  }}
                  viewport={{ once: true }}
                  className="pointer-events-none select-none absolute top-[450px] max-sm:top-80 -right-3 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white"
               >
                  Video editing
               </motion.p>
               <motion.div
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        delay: 0.8,
                        type: "spring",
                        stiffness: 40,
                     },
                  }}
                  viewport={{ once: true }}
                  className="relative z-10"
               >
                  <Image
                     priority
                     className="pointer-events-none select-none"
                     src={"/images/sohib.svg"}
                     width={1000}
                     height={1000}
                     alt="soxib"
                  />
               </motion.div>
            </div>
         </div>
      </MouseParallaxContainer>
   );
};

export default Mentor;
