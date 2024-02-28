import Image from "next/image";
import axios from "axios";
import InputMask from "react-input-mask";
import moment from "moment";
import { motion } from "framer-motion";

import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";

type Inputs = {
   name: string;
   number: string;
   dateTime: string;
};

const Form: React.FC = () => {
   const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;
   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
   const [inpClear, setInpClear] = useState("");

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = (data: any) => {
      setIsSubmitSuccessful(!isSubmitSuccessful);
      const dateTime = moment().format("HH:mm YY.MM.DD");

      let OBJ = `Имя и фамилия: ${data.name} \n`;
      OBJ += `Номер телефона: ${data.number} \n`;

      axios
         .post(URL, {
            chat_id: process.env.NEXT_PUBLIC_ID,
            parse_mode: "html",
            text: OBJ,
         })
         .then((res) => {
            if (res.status === 200 || res.status === 201) {
               // reset({
               //    name: "",
               //    number: "",
               // });
            }
         });
   };

   useEffect(() => {
      reset({
         name: "",
         number: "",
      });
      setInpClear("");

      setTimeout(() => {
         setIsSubmitSuccessful(false);
      }, 3000);
   }, [isSubmitSuccessful]);

   return (
      <>
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
            className="relative max-lg:mt-20 max-w-xl max-xl:max-w-lg max-lg:max-w-full w-full pt-8 pb-12 max-md:pb-8 max-sm:pb-5 px-9 max-lg:px-5 max-sm:px-3 rounded-[30px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]"
         >
            <div className="w-48 max-sm:w-32 absolute -top-20 -left-20 max-lg:-left-16 max-sm:-top-16 max-sm:-left-12">
               <Image
                  src={"/images/fire.png"}
                  width={1000}
                  height={1000}
                  alt="fire"
               />
            </div>
            <div className="">
               <h3 className="text-[34px] font-bold leading-[41px] tracking-[0.374px] text-center text-white">
                  Ariza qoldiring
               </h3>
               <p className="font-medium leading-[41px] tracking-[0.374px] text-center text-white">
                  va bepul darsni qo’lga kiriting
               </p>
            </div>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="w-full flex flex-col gap-4 max-lg:gap-3 max-sm:gap-2"
            >
               <div className="relative">
                  <input
                     {...register("name", {
                        required: true,
                     })}
                     type="text"
                     placeholder="Ism familyangiz"
                     className="inp w-full py-3 px-7 max-lg:px-5 text-2xl max-lg:text-xl max-sm:text-lg font-medium leading-[41px] rounded-xl text-[#ffffff]"
                  />
                  {errors.name && (
                     <p className="absolute -bottom-[18px] left-2 select-none text-red-700">
                        error
                     </p>
                  )}
               </div>

               <div className="relative">
                  <InputMask
                     className="inp w-full py-3 px-7 max-lg:px-5 text-2xl max-lg:text-xl max-sm:text-lg font-medium leading-[41px] rounded-xl text-[#ffffff]"
                     mask="+\9\98-(99)-999-99-99"
                     placeholder="+998-(__)-___-__-__"
                     {...register("number", {
                        required: true,
                     })}
                     onChange={(e) => setInpClear(e.target.value)}
                     value={inpClear}
                  ></InputMask>
                  {errors.number && (
                     <p className="absolute -bottom-[18px] left-2 select-none text-red-700">
                        error
                     </p>
                  )}
               </div>
               <button className="py-3 max-md:py-0 text-2xl leading-[41px] font-bold rounded-xl bg-gradient-to-r from-[#cc00ff7d] from-[10.42%] to-[#074dff80] to-[77.11%] text-white">
                  Yuborish
               </button>
            </form>
            <div className="mt-2">
               <p className="max-lg:text-xs max-sm:text-[10px] max-sm:leading-[13px] text-center text-white">
                  Tugmani bosish orqali siz bizga
                  <span className="underline underline-offset-2">
                     shaxsiy malumotlar
                  </span>
                  ingizni qayta ishlashga ruxsat berasiz va
                  <span className="underline underline-offset-2">
                     taklif shartlari
                  </span>
                  ga rozilik bildirasiz.
               </p>
            </div>
         </motion.div>
         {isSubmitSuccessful ? (
            <div className="w-full h-screen fixed z-[100] top-0 left-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
               <div className="max-w-xl max-md:max-w-xs w-full py-14 max-md:py-7 text-5xl text-center rounded-lg bg-[#0b0414]">
                  <p className="text-green-400 max-md:text-3xl">✔</p>
                  <p className="text-white uppercase mt-3 max-md:text-3xl">
                     Yuborildi
                  </p>
               </div>
            </div>
         ) : null}
      </>
   );
};

export default Form;
