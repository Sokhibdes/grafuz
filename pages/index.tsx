import { useState, useEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import Header from "@/components/Header";
import Hero from "@/containers/Hero";
import Moduls from "@/containers/Moduls";
import Footer from "@/components/Footer";
import PriceCourses from "@/containers/PriceCourses";
import Course from "@/containers/Course";
import Mentor from "@/containers/Mentor";
import SwiperContainer from "@/containers/SwiperContainer";

import { Inter } from "next/font/google";
import CourseStart from "@/containers/CourseStart";
import Loader from "@/components/Loader";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const [hide, setHide] = useState(true);

   useEffect(() => {
      window.addEventListener("load", () => {
         setHide(false);
      });
      const timeout = setTimeout(() => {
         setHide(false);
      }, 4000);

      return () => clearTimeout(timeout);
   });

   return (
      <>
         {hide ? (
            <Loader />
         ) : (
            <>
   			<Head>
               <title>GRAFUZ | SOHIB ABDURAMON</title>
            </Head>

               <main className={`overflow-hidden ${inter.className}`}>
                  <Header />
                  <section className="">
                     <Hero />
                  </section>

                  <section>
                     <Moduls />
                  </section>

                  <section>
                     <Mentor />
                  </section>

                  <section className="overflow-hidden">
                     <SwiperContainer />
                  </section>

                  <section>
                     <Course />
                  </section>

                  <section>
                     <PriceCourses />
                  </section>

                  <section>
                     <CourseStart />
                  </section>
               </main>
               <Footer />
            </>
         )}
      </>
   );
}
