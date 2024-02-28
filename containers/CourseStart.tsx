import Form from "@/components/Form";
import Counter from "@/components/Сounter";

interface CourseStartProps {}

const CourseStart: React.FC<CourseStartProps> = () => {
   return (
      <>
         <div className="w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
         <div className="bg-gradient-to-r from-[#18234A] from-1.3% to-[#0B0414] to-90.92% py-20">
            <div className="custom-container flex max-lg:flex-col items-center justify-between ">
               <Counter />

               <Form />
            </div>
         </div>
         <div className="mb-7 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
      </>
   );
};

export default CourseStart;
