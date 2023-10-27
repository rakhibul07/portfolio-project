import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Personal Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" E-commerce Website"
            subTitle="2020"
            result="MERN"
            des="Developed a full-fledged e-commerce website using MERN stack technologies. Implemented user authentication, product catalog, and shopping cart functionality. "
          />
          <ResumeCard
            title="Task Management App"
            subTitle="2022"
            result="MERN"
            des="Created a task management application with React and Firebase, allowing users to create, update, and delete tasks. This project enhanced my front-end development skills."
          />
          <ResumeCard
            title="Portfolio Website"
            subTitle="2023"
            result="MERN"
            des="Designed and built my portfolio website from scratch, showcasing my web development skills. Customized the layout and added interactive elements to make it visually engaging."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">Online & Offline Courses </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development"
            subTitle="Modern Technical Institute (2020)"
            result="Offline"
            des="Completed a comprehensive web development bootcamp covering HTML, CSS, JavaScript, and responsive web design. Gained a strong foundation in front-end development. "
          />
          <ResumeCard
            title="MERN Stack Development"
            subTitle="Programming Hero (2023)"
            result="Online"
            des=" Completed an intensive MERN stack development program, covering the entire web development stack, including MongoDB, Express.js, React, and Node.js. "
          />
          <ResumeCard
            title="CMS Development "
            subTitle="NACTAR (2023)"
            result="Offline"
            des="Designed and developed a custom Content Management System (CMS) to streamline content creation, management, and publication for web applications. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;