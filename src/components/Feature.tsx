import {  AiFillAppstore } from "react-icons/ai";
import {  FaGlobe,  FaUserLock } from "react-icons/fa";
import {  SiAntdesign, SiDatabricks } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Develpment"
            des="Web development is creating and maintaining websites and web apps for a great user experience."
            icon={null}
          />
          <Card
            title="SPAS"
            des="A Single Page Application (SPAS) is a web app that loads one page and updates content dynamically for a smoother user experience."
            icon={<AiFillAppstore />}
          />
          <Card
            title="DB Management"
            des="A Database Management System (DBMS) is software that facilitates the storage, organization, retrieval, and management of data within a database."
            icon={<SiDatabricks/>}
          />
          <Card
            title="Authentication"
            des="Authentication verifies a user's identity, while authorization controls their access to specific resources or actions based on that identity."
            icon={<FaUserLock />}
          />
          <Card
            title="UX Design"
            des="User Experience (UX) design focuses on creating products and interfaces that are intuitive, user-friendly, and enjoyable. "
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="Web hosting is the process of storing and serving website files, making them accessible on the internet."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
