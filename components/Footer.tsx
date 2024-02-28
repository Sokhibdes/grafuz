import Image from "next/image";
import Link from "next/link";
import Social from "./children/Social";

interface FooterProps {}

const social = [
   {
      id: 0,
      icon: "instagram",
      bg: "#C21975",
      title: "Instagram",
      link: "#",
   },
   {
      id: 1,
      icon: "you-tube",
      bg: "red",
      title: "Youtube",
      link: "#",
   },
   {
      id: 2,
      icon: "tik-tok",
      bg: "#000000",
      title: "Tiktok",
      link: "#",
   },
   {
      id: 3,
      icon: "telegram",
      bg: "#1E96C8",
      title: "Telegram",
      link: "#",
   },
   {
      id: 5,
      icon: "phone",
      bg: "#7800B0",
      title: "20 002-09-08",
      link: "tel:20 002-09-08",
   },
   {
      id: 6,
      icon: "telegram",
      bg: "#1E96C8",
      title: "Telegram",
      link: "#",
   },
];

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer>
         <div className="custom-container">
            <div className="flex items-start justify-between max-md:grid grid-cols-2">
               <div className="">
                  <h3 className="mb-5 max-sm:mb-4 text-2xl max-lg:text-xl max-sm:text-sm font-light leading-[42px] tracking-[0.374px] text-[#ffffffab]">
                     Kurs
                  </h3>
                  <ul>
                     <li className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"}>Modullar</Link>
                     </li>
                     <li className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"}>Kurs haqida</Link>
                     </li>
                     <li className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"}>Narxi</Link>
                     </li>
                  </ul>
               </div>
               <div className="max-md:hidden">
                  <h3 className="mb-5 text-2xl max-lg:text-xl font-light leading-[42px] tracking-[0.374px] text-[#ffffffab]">
                     Social
                  </h3>
                  <ul className="flex flex-col gap-3">
                     {social.slice(0, 4).map((social: any) => {
                        return <Social key={social.id} social={social} />;
                     })}
                  </ul>
               </div>
               <div className="">
                  <h3 className="mb-5 max-sm:mb-4 text-2xl max-lg:text-xl max-sm:text-sm font-light leading-[42px] tracking-[0.374px] text-[#ffffffab]">
                     Bog’lanish
                  </h3>
                  <ul className="flex flex-col gap-3">
                     {social.slice(4).map((social: any) => {
                        return <Social key={social.id} social={social} />;
                     })}
                  </ul>
               </div>
               <div className="col-span-3 max-md:block hidden mt-8">
                  <ul className="flex items-center justify-center gap-4">
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/mb-Instagram.svg"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/mb-youtube.svg"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/mb-tiktok.svg"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/telegram.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="flex max-lg:flex-col items-center justify-between mt-9">
               <div className="flex max-md:flex-col items-center gap-9 max-md:gap-5">
                  <div className="w-20 h-20">
                     <Image
                        priority
                        src={"/images/logo-white.svg"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </div>
                  <div className="max-md:text-center">
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        2023 | Grafuz
                     </p>
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        Materiallarni nusxalash taqiqlanadi.
                     </p>
                  </div>
                  <div className="max-md:text-center">
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        Maxfiylik siyosati
                     </p>
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        Shartnoma
                     </p>
                  </div>
               </div>

               <div className="flex items-center gap-5 max-lg:mt-3">
                  <Link href={"#"}>
                     <Image
                        className="w-28"
                        priority
                        src={"/images/social/click.svg"}
                        width={1000}
                        height={1000}
                        alt="click"
                     />
                  </Link>
                  <Link href={"#"}>
                     <Image
                        className="w-28"
                        priority
                        src={"/images/social/payme.svg"}
                        width={1000}
                        height={1000}
                        alt="click"
                     />
                  </Link>
                  <Link href={"#"}>
                     <Image
                        className="w-28"
                        priority
                        src={"/images/social/uzum.svg"}
                        width={1000}
                        height={1000}
                        alt="click"
                     />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
