import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="mb-10 max-md:mb-5">
         <div className="header">
            <nav>
               <ul className="header-ul">
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.4,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text"
                  >
                     <Link href={"#"}>#design</Link>
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.3,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text max-md:hidden custom-select-none"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.2,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text"
                  >
                     <Link href={"#"}>#motion</Link>
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.1,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text max-md:hidden custom-select-none"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                  >
                     <Image
                        priority
                        className="header-logo object-contain"
                        src={"/images/g.png"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.1,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text max-md:hidden custom-select-none"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.2,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text"
                  >
                     <Link href={"#"}>#color</Link>
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.3,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text max-md:hidden custom-select-none"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.4,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     viewport={{ once: true }}
                     className="header-text"
                  >
                     <Link href={"#"}>#editing</Link>
                  </motion.li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
