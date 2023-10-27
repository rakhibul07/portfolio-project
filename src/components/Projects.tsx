import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo,projectFour,projectFive, projectSix } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
           
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="GADGET GALAXY"
            des="Elevate your tech game with the latest gadgets from Apple, Samsung, Xiaomi and more at Gadget Galaxy."
            src={projectOne}
            link="https://gadget-galaxy-a19ea.web.app/"
            code="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-rakhibul07"
          />
          <ProjectsCard
            title="Event Management"
            des="Your one-stop solution for seamless event planning. Explore our event management website for a stress-free experience."
            src={projectTwo}
            link="https://assignment-9-ee090.web.app/"
            code="https://github.com/programming-hero-web-course-4/b8a9-event-management-rakhibul07"
          />
          <ProjectsCard
            title="Donation Campaign"
            des="Join us in our mission for change. Contribute to our cause by donating on our campaign website."
            src={projectThree}
            link=" https://fortunate-swing.surge.sh"
            code=" https://github.com/programming-hero-web-course-4/b8a8-donation-campaign-rakhibul07"
          />
          <ProjectsCard
            title="PROGRAMMING COURSE"
            des="Unlock your coding potential with our programming courses. Learn to build software, master coding languages, and advance your tech skills."
            src={projectFour}
            link="https://erect-railway.surge.sh"
            code="https://github.com/programming-hero-web-course2/my-course-roster-rakhibul07"
          />
          <ProjectsCard
            title="PH Tube"
            des="Your go-to source for captivating videos and engaging content on YouTube. Explore, watch, and subscribe to your favorite channels."
            src={projectFive}
            link="https://assignment-6-gamma.vercel.app"
            code=" https://github.com/programming-hero-web-course1/b8a6-build-phtube-rakhibul07"
          />
          <ProjectsCard
            title="Phone Hunter"
            des="A phone shop website is an online store specializing in mobile phones and accessories, offering a convenient shopping experience with a variety of options from different brands."
            src={projectSix}
            link="https://swanky-turn.surge.sh/"
            code="https://github.com/rakhibul07/phone-shop"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
