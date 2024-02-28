import Image from "next/image";

import { motion } from "framer-motion";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
   return (
      <motion.div
         initial={{ opacity: 1 }}
         whileInView={{ opacity: 0 }}
         transition={{
            delay: 3,
            ease: "easeOut",
            duration: 1,
         }}
         className="w-full h-screen fixed z-50 top-0 left-0 flex items-center justify-center"
      >
         <div className="w-60 max-md:w-40">
            <Image
               priority
               className="w-full h-full animate-pulse custom-select-none"
               src={"/images/logo-white.svg"}
               width={1000}
               height={1000}
               alt="logo"
            />
         </div>
      </motion.div>
   );
};

export default Loader;
