import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="http://www.linkedin.com/in/praneeth-kandukuri-3a0457280" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Praneeth76" Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={MdEmail} />
    </div>
  );
};

export default ContactSocial;
