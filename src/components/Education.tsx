import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Primary School Certificate"
            subTitle="Shabgram Government Primary School(2009 - 2013)"
            result="5.00/5.00"
            des="I completed my primary education at Shabgram School and achieved a GPA of 5 in the Primary School Certificate (PSC) examination. This excellent academic performance reflects my dedication and hard work throughout my primary school years."
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Shabgram Kudratia High School (2014 - 2019)"
            result="5.00/5.00"
            des="
            I completed my secondary education at Shabgram Kudratia High School, earning a perfect GPA of 5 in the SSC examination. This reflects my unwavering dedication to academic excellence."
          />
          <ResumeCard
            title="Diploma in Engineering"
            subTitle="Bogura Polytechnic Institute (2019 - 2023)"
            result="3.97/4.00"
            des="I completed my diploma in engineering at Bogura Polytechnic Institute, achieving an impressive CGPA of 3.97. This significant accomplishment reflects my dedication and hard work throughout the program."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Education;
