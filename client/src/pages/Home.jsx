import React from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="px-20">
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-5xl font-bold text-blue-600">
          Hi, I'm Praneeth Kandukuri
        </h1>
        <p className="text-lg text-gray-600 mt-4">A Passionate Web Developer</p>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
          I specialize in creating responsive, user-friendly websites and web
          applications. Let's bring your ideas to life!
        </p>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          I'm a web developer based in Bhimavaram with a passion for creating
          sleek, functional, and intuitive websites. I have experience with
          frontend and backend development, and I'm always excited to learn new
          technologies and improve my skills.
        </p>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          When I'm not coding, I enjoy playing games. I'm always open to new
          challenges and collaborations. Feel free to reach out to me to work
          together on your next project!
        </p>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Portfolio Section */}
      <section className="py-20 text-center">
        <Projects />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          I'd love to hear from you! If you have any questions or project ideas,
          feel free to reach out.
        </p>
          <Link className="mt-6 inline-block text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-md" to="/contact">Send an Email</Link>

      </section>
    </div>
  );
};

export default Home;
